import Button from "../components/Button";
import Table from "../containers/Dashboard/Table";
import "../assets/style/Dashboard/style.css";
import { useNavigate } from "react-router-dom";
function Dashboard() {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/dashboard");
  };
  return (
    <div className="dashboardContainer">
      <Button onClick={handleLogOut}>Log out</Button>
      <Table />
    </div>
  );
}

export default Dashboard;
