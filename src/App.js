
import './App.css';

import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import About from './Pages/about'; 
import Download from './Pages/download'; 
import ProductTracibility from './Pages/productTracibility'; 
import ReportPage from './Pages/report_page'; 
import Footer from './Components/footer/footer'; 

function App() {
  return (
    <Router>
    <div className="App">

 <Navbar/>

 
 <Routes>  {/* Define routes here */}
        <Route path="/" element={<ReportPage />} />
        <Route path="/Product-tracibility" element={<ProductTracibility />} />
        <Route path="/Download" element={<Download />} />
        <Route path="/About" element={<About />} />
        
      </Routes>
 
     {/* <Reportpage/> */}
    <Footer/>
    </div>
    </Router>
  );
}

export default App;
