import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/app.css";

import TicketPage from "./pages/TicketPage";
import SpeakerPage from "./pages/SpeakerPage";

import About from "./pages/About";
import AllSpeakers from "./pages/AllSpeakers";

import banner from "./assets/images/speakers/banner-img.png";

const tanuInfo =
  "Dr. Tanu Jain, who has now left her civil services job. Tanu Jain is a 2015 batch IAS officer. Tanu Jain studied at Cambridge School in Delhi and she grew up in Sadar area of the national capital. It is to be noted that Tanu Jain also studied medicine before cracking UPSC exam and becoming an IAS officer.";

const achivementsTanu = [
  "Former IAS officer of 2015 batch.",
  "Served her excellence as Assistant Director of DRDO.",
  "Mock Interview panelist for Civil Services Examination .",
  "Established IAS coaching named Tathastu-ICS in Delhi.",
];

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Homepage />}></Route>
        <Route path="/ticket" element={<TicketPage />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route
          path="/tanujain"
          element={
            <SpeakerPage
              information={tanuInfo}
              achivements={achivementsTanu}
              image={banner}
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
