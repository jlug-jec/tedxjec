import Navigation from "../components/Navigation";

const About = () => {
	return (
		<>
			<Navigation />
			<div className='flex justify-between space-y-14 items-center flex-col md:m-5 m-6'>
				<div className='bg-red-600 flex justify-center items-center md:h-32 h-14 w-full'>
					<h1 className='md:text-5xl text-2xl font-bold text-white px-8 tracking-widest font-serif'>
						About Us
					</h1>
				</div>

				<div className='flex justify-between space-y-12 items-center flex-col'>
					<img
						src='/origi.png'
						alt='tedXjec'
						className='md:h-24 h-8 md:m-0 -m-5'
					/>
					<p className='text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4'>
						TEDx is a program of independently organized events that
						bring people together to share ideas worth spreading.
						These events are licensed by TED, a nonprofit
						organization devoted to &quot;Ideas Worth
						Spreading.&quot; TEDx events are designed to create a
						TED-like experience at the local level, allowing
						communities around the world to showcase and discuss
						ideas that are relevant to them. It&apos;s important to
						note that while TEDx events are associated with TED,
						they operate independently, and the content and opinions
						expressed in TEDx talks are those of the speakers and
						not necessarily endorsed by TED.
					</p>
				</div>

				<div className='flex justify-between space-y-6 items-center flex-col'>
					<img
						src='/TED-Logo.png'
						alt='tedXjec'
						className='md:h-36 h-12'
					/>
					<p className='text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4'>
						TED is a nonprofit organization devoted to Ideas Worth
						Spreading. Started in 1984 as a conference where
						Technology, Entertainment and Design converged, and
						today covers almost all topics from science to business
						to global issues, in more than 100 languages. The two
						annual TED Conferences invite the world&apos;s leading
						thinkers and doers to speak for 18 minutes or less.
						Meanwhile, independently run TEDx events help to share
						ideas in communities around the world. TED has become a
						global phenomenon, influencing how people consume
						information and inspiring them to think critically about
						the world around them. The diverse range of speakers and
						topics covered in TED Talks has contributed to its
						widespread popularity and impact.
					</p>
				</div>

				<div className='flex justify-between space-y-8 items-center flex-col'>
					<img
						src='/tedXlogo2.png'
						alt='tedXjec'
						className='md:h-36 h-16'
					/>

					<p className='text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4'>
						Amidst marble cliffs and the Narmada&apos;s flow,
						Jabalpur shines with natural beauty and historical
						grace. With its cascading Dhuandhar Falls, ancient
						temples, and colonial remnants, it&apos;s a serene blend
						of the past and nature&apos;s wonders. This city is a
						peaceful yet vibrant heart of Madhya Pradesh, offering a
						gateway to the region&apos;s rich wildlife and culture.
						TEDxJEC is a independently organized TEDx event held at
						JEC Jabalpur. It is a platform for spreading ideas,
						fostering innovation, inspiring the community through
						engaging talks and presentations. TEDxJEC is a chance to
						check out from day-to-day routine go on an intellectual
						journey with smart and curious friends to a world filled
						with brilliant speakers, captivating performances,
						amazing new technology, and thought provoking ted talks.
					</p>
				</div>
				<div className='flex justify-between space-y-10 items-center flex-col'>
					<img
						src='/jecJAb.png'
						alt='tedXjec'
						className='md:h-20 h-10'
					/>

					<p className='text-center font-semibold md:text-2xl text-lg border border-white md:p-8 p-4 md:mx-8 mx-4'>
						Jabalpur Engineering College (JEC) is an institute
						located in Jabalpur, Madhya Pradesh, India. It is the
						oldest technical institution in central India and the
						15th-oldest in India.It is the first institute of India
						to have started the Electronics & Telecommunication
						engineering education in the country, and also the last
						educational institution to be set up by the British in
						India. JEC offers undergraduate and postgraduate
						programs in various engineering disciplines.JEC has a
						campus equipped with facilities such as classrooms,
						laboratories, libraries, hostels, sports facilities, and
						more. The college has a team of experienced faculty
						members who contribute to the academic and research
						activities of the institution. JEC is likely involved in
						organizing various extracurricular activities, cultural
						events, and technical fests, providing students with a
						well-rounded educational experience.
					</p>
				</div>
			</div>
		</>
	);
};

export default About;
