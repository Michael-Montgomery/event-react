// import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";


import './App.css';



import Home from "./pages/home";
import Event from "./pages/event";
// import Gallery from "./pages/gallery";





function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route index element={<Home />} />
          {/* <Route path="gallery" element={<Gallery />} /> */}
          {/* <Route path="contact" element={<Contact />} />
          <Route path="*" element={<NoPage />} /> */}
          <Route path="/eventpage" element={<Event></Event>}/>
       
      </Routes>
    </BrowserRouter>
  )
}

export default App;