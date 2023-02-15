import Achievements from "./Components/Achievements";
import ContactInfo from "./Components/ContactInfo";
import Header from "./Components/Header";
import JobsList from "./Components/JobsList";
import Navbar from "./Components/Navbar";
import Services from "./Components/Services";
import Slider from "./Components/Slider";
import Woman from "./Components/Woman";
import Map from "./Components/Map";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
      <Woman />
      <Achievements />
      <Services />
      <JobsList />
      <ContactInfo />
      <Map />
    </div>
  );
}

export default App;
