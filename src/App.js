import Achievements from "./Components/Achievements";
import ContactInfo from "./Components/ContactInfo";
import Header from "./Components/Header";
import JobsList from "./Components/JobsList";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Slider from "./Components/Slider";
import Woman from "./Components/Woman";
import Map from "./Components/Map";
import About from "./Components/About";
import Parallax from "./Components/parallax";
import Footer from "./Components/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <About />
      <Parallax />
      <Slider />
      <Woman />
      <Achievements />
      <Services />
      <JobsList />
      <ContactInfo />
      <Map />
      <Footer />
    </div>
  );
}

export default App;
