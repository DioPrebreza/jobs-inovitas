import ContactInfo from "./Components/ContactInfo";
import Header from "./Components/Header";
import JobsList from "./Components/JobsList";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Slider />
      <JobsList />
      <ContactInfo />
    </div>
  );
}

export default App;
