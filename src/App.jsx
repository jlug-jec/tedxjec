import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Header from "./components/Header";
import TicketPage from "./pages/TicketPage";

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
