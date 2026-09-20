/**
 * Sample excerpt from the Sep 18, 2026 weekday brief.
 * Text copied from research/briefs/2026-09-18.md — not invented.
 * Primary source citation kept visible on the lander.
 */
export function StatusBoardMock() {
  return (
    <article className="sample-brief">
      <header className="sample-brief-header">
        <div>
          <p className="sample-brief-kicker">Sample · Sep 18, 2026 brief</p>
          <h3 className="sample-brief-title">
            H.R. 5334 — Russia/Iran sanctions package on the president&apos;s
            desk
          </h3>
        </div>
        <p className="sample-brief-stamp">one section · illustrative</p>
      </header>

      <div className="sample-brief-body">
        <p>
          Congress finished a major <strong>Russia and Iran sanctions</strong>{" "}
          bill named for the late Sen. <strong>Lindsey O. Graham</strong>. On{" "}
          <strong>Sep 16</strong> the House agreed to the Senate&apos;s version{" "}
          <strong>262–159</strong> (Roll no. 308). On <strong>Sep 17</strong>{" "}
          Congress.gov records it as <strong>Presented to President</strong>.
          Until the president signs, it is <strong>not</strong> law.
        </p>
        <p>
          Reporting describes authorities to tighten sanctions on Russian
          networks and Iran, and to authorize <strong>tariffs</strong> aimed at
          top third-country buyers of Russian energy / sanctions-evasion
          facilitators (press often says &ldquo;up to 100%&rdquo; — treat exact
          tariff text as whatever the enrolled amendments say, not headlines).
        </p>
        <dl className="sample-brief-meta">
          <div>
            <dt>Kind</dt>
            <dd>Federal statute-in-waiting</dd>
          </div>
          <div>
            <dt>Now</dt>
            <dd>On the president&apos;s desk</dd>
          </div>
          <div>
            <dt>Legally changed yet?</dt>
            <dd>No. Presentment is not enactment.</dd>
          </div>
        </dl>
      </div>

      <footer className="sample-brief-cite">
        <span className="sample-brief-cite-label">Primary source</span>
        <a
          href="https://www.congress.gov/bill/119th-congress/house-bill/5334"
          target="_blank"
          rel="noopener noreferrer"
        >
          Congress.gov — H.R. 5334 (Presented to President 09/17/2026)
        </a>
      </footer>
    </article>
  );
}
