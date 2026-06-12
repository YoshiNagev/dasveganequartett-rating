type RatingSession = {
  id: string;
  created_at: string;
  completed_at: string | null;
};

type Props = {
  sessions: RatingSession[];
};

function formatDate(date: string | null) {
  if (!date) {
    return "—";
  }

  return new Intl.DateTimeFormat("de-DE", {
    dateStyle: "short",
    timeStyle: "short",
  }).format(new Date(date));
}

export default function SessionsTable({ sessions }: Props) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>Session-ID</th>
            <th>Erstellt</th>
            <th>Abgeschlossen</th>
          </tr>
        </thead>

        <tbody>
          {sessions.map((session) => (
            <tr key={session.id}>
              <td>{session.id}</td>
              <td>{formatDate(session.created_at)}</td>
              <td>{formatDate(session.completed_at)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}