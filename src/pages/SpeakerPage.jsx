import { Link } from "react-router-dom";
import Cursor from "./../components/Cursor";

const SpeakerPage = ({
	information,
	achivements,
	image,
	insta,
	linked,
	tweet,
	children,
}) => {
	return (
		<>
			<div className='z-60 md:block hidden'>
				<Cursor />
			</div>

			{/* flex flex-col md:items-end items-center  */}
			<div className='h-full w-full bg-black flex absolute md:hidden overflow-hidden'>
				<div className='bg-black md:hidden h-full w-1/2'>
					<div className='flex justify-start items-center flex-col mt-28 px-2 overflow-scroll mx-1 h-[40%]'>
						<h1 className='font-bold uppercase font-serif'>
							About Speaker
						</h1>
						<p className='text-center text-sm'>{information}</p>

						<button className='py-2 my-4 mx-2 text-xs ticket rounded-3xl hover:bg-black  border-red-600 hover:border-2 shadow-red-600 shadow-2xl px-10 bg-red-600'>
							!!!Book Now!!!
						</button>
					</div>
				</div>

				<div className='bg-red-600 md:hidden block h-full w-1/2'>
					<div className='flex justify-start items-center flex-col mt-28 px-2 overflow-scroll mx-1 h-[30%]'>
						<h1 className='font-bold uppercase font-serif'>
							Achievements
						</h1>
						<ul className='list-disc'>
							{achivements.map((achivement, i) => {
								return (
									<li key={i}>
										{i + 1}. {achivement}
									</li>
								);
							})}
						</ul>
					</div>
				</div>
				<img
					className=' absolute z-20 md:translate-y-24 bottom-0 pt-12 md:h-full  w-auto'
					src={image}
					alt=''
				/>

				<div className='w-full absolute text-center text-[60px] z-40 font-bold top-4'>
					{children}
				</div>
			</div>

			<div className='h-full absolute overflow-hidden w-full justify-center md:flex hidden '>
				<img
					className=' absolute z-20 md:translate-y-24 bottom-0 pt-12 md:h-full  w-auto'
					src={image}
					alt=''
				/>
				<div className='h-full w-1/2 bg-black md:block hidden'>
					<div className='overflow-hidden absolute w-full h-auto'>
						<div className='w-full speakername md:top-8 pt-6 text-center md:text-[200px] text-[70px] z-0 font-bold'>
							{children}
						</div>
					</div>
					<div className='flex flex-col md:justify-start'>
						<p className='md:mt-80  md:w-2/3 w-full p-5 md:text-xl  md:text-left'>
							{information}
						</p>
						<Link to='/ticket' className='md:p-5'>
							<button className='py-3 my-4 text-xl ticket rounded-3xl hover:bg-black  border-red-600 hover: border-2 shadow-red-600 shadow-2xl px-12 bg-red-600'>
								!!!Book Now!!!
							</button>
						</Link>
					</div>
				</div>

				<div className='h-full w-1/2 bg-red-600 flex-col items-end justify-end md:flex hidden'>
					<p className=' p-5 w-2/3 text-4xl font-semibold text-left'>
						Achievements:
					</p>
					<ul className='p-5 w-2/3 text-left'>
						{achivements.map((achivement, i) => {
							return (
								<li key={i}>
									{i + 1}. {achivement}
								</li>
							);
						})}
					</ul>
					<div className='p-12'>
						<h1 className='text-2xl font-semibold'> Social :</h1>

						<div className='flex z-40 my-3 gap-6'>
							<a href={insta} rel='noreferrer' target='_blank'>
								<button className='Btn1'>
									<span className='svgContainer1'>
										<svg
											fill='white'
											className='svgIcon'
											viewBox='0 0 448 512'
											height='1.5em'
											xmlns='http://www.w3.org/2000/svg'
										>
											<path d='M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z' />
										</svg>
									</span>
									<span className='BG1' />
								</button>
							</a>

							<a href={linked} rel='noreferrer' target='_blank'>
								<button className='Btn3'>
									<span className='svgContainer3'>
										<svg
											viewBox='0 0 448 512'
											height='1.6em'
											xmlns='http://www.w3.org/2000/svg'
											className='svgIcon'
											fill='white'
										>
											<path d='M100.3 448H7.4V148.9h92.9zM53.8 108.1C24.1 108.1 0 83.5 0 53.8a53.8 53.8 0 0 1 107.6 0c0 29.7-24.1 54.3-53.8 54.3zM447.9 448h-92.7V302.4c0-34.7-.7-79.2-48.3-79.2-48.3 0-55.7 37.7-55.7 76.7V448h-92.8V148.9h89.1v40.8h1.3c12.4-23.5 42.7-48.3 87.9-48.3 94 0 111.3 61.9 111.3 142.3V448z' />
										</svg>
									</span>
									<span className='BG3' />
								</button>
							</a>

							<a href={tweet} rel='noreferrer' target='_blank'>
								<button className='Btn4'>
									<span className='svgContainer4'>
										<svg
											viewBox='0 0 512 512'
											height='1.7em'
											xmlns='http://www.w3.org/2000/svg'
											className='svgIcon'
											fill='black'
										>
											<path d='M389.2 48h70.6L305.6 224.2 487 464H345L233.7 318.6 106.5 464H35.8L200.7 275.5 26.8 48H172.4L272.9 180.9 389.2 48zM364.4 421.8h39.1L151.1 88h-42L364.4 421.8z' />
										</svg>
									</span>
									<span className='BG4' />
								</button>
							</a>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default SpeakerPage;
