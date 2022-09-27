import SharedLayout from "./components/sharedLayout/SharedLayout";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="App grid grid-cols-12 gap-2">
      <SharedLayout />
      <Outlet />
    </div>
  );
}

export default App;
