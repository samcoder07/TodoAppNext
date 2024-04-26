
import Link from "next/link";

export default function Home() {
  return (
    <div className="card">
      <div className="card-header d-flex justify-content-between">
        <h5>Todos List</h5>
        <Link href='/add' className="btn btn-primary btn-sm">Add Todo</Link>
      </div>
      <div className="card-body">
        <ul className="list-group">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
}
