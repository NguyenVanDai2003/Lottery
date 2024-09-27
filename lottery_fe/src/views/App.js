import './App.scss';
import Header from '../views/Example/Header';
import Footer from './Example/footer';
import Main from './Example/main';
import Contact from './Example/contact';
import Admin from '../views/admin/admin';

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>

        <Header></Header>
        <div>
           
          {/* 👇️ Wrap your Route components in a Routes component */}
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </div>

        {/* <Main></Main> */}
        <Footer></Footer>
      </Router>

    </div>
  );
}

export default App;