import { Link, useLocation } from "react-router-dom";

export default function User() {
  const location = useLocation();
  return (
    <div>
      {location.pathname}
      {window.__routes.map((path) => (
        <div key={path}>
          <Link to={path}>{path}</Link>
          <br />
        </div>
      ))}
    </div>
  );
}