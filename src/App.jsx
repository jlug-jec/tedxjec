import { Route, Routes } from "react-router-dom";
import Homepage from "./pagess/Homepage";
import Header from "./components/Header";
import TicketPage from "./pagess/TicketPage";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/ticket" element={<TicketPage />}></Route>
      </Routes>
    </>
  );
}

export default App;
