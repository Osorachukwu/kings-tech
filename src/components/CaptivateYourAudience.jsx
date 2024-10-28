import React from "react";
import Link from "next/link";
export default function CaptivateYourAudience() {
  return (
    <div className="bg-red-400">
      <section class="hero-bg bg-center bg-no-repeat bg-gray-700 bg-blend-multiply">
      <div className="text-center container px-4 mx-auto md:px-20">
        <div class="px-4 mx-auto text-center py-20 lg:py-20">
          <h1 class="mb-4 text-5xl tracking-tight leading-none text-white">
            Accelerate Your Business Growth with a Professional Website and App
          </h1>
          <p class="mb-8 text-lg font-normal text-gray-300 lg:text-xl sm:px-16 lg:px-48">
            Looking to get your website or mobile app designed? We can help! Get
            in touch with us today and see how we can help you grow your
            business.
          </p>
          <Link href="">
            <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 group-hover:from-purple-500 group-hover:to-pink-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800">
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0 flex items-center">
                Fire us an email
                <svg
                  class="w-3.5 h-3.5 ms-2 rtl:rotate-180"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 14 10"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M1 5h12m0 0L9 1m4 4L9 9"
                  />
                </svg>
              </span>
            </button>
          </Link>
        </div>
      </div>
      </section>
    </div>
  );
}
