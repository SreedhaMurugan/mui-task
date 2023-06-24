import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import First from './Component/First';
import ContainedBtn from './Component/ContainedBtn'

function App() {
  return (
    <div>
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<ContainedBtn />} />
      <Route path="/first" element={<First />} />
    </Routes>
  </BrowserRouter>
        

     </div>
    
  

  );
}

export default App;
