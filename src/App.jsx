import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/app.css";

import TicketPage from "./pages/TicketPage";
import SpeakerPage from "./pages/SpeakerPage";

import About from "./pages/About";

const tanuInfo =
  "Dr. Tanu Jain, an esteemed 2015 batch IAS officer, has recently resigned from her civil service position. Her educational background includes attending Cambridge School in Delhi and earning a BDS degree from Subharti Medical College, before successfully clearing the UPSC exam. Beyond her administrative duties, Dr. Jain has been active in social service, motivational speaking, and authorship, garnering over 96,000 Instagram followers. Her passion for education led her to open the Tathastu IAS coaching center in Delhi, demonstrating her commitment to mentoring future civil servants.";

const achivementsTanu = [
  "Former 2015 batch IAS officer with a medical background.",
  "Successfully cleared the UPSC exam before venturing into civil services.",
  "Opted to resign from her IAS position to focus on education.",
  "Founded Tathastu - ICS in Delhi, an institute dedicated to IAS coaching.",
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        {/* <Route path='/ticket' element={<TicketPage />}></Route> */}
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/tanujain"
          element={
            <SpeakerPage
              information={tanuInfo}
              achivements={achivementsTanu}
              image="https://tathastuics.com/assets/images/banner-img.png"
              insta="https://www.instagram.com/dr.tanujain/"
              linked="https://www.linkedin.com/in/dr-tanu-jain-4aa28a131"
              tweet="https://twitter.com/DrTanuJain1"
            >
              <span>T</span>
              <span>A</span>
              <span>N</span>
              <span>U</span>
              &nbsp;
              <span>J</span>
              <span>A</span>
              <span>I</span>
              <span>N</span>
            </SpeakerPage>
          }
        ></Route>
      </Routes>
    </>
  );
}

export default App;
