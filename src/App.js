import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Detail from './components/Detail';
import './style.css';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          {/* render Home component for the index route */}
          <Route index element={<Home />} />
          {/* render Detail component for the Detail route with id parameter */}
          <Route path='Detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
