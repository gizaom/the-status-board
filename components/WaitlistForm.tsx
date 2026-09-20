"use client";

import { FormEvent, useState } from "react";

export function WaitlistForm() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "err">(
    "idle"
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: FormEvent) {
    e.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const res = await fetch("/api/waitlist", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string; error?: string };

      if (!res.ok) {
        setStatus("err");
        setMessage(data.error || "Something went wrong. Try again.");
        return;
      }

      setStatus("ok");
      setMessage(data.message || "You're on the list.");
      setEmail("");
    } catch {
      setStatus("err");
      setMessage("Network error. Try again in a moment.");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit} noValidate>
      <div className="form-row">
        <input
          type="email"
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          disabled={status === "loading"}
          aria-label="Email address"
        />
        <button
          type="submit"
          className="btn"
          disabled={status === "loading" || !email.trim()}
        >
          {status === "loading" ? "Joining…" : "Join waitlist"}
        </button>
      </div>
      <p
        className={`form-msg ${status === "ok" ? "ok" : status === "err" ? "err" : ""}`}
        role="status"
      >
        {message}
      </p>
    </form>
  );
}
