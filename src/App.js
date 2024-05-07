import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Sections from "./components/Pages";


function App() {
  return (
    <div className="App overflow-hidden font-sans">
      {/* <div> */}
        <Navbar />
        <Sections />
        <Footer />
      {/* </div> */}
    </div>
  );
}

export default App;
