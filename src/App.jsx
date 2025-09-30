import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./App.css";
import MyNav from "./components/MyNav";
import MyFooter from "./components/MyFooter";
import Welcome from "./components/Welcome";
import AllTheBooks from "./components/AllTheBooks";

function App() {
  return (
    <>
      <MyNav title="EpiBooks" />
      <Welcome />
      <AllTheBooks />
      <MyFooter titleFooter="EpiBooks" email="Email: info@epicode.com" telefono="3488003680" ig="EpicodeBooks" linkedin="EpicodeLk" copy="© 2025 EpiBooks" />
    </>
  );
}

export default App;
