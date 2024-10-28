import { InstagramIcon, Mail, Phone } from "lucide-react";
import React from "react";

export default function ContactPage() {
  return (
   <div>
     <div className="container my-12 mx-auto px-2 md:px-4">
        <h2 className="mb-12 px-6 text-4xl font-extrabold">Contact us</h2>
      <section className="mb-32 pt-10 border-2 rounded-md">
        <div className="flex">
          <div className="text-center md:max-w-xl lg:max-w-3xl">
            <h2 className="mb-12 px-6 text-3xl font-bold">SEND US A MESSAGE</h2>
          </div>
        </div>

        <div className="flex flex-wrap">
         
          {/* Form */}
          <form className="mb-12 w-full shrink-0 grow-0 basis-auto md:px-3 lg:mb-0 lg:w-5/12 lg:px-6">
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Name
              </label>
              <input
                type="text"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Your name"
              />
            </div>

            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Phone Number
              </label>
              <input
                type="tel"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Your phone number"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Email
              </label>
              <input
                type="email"
                className="px-2 py-2 border w-full outline-none rounded-md"
                id="exampleInput90"
                placeholder="Enter your email address"
              />
            </div>
            <div className="mb-3 w-full">
              <label
                className="block font-medium mb-[2px] text-teal-700"
                htmlFor="exampleInput90"
              >
                Message
              </label>
              <textarea
                className="px-2 py-2 border rounded-[5px] w-full outline-none"
                name=""
                id=""
              ></textarea>
            </div>

            <button
              type="button"
              className="mb-6 inline-block w-full rounded bg-teal-400 px-6 py-2.5 font-medium uppercase leading-normal text-white hover:shadow-md hover:bg-teal-500"
            >
              Send
            </button>
          </form>
           {/* Contact */}
           <div className="text-sm my-4 ml-5 flex gap-8 pt-2">
            <div>
              <a href="tel:+2348125208257">
                <div className="flex gap-2 mb-8">
                  <Phone size={20} /> <span> +2348125208257</span>
                </div>
              </a>
              <a href="tel:+2347037803410">
                <div className="flex gap-2">
                  <Phone size={20} /> <span> +2347037803410</span>
                </div>
              </a>
            </div>
            <div>
              <a href="mailto:olisahdaniel75@gmail.com" className="">
                <div className="flex gap-2 mb-8">
                  <Mail size={20} /> <span> olisahdaniel75@gmail.com</span>
                </div>
              </a>
              <a href="https://www.instagram.com/kingtech820">
                <div className="flex gap-2">
                  <InstagramIcon size={20} />{" "}
                  <span>Connect with us on Instagram</span>
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
   </div>
  );
}
