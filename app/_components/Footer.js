import Link from 'next/link';
import React from 'react';

const Footer = () => {
  return (
    <footer className="flex flex-col items-center justify-center bg-inherit text-white p-6">
      <div className="flex mb-4">
        <Link href="https://www.facebook.com" target="_blank">
          <img src="./icons/facebook.png" alt="Facebook" className="w-6 h-6 mx-2" />
        </Link>
        <Link href="https://www.twitter.com" target="_blank">
          <img src="./icons/x.png" alt="Twitter" className="w-6 h-6 mx-2" />
        </Link>
        <Link href="https://www.instagram.com" target="_blank">
          <img src="./icons/instagram.png" alt="Instagram" className="w-6 h-6 mx-2" />
        </Link>
        <Link href="https://www.linkedin.com" target="_blank">
          <img src="./icons/linkedin.png" alt="LinkedIn" className="w-6 h-6 mx-2" />
        </Link>
        <Link href="mailto:brett@wmrecycling.co.za" target="_blank">
          <img src="./icons/email.png" alt="Email" className="w-6 h-6 mx-2" />
        </Link>
      </div>
      <p className="text-sm text-pink-950">© 2023 1cliQ™. All rights reserved.</p>
      <div className="mt-4">
        <Link href="/dashboard" className="bg-inherit text-white font-bold py-2 px-4 rounded">Admin
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
