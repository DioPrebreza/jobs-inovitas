import ContactInfo from "./Components/ContactInfo";
import Header from "./Components/Header";
import JobsList from "./Components/JobsList";
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Value from "./Components/Value";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <Header />
      <Slider />
      <Value />
      <JobsList />
      <ContactInfo />
    </div>
  );
}

export default App;
