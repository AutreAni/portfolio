
import Home from "./pages/Home";
import About from "./pages/About";
import Work from './pages/Work';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
// import Nav from "./components/Nav";
import './styles/index.scss';
import PDFViewer from "./pages/PDFViewer";
import Layout from "./components/common/Layout";
import Project from "./pages/Project";
import Contacts from './pages/Contacts';

function App() {
  return (
    <div className="app">
    <div
      className="container_outer">
      <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Layout/>}>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/about/resume" element={<PDFViewer />} />
          <Route path = "/work" element = {<Work />} />
          <Route path = "/work/:projectName" element = {<Project />} />
          <Route path = "/contacts" element = {<Contacts/>}/>
        </Route>         
        </Routes>
      </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
