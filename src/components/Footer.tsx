// import React from 'react';
import logo from "../assets/logo/NONTON-YUK.png";
import { FaInstagram, FaFacebookSquare, FaTwitter } from "react-icons/fa";
import GooglePlay from "../assets/logo/Google Play.svg";
import AppStore from "../assets/logo/App Store.svg";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-50 to-gray-100">
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo and Description Section */}
          <div className="flex flex-col space-y-6">
            <img
              src={logo}
              alt="NONTON YUK Logo"
              className="w-48 h-auto transform hover:scale-105 transition-transform duration-300"
            />
            <p className="text-gray-600 text-sm leading-relaxed">
              Your ultimate destination for movie tickets and entertainment. Watch your favorite movies with the best experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
              Quick Links
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                <span>Movies</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                <span>Theaters</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                <span>Upcoming</span>
              </a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300 flex items-center space-x-2">
                <span className="w-1 h-1 bg-purple-500 rounded-full"></span>
                <span>Promotions</span>
              </a>
            </div>
          </div>

          {/* Support Section */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
              Support
            </h3>
            <div className="grid grid-cols-1 gap-3">
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Help Center</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Privacy Policy</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Terms of Service</a>
              <a href="#" className="text-gray-600 hover:text-purple-600 transition-colors duration-300">Contact Us</a>
            </div>
          </div>

          {/* Download and Social Section */}
          <div className="space-y-8">
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
                Get The App
              </h3>
              <div className="flex flex-col space-y-3">
                <img 
                  src={GooglePlay} 
                  alt="Google Play" 
                  className="w-40 h-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
                <img 
                  src={AppStore} 
                  alt="App Store" 
                  className="w-40 h-auto cursor-pointer transform hover:scale-105 transition-transform duration-300"
                />
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-bold text-gray-800 border-b-2 border-purple-500 pb-2 inline-block">
                Connect With Us
              </h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
                  <FaInstagram size={28} />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
                  <FaTwitter size={28} />
                </a>
                <a href="#" className="text-gray-600 hover:text-purple-600 transform hover:scale-110 transition-all duration-300">
                  <FaFacebookSquare size={28} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t-2 border-gray-200 bg-gray-50 shadow-inner">
        <div className="max-w-7xl mx-auto px-6 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            <p className="text-gray-700 text-xl md:text-2xl font-semibold tracking-wide transform hover:scale-105 transition-transform duration-300">
              © {new Date().getFullYear()} NONTON YUK. All rights reserved.
            </p>
            <p className="text-gray-700 text-xl md:text-2xl font-semibold tracking-wide">
              Designed with{' '}
              <span className="text-red-500 animate-pulse text-2xl md:text-3xl">❤️</span>
              {' '}by{' '}
              <span className="text-purple-600 font-bold hover:text-purple-700 transition-colors duration-300 cursor-pointer">
                Tegar Arsyadani
              </span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;