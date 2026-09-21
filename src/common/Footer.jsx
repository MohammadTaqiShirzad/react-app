import React from "react";

const Footer = () => {
  return (
    <div className="w-11/12 mx-auto h-16 bg-gray-800 text-white flex items-center justify-center">
      <p className="text-sm">
        © {new Date().getFullYear()} My Website. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
