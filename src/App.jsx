import { Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import "./assets/app.css";

import TicketPage from "./pages/TicketPage";
import SpeakerPage from "./pages/SpeakerPage";

import About from "./pages/About";
import AllSpeakers from "./pages/AllSpeakers";

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
				<Route path='/' element={<Homepage />}></Route>
				<Route path='/ticket' element={<TicketPage />}></Route>
				<Route path='/about' element={<About />}></Route>
				<Route
					path='/tanujain'
					element={
						<SpeakerPage
							information={tanuInfo}
							achivements={achivementsTanu}
							image='https://tathastuics.com/assets/images/banner-img.png'
              insta='https://www.instagram.com/dr.tanujain/' 
              linked='https://www.linkedin.com/in/dr-tanu-jain-4aa28a131/?original_referer=https%3A%2F%2Fwww%2Egoogle%2Ecom%2F&originalSubdomain=in' 
              tweet='https://twitter.com/DrTanuJain1?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor'
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
				<Route path="/speakers" element={<AllSpeakers />} />
			</Routes>
		</>
	);
}

export default App;
