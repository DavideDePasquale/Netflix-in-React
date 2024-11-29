import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import TopBar from "./components/TopBar";
import CentralPage from "./components/CentralPage";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <TopBar />
      <CentralPage />
      <Footer />
    </>
  );
}

export default App;
