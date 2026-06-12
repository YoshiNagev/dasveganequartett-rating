type Props = {
  sessionsCount: number;
  ratingsCount: number;
  completedFullSessions: number;
};

export default function StatsCards({
  sessionsCount,
  ratingsCount,
  completedFullSessions,
}: Props) {
  return (
    <section className="admin-grid">
      <div className="stat-card">
        <strong>{sessionsCount}</strong>
        <span>Sessions insgesamt</span>
      </div>

      <div className="stat-card">
        <strong>{completedFullSessions}</strong>
        <span>Vollständige Teilnahmen</span>
      </div>

      <div className="stat-card">
        <strong>{ratingsCount}</strong>
        <span>Einzelbewertungen</span>
      </div>
    </section>
  );
}