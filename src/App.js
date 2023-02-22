import logo from "./logo.svg";
import "./App.css";
import PublicRoutes from "./routes/routes";
import Layout from "./components/sideMenu/drawer";

function App() {
  return (
    <div className="App">
      <PublicRoutes />
    </div>
  );
}

export default App;
