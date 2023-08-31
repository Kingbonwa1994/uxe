import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-inherit text-white p-6">
      <div className="flex mb-4">
        <Link href="#"><img src="./icons/facebook.png" alt="Facebook" className="w-6 h-6 mx-2" /></Link>
        <Link href="#"><img src="./icons/x.png" alt="Twitter" className="w-6 h-6 mx-2" /></Link>
        <Link href="#"><img src="./icons/instagram.png" alt="Instagram" className="w-6 h-6 mx-2" /></Link>
        <Link href="#"><img src="./icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 mx-2" /></Link>
        <Link href="mailto:brett@wmrecycling.co.za"><img src="./icons/email.png" alt="Email" className="w-6 h-6 mx-2" /></Link>
      </div>
      <p className="text-sm text-pink-950">© 2023 1cliQ™. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
