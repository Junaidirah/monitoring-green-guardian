import "./App.css";
import HomePage from "./components/desc";
import Navbar from "./components/navbar";
import ProfileTeam from "./components/profile";
import SimpleFooter from "./components/footer";
import TableDataGet from "./components/firebase";
function App() {
  return (
    <div>
      <Navbar />
      <HomePage />
      <ProfileTeam />
      <TableDataGet />
      <SimpleFooter />
    </div>
  );
}

export default App;
