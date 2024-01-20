import Cursor from "../components/Cursor";
// import MultiStepForm from "../forms/multiStepForms"

const TicketPage = () => {
	return (
		<div className='flex justify-around items-center space-y-4 flex-col'>
			{/* <Cursor/>
    <div className="px-24">
        <div className="flex text-2xl my-3 mb-6 justify-between">
      <h1>Enter your Details</h1>
      <h1>Payment</h1>
      <h1>Your Ticket</h1>
        </div>
      <MultiStepForm/>
    </div> */}

			<Cursor />

			<h1 className='font-semibold text-6xl'>
				{" "}
				Welcome to{" "}
				<span className='font-extrabold text-red-600'>TedxJEC</span>
			</h1>
			<h4 className='font-semibold text-4xl'> Register for the event </h4>

			<div className="rounded-md border border-white p-2">
				<iframe
					src='https://konfhub.com/widget/tedxjec2024?ticketId=12684'
					id='konfhub-widget'
					title='Register for TEDxJEC Jabalpur'
					width='750'
					height='500'
				></iframe>
			</div>
		</div>
	);
};

export default TicketPage;
