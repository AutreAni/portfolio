
import Home from "./pages/Home";
import About from "./pages/About";
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Nav from "./components/Nav";
import './styles/index.scss';
import PDFViewer from "./pages/PDFViewer";
import Layout from "./components/Layout";

function App() {
  return (
    <div className="app">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/resume" element={<PDFViewer />} />
        </Route>         
        </Routes>
      </BrowserRouter>
      {/* <Nav
            activeNavIndex = {activeNavIndex}
            setActiveNavIndex = {setActiveNavIndex}
        /> */}
    </div>
  );
}

export default App;
