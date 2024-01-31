import './App.css';
import Navigation from './components/Navigations';
import Header from './components/Header';
import Desc from './components/Desc';
import Speakers from './components/Speakers';
import Tickets from './components/Tickets';
import Schedule from './components/Schedule';
import Footer from './components/Footer';
function App() {
  return (
    <div>
      {/* <!-- Start: Navigation --> */}
      <Navigation />
      {/* <!-- End: Navigation --> */}

      {/* <!-- Start: Header --> */}
      <Header />
      {/* <!-- End: Header --> */}

      <div className="container">
        {/* <!-- Start: Desc --> */}
        <Desc />
        {/* <!-- End: Desc --> */}

        {/* <!-- Start: Speakers --> */}
        <Speakers />
        {/* <!-- End: Speakers --> */}
      </div>

      {/* <!-- Start: Tickets --> */}
      <Tickets />
      {/* <!-- End: Tickets --> */}

      {/* <!-- Start: Schedule --> */}
      <Schedule />
      {/* <!-- End: Schedule --> */}

      {/* <!-- Start: Footer --> */}
      <Footer />
      {/* <!-- End: Footer --> */}
    </div>
  );
}

export default App;
