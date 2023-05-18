import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaSms,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div className="md:flex justify-between p-5 footer bg-gradient-to-r from-purple-900 to-red-600 text-white nav-design">
      <div>
        <h2 className="text-2xl text-teal-300">ToyGalaxy</h2>
        <ul className="ps-2 flex gap-2 text-xl">
          <li>
            <FaFacebook></FaFacebook>
          </li>
          <li>
            <FaTwitter></FaTwitter>
          </li>
          <li>
            <FaInstagram></FaInstagram>
          </li>
          <li>
            <FaYoutube></FaYoutube>
          </li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl">Support</h2>
        <ul className="ps-2">
          <li>contact us</li>
          <li>FAQ</li>
          <li>Downloads</li>
          <li>Locate a dealer</li>
          <li>Spare Parts</li>
        </ul>
      </div>
      <div>
        <h2 className="text-2xl">ToyGalaxy</h2>
        <ul className="ps-2">
          <li>about toy galaxy</li>
          <li>careers</li>
          <li>license</li>
          <li>our goals</li>
        </ul>
      </div>
      <div>
        <div className="flex items-center text-2xl gap-1 ">
          <FaSms></FaSms>
          <p>Stay up to date with ToyGalaxy</p>
        </div>
        <div className="flex items-center">
          <input
            type="text"
            placeholder="Your Mail"
            className="input input-bordered input-secondary w-full max-w-xs text-black"
          />
          <button className="btn btn-primary ml-2">Submit</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
