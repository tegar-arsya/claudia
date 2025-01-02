import { useDispatch, useSelector } from "react-redux";
import { reset } from "../redux/Slices/MyTicketSlice";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { GrLocation } from "react-icons/gr";
import { useEffect } from "react";

const MyTicketPage = () => {
  const dispatch = useDispatch();

  useEffect(() => window.scrollTo(0, 0));

  const { tickets } = useSelector((state: any) => state.myTicket);

  const formatDate = (dateString: string) => {
    const options: Intl.DateTimeFormatOptions = {
      weekday: "long",
      day: "2-digit",
      month: "long",
      year: "numeric",
    };
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", options);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div className="w-11/12 mx-auto m-5 mt-[3rem] mob-s:mt-[5rem] mob-l:mt-[7rem]">
        <p className="font-bold text-xl mob-m:text-2xl sm:text-3xl text-gray-800">
          My Tickets
        </p>
        <p className="font-medium text-sm mob-m:text-md sm:text-lg text-gray-600">
          List of tickets and transactions you have made
        </p>

        {tickets.length === 0 && (
          <div className="font-bold text-3xl text-center m-5 text-gray-700">
            There are no Booked Tickets!!!
          </div>
        )}

        <div>
          {tickets.map((ticket: any, index: any) => (
            <div key={index} className="border rounded-lg p-4 shadow-lg my-6 bg-white">
              <Link to={`/my-ticket/${ticket.token}`} className="hover:opacity-90 transition-all duration-300">
                <div className="flex flex-col gap-y-4 min-[720px]:flex-row items-center gap-x-12">
                  <div>
                    <img
                      src={ticket.movie.image}
                      alt="MoviePoster"
                      className="w-48 h-64 rounded-lg object-cover shadow-md"
                    />
                  </div>
                  <div className="flex flex-col gap-y-6 w-full">
                    <div className="flex flex-col gap-y-1">
                      <p className="font-semibold text-lg mob-m:text-xl mob-l:text-2xl text-gray-800">
                        {ticket.movie.name}
                      </p>
                      <p className="font-normal text-sm mob-m:text-md mob-l:text-lg text-gray-500">
                        {formatDate(ticket.date)}, {ticket.time}
                      </p>
                    </div>
                    <div className="flex items-center gap-x-4">
                      <p className="font-normal text-sm mob-s:text-md mob-m:text-lg mob-l:text-xl text-gray-500 flex items-center gap-x-2">
                        <GrLocation />
                        {ticket.theater.theaterName}
                      </p>
                      <p className="font-medium text-sm mob-s:text-md mob-m:text-lg mob-l:text-xl text-gray-700">
                        ({ticket.theater.dimensionCategory})
                      </p>
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link to="/">
            <button className="transition-all duration-300 transform bg-gray-800 text-white px-4 py-2 text-lg font-semibold rounded-lg shadow hover:bg-gray-700 hover:scale-105">
              HOME
            </button>
          </Link>
        </div>

        {tickets.length > 0 && (
          <div className="flex justify-center mt-5">
            <button
              className="transition-all duration-300 transform bg-red-600 text-white px-4 py-2 text-lg font-semibold rounded-lg shadow hover:bg-red-500 hover:scale-105"
              onClick={() => dispatch(reset())}
            >
              Reset Data
            </button>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default MyTicketPage;
