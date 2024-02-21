
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
import { PATHS } from "./constants";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <div className="app fUll_vh">
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
          <Route path= {PATHS.NOT_FOUND} element = {<NotFound/>}/>
        </Route>         
        </Routes>
      </BrowserRouter>
        </div>
    </div>
  );
}

export default App;
