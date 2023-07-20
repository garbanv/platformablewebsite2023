import Image from "next/image";
import { useState } from "react";
import Logo from "/public/logo.png";
import Link from "next/link";

export default function Header() {
  const [navbar, setNavbar] = useState(false);

  return (
    <nav className="">
      <div className="container mx-auto justify-between  md:items-center md:flex ">
        <div>
          <div className="flex items-center justify-between py-3 md:py-5 md:block">
            <Link href="/">
              <Image
                className="text-center"
                src={Logo}
                alt={"platformable logo"}
                width={160}
                height={32}
                unoptimized
              />
            </Link>
            <div className="md:hidden">
              <button
                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                onClick={() => setNavbar(!navbar)}
              >
                {navbar ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 text-black"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <div>
          <div
            className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
              navbar ? "block" : "hidden"
            }`}
          >
            <ul className="items-center justify-center space-y-8 md:flex md:space-x-40 md:space-y-0">
              <li className="text-[#3024C6] font-bold hover:text-indigo-200">
                <Link href="/understand">Understand</Link>
              </li>
              <li className="text-[#3024C6] font-bold hover:text-indigo-200">
                <Link href="/act">Act</Link>
              </li>
              <li className="text-[#3024C6] font-bold hover:text-indigo-200">
                <Link href="/engage">Engage</Link>
              </li>
              <li className="text-[#3024C6] font-bold hover:text-indigo-200">
                <Link href="#">Contact </Link>
              </li>
            </ul>

            {/*   <div className="mt-3 space-y-2 lg:hidden md:inline-block">
              <a
                href="#"
                className="inline-block w-full px-4 py-2 text-center text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
              >
                Sign in
              </a>
              <a
                href="#"
                className="inline-block w-full px-4 py-2 text-center text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
              >
                Sign up
              </a>
            </div> */}
          </div>
        </div>
        <div className="hidden space-x-2 md:inline-block">
          {/* <a
            href="#"
            className="px-4 py-2 text-white bg-gray-600 rounded-md shadow hover:bg-gray-800"
          >
            Sign in
          </a>
          <a
            href="#"
            className="px-4 py-2 text-gray-800 bg-white rounded-md shadow hover:bg-gray-100"
          >
            Sign up
          </a> */}
        </div>
      </div>
    </nav>
  );
}
