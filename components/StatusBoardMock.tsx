const rows = [
  {
    scope: "Federal",
    label: "OMB memo on agency AI procurement",
    note: "Guidance circulating; comment window not yet set.",
    status: "watch" as const,
    stamp: "T+2d",
  },
  {
    scope: "Federal",
    label: "FCC open-internet order appeal docket",
    note: "Briefing schedule posted; oral argument TBD.",
    status: "live" as const,
    stamp: "LIVE",
  },
  {
    scope: "Florida",
    label: "FDLE data-sharing rule draft",
    note: "House staff mark-up expected next session week.",
    status: "watch" as const,
    stamp: "T+5d",
  },
  {
    scope: "Florida",
    label: "Statewide broadband map refresh",
    note: "Challenge period closed; final map pending.",
    status: "quiet" as const,
    stamp: "HOLD",
  },
  {
    scope: "Federal",
    label: "NIST CSF 2.0 agency adoption tracker",
    note: "Three cabinet depts. reported baseline this week.",
    status: "live" as const,
    stamp: "TICK",
  },
];

export function StatusBoardMock() {
  return (
    <div>
      <div className="board" aria-hidden="true">
        <div className="board-header">
          <div className="board-title">Sample board · Mon edition</div>
          <div className="board-stamp">illustrative · not a live feed</div>
        </div>
        {rows.map((row) => (
          <div className="tick-row" key={row.label}>
            <div className="tick-scope">{row.scope}</div>
            <div className="tick-label">
              {row.label}
              <span className="tick-note">{row.note}</span>
            </div>
            <div className={`tick-status ${row.status}`}>{row.stamp}</div>
          </div>
        ))}
      </div>
      <p className="board-caption">
        Static mock of the weekday instrument board. Phase A lander only —
        Florida receipts and live ticks land in Phase B.
      </p>
    </div>
  );
}
