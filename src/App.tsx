import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex flex-col items-center gap-8 py-16    bg-cyan-100  mx-0">
      <section className="flex flex-col  gap-8 py-16 w-[300px] md:w-[900px] px-3 bg-white rounded-md">
        <h1 className="text-4xl font-bold"> Contact Us</h1>
        <div className="flex md:flex-row flex-col">
          <label className=" px-3 " data-end=" *">
            First Name
          </label>
          <div className=" ">
            <input
              type="text"
              className=" border-1 border-cyan-500  border rounded-lg w-max-[350px] w-min-[50px] py-3 md:px-4 px-12 md:ml-6 md:mr-6 mt-5 md:mt-0 mr-0 ml-0 "
            ></input>
          </div>

          <label className=" px-3" data-end=" *">
            Last Name
          </label>
          <input
            type="text"
            className=" border-1 border-cyan-500   border rounded-lg w-max-[350px] w-min-[50px] mt-5 md:mt-0  py-3 px-4 "
          ></input>
        </div>
        <label className=" px-3" >
          Email Address <label className=" text-cyan-500" >*</label>
          <input
            type="email"
            className=" border-1 border-cyan-500  border rounded-lg w-full py-3 px-3 mt-5 md:mt-0 "
          ></input>
        </label>
        <div className="flex  px-3">
          <label className="text-left " data-end=" *">
            Query Type
          </label>
        </div>
        <div className="flex flex-col md:flex-row  justify-center items-center  ">
          <div className=" border-1  border-cyan-500  border rounded-lg w-[260px] w-min-[50px] pl-1 pr-5 mb-3 md:mb-0 py-2 px-3 ml-6 mr-6 ">
            <input type="radio" className="pr-3"></input> General Enquriy
          </div>

          <div className=" border-1  border-cyan-500   border rounded-lg w-[260px] w-min-[50px] pl-1 pr-5 py-2 px-3 ">
            <input type="radio" className="bg-green pr-3"></input>
            Support Request
          </div>
        </div>

        <label className=" px-3" data-end=" *">
          Message
        </label>
        <textarea
          id="comments"
          name="comments"
          className=" border-1 mt-5 md:mt-0 border-cyan-500  border 
          rounded-lg w-full md:py-12 py-24 px-3 "
        ></textarea>

        <div className="flex  px-3 items-center">
          <input
            id="link-checkbox"
            type="checkbox"
            value=""
            className="w-4 h-4 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
          ></input>

          <label
            htmlFor="link-checkbox"
            data-end=" *"
            className="ms-2 text-sm font-medium text-gray-900  px-3 dark:text-gray-300"
          >
            I consent to being contacted by the team .
          </label>
        </div>

        <div className="flex flex-row items-center gap-6 px-3">
          <button className="bg-sky-300 px-3 py-2 w-full rounded hover:bg-sky-100">
            Submit
          </button>
        </div>
      </section>
    </main>
  );
}

export default App;
