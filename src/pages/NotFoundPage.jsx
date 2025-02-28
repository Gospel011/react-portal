import { Link } from "react-router-dom";

function NotFoundPage() {
  return (
    <div className="flex flex-col gap-4 p-4">
      <p>404 Not Found</p>

      <Link to={"/"}>Back to home</Link>
    </div>
  );
}

export default NotFoundPage;
