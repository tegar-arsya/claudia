// import React, { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import movie1 from "../assets/logo/Clapperboard.svg";
// import movie2 from "../assets/logo/Movie Roll.svg";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const PaymentSuccess = () => {
  useEffect(() => window.scrollTo(0, 0));

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 text-white">
      <Navbar />

      <div className="mt-[7rem] px-5 text-center">
        <h1 className="font-extrabold text-4xl mob-l:text-5xl md:text-6xl drop-shadow-lg">
          Payment Successful!
        </h1>

        <div className="flex justify-center items-center my-8 relative">
          <img
            src={movie1}
            alt="logo"
            className="w-20 h-20 md:w-28 md:h-28 animate-bounce"
          />
          {/* <img src={movie2} alt="logo2" className="absolute" /> */}
        </div>

        <p className="font-light text-lg mob-l:text-xl md:text-2xl text-[--Shade-200] my-6">
          Transaction details have been sent to your email. You can also check
          other ticket details in <b>My Tickets</b>, available both on the
          website and your smartphone.
        </p>

        <div className="my-10">
          <Link to="/my-ticket">
            <button className="transition-all duration-300 transform bg-white text-blue-600 px-6 py-3 text-lg mob-m:text-xl sm:text-2xl font-semibold rounded-lg shadow-md hover:scale-105 hover:shadow-xl">
              My Tickets
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default PaymentSuccess;
