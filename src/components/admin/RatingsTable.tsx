import type { RatingAverage } from "../../lib/statistics";

type Props = {
  rows: RatingAverage[];
};

export default function RatingsTable({ rows }: Props) {
  return (
    <div className="table-wrap">
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Kategorie</th>
            <th>Argument</th>
            <th>Verbreitung</th>
            <th>Komplexität</th>
            <th>Emotionalität</th>
            <th>Delulu</th>
            <th>Ragebait</th>
            <th>Ablenkung</th>
            <th>N</th>
          </tr>
        </thead>

        <tbody>
          {rows.map((row) => (
            <tr key={row.argument_id}>
              <td>{row.argument_id}</td>
              <td>{row.category}</td>
              <td>{row.argument}</td>
              <td>{row.verbreitung}</td>
              <td>{row.komplexitaet}</td>
              <td>{row.emotionalitaet}</td>
              <td>{row.delulu}</td>
              <td>{row.ragebait}</td>
              <td>{row.ablenkung}</td>
              <td>{row.n}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}