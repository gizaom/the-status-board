import { StatusBoardMock } from "@/components/StatusBoardMock";
import { WaitlistForm } from "@/components/WaitlistForm";
import { SubscribeButton } from "@/components/SubscribeButton";

export default function HomePage() {
  const stripeConfigured = Boolean(
    process.env.STRIPE_SECRET_KEY?.trim() &&
      process.env.STRIPE_PRICE_ID?.trim()
  );

  return (
    <main className="site">
      <header className="masthead">
        <div className="masthead-mark">The Status Board</div>
        <div className="masthead-meta">Federal · Florida · Weekdays</div>
      </header>

      <section className="hero">
        <p className="hero-kicker">Weekday · Federal + Florida</p>
        <h1>What moved. What matters. Before the day starts.</h1>
        <p className="hero-pitch">
          A paid weekday brief on technical politics — agency dockets,
          Tallahassee, statute that actually changed. Plain English. No horse
          race.
        </p>
        <div className="hero-actions">
          <a className="btn" href="#waitlist">
            Join the waitlist
          </a>
          <a className="btn btn-ghost" href="#sample">
            Read the Sep 18 sample
          </a>
        </div>
      </section>

      <section className="section" id="what">
        <p className="section-label">01 · What you get</p>
        <h2>Signal over spectacle</h2>
        <ul className="bullets">
          <li>
            <strong>Weekday brief, every morning</strong>
            <span>
              A short instrument read before the day starts — not a weekend
              dump, not a firehose.
            </span>
          </li>
          <li>
            <strong>Federal + Florida angles</strong>
            <span>
              Agency rulemaking, procurement, and Tallahassee moves that touch
              tech — side by side.
            </span>
          </li>
          <li>
            <strong>Plain English</strong>
            <span>
              Docket numbers and statute cites when they matter; no jargon
              theater.
            </span>
          </li>
          <li>
            <strong>No horse-race noise</strong>
            <span>
              Status of the work, not the poll of the hour. Who filed, what
              changed, what to watch.
            </span>
          </li>
        </ul>
      </section>

      <section className="section" id="sample">
        <p className="section-label">02 · Sample brief</p>
        <h2>A real excerpt from Sep 18</h2>
        <p className="lede">
          One section from a prior weekday brief — wording unchanged, primary
          source linked. Not a live feed; Florida receipts land in Phase B.
        </p>
        <StatusBoardMock />
      </section>

      <section className="section" id="pricing">
        <p className="section-label">03 · Pricing</p>
        <h2>One price. Weekdays.</h2>
        <div className="pricing-card">
          <p className="section-label" style={{ marginTop: 0 }}>
            Subscription
          </p>
          <p className="price">
            $9<span>/mo</span>
          </p>
          <p className="pricing-note">
            {stripeConfigured
              ? "Cancel anytime. Stripe Checkout is live."
              : "Cancel anytime. Waitlist until Stripe keys are live — no dead checkout button."}
          </p>
          <SubscribeButton stripeConfigured={stripeConfigured} />
        </div>
      </section>

      <section className="section" id="waitlist">
        <p className="section-label">04 · Waitlist</p>
        <h2>Get early access</h2>
        <p className="lede">
          Leave an email. We will not spam — just a note when paid briefs open.
        </p>
        <WaitlistForm />
      </section>

      <footer className="footer">
        <span>© {new Date().getFullYear()} The Status Board</span>
        <span>Phase A lander · FL receipts in Phase B</span>
      </footer>
    </main>
  );
}
