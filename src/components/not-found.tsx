import "./not-found.css";
import { useNavigate } from "react-router-dom";
const NotFound: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="not_found">
      <h1>Page Not Found</h1>
      <button className="btn button" onClick={() => navigate("/")}>
        Go Home
      </button>
    </div>
  );
};

export default NotFound;
