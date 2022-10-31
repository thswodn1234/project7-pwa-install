import BoxOffice from "./boxoffice/BoxOffice";
import BoxMv from "./boxoffice/BoxMv";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route path="/" element={<BoxOffice />} />
      <Route path="/mv" element={<BoxMv />} />
    </Routes>
  );
}

export default App;
