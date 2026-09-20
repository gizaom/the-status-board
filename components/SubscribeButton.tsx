"use client";

import { useState } from "react";

export function SubscribeButton() {
  const [busy, setBusy] = useState(false);
  const [message, setMessage] = useState("");

  async function startCheckout() {
    setBusy(true);
    setMessage("");

    try {
      const res = await fetch("/api/checkout", { method: "POST" });
      const data = (await res.json()) as {
        url?: string;
        message?: string;
        error?: string;
        configured?: boolean;
      };

      if (data.url) {
        window.location.href = data.url;
        return;
      }

      setMessage(
        data.message ||
          data.error ||
          "Stripe is not configured yet. Join the waitlist below."
      );
    } catch {
      setMessage("Could not reach checkout. Try the waitlist instead.");
    } finally {
      setBusy(false);
    }
  }

  return (
    <div>
      <button
        type="button"
        className="btn"
        onClick={startCheckout}
        disabled={busy}
      >
        {busy ? "Opening…" : "Subscribe $9/mo"}
      </button>
      {message ? (
        <p className="form-msg" role="status" style={{ marginTop: "0.75rem" }}>
          {message}
        </p>
      ) : null}
    </div>
  );
}
