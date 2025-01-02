// import React from 'react'
import logo from "../assets/logo/TIX ID.svg";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import GooglePlay from "../assets/logo/Google Play.svg";
import AppStore from "../assets/logo/App Store.svg";

const Footer = () => {
  return (
    <footer className="flex flex-col justify-between items-center py-10 bg-gray-50 border-t border-gray-200">
      <div className="w-11/12 flex flex-col gap-10 mx-auto md:flex-row justify-between items-start">
        {/* Logo Section */}
        <div>
          <img
            src={logo}
            alt="TIX ID Logo"
            className="block w-40 lg:w-50 h-auto"
          />
        </div>

        {/* Links Section */}
        <div className="flex flex-col mob-s:flex-row gap-10 lg:gap-20">
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-800">Company</p>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Contact Us</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">About</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Partner</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-800">About</p>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">TIX ID News</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Cinema</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">My Ticket</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Payment</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Installment</a>
          </div>
          <div className="flex flex-col gap-4">
            <p className="text-lg font-semibold text-gray-800">Support</p>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Help Center</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Privacy Policy</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">FAQ</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Terms and Conditions</a>
            <a href="#" className="text-base text-gray-600 hover:text-gray-900">Update Covid-19</a>
          </div>
        </div>

        {/* Social Media and App Download Section */}
        <div className="flex flex-col gap-8">
          {/* Social Media */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray-800">Follow Us</p>
            <div className="flex gap-5">
              <FaInstagram size={25} className="text-gray-600 hover:text-gray-900" />
              <FaTwitter size={25} className="text-gray-600 hover:text-gray-900" />
              <FaFacebookSquare size={25} className="text-gray-600 hover:text-gray-900" />
            </div>
          </div>

          {/* App Download */}
          <div className="flex flex-col gap-3">
            <p className="text-lg font-semibold text-gray-800">Download the App</p>
            <div className="flex flex-col mob-s:flex-row gap-5">
              <img src={GooglePlay} alt="Google Play" className="w-36" />
              <img src={AppStore} alt="App Store" className="w-36" />
            </div>
          </div>
        </div>
        
      </div>
      {/* Copyright */}
      <p className="text-3xl font-bold text-center mt-4">
            &copy; 2025 Tegar Arsyadani.
          </p>
    </footer>
  );
};

export default Footer;
