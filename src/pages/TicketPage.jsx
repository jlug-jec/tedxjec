import Cursor from "../components/Cursor";
// import MultiStepForm from "../forms/multiStepForms"

const TicketPage = () => {
  return (
    <div className="flex md:justify-around items-center md:space-y-4 space-y-8 flex-col md:mb-0 mb-5">
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

      <h1 className="font-semibold md:text-6xl text-4xl md:pt-0 pt-3">
        {" "}
        Welcome to <span className="font-extrabold text-red-600">TedxJEC</span>
      </h1>
      <h4 className="font-semibold md:text-4xl text-3xl">
        {" "}
        Register for the event{" "}
      </h4>

      <div className="md:w-[750px] w-[100vw] md:h-[500px] h-[100vh] rounded-md md:border md:border-white  md:px-0 px-5">
        <iframe
          className=""
          src="https://konfhub.com/widget/tedxjec2024"
          id="konfhub-widget"
          title="Register for TEDxJEC Jabalpur"
          height="100%"
          width="100%"
        ></iframe>
      </div>
    </div>
  );
};

export default TicketPage;
