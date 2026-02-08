"use client";
import CaptivateYourAudience from "@/components/CaptivateYourAudience";
import HeroSub from "@/components/HeroSub";
import { useForm, ValidationError } from "@formspree/react";
import React from "react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xgveazwa");

  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div>
      <HeroSub
        title="Contact"
        subTitle="Ready to take your business to the next level? Contact us today to learn more about how we can help you create a website that is both visually appealing and functional, a mobile app that your customers will love, and a digital marketing campaign that will reach your target audience."
      />
      <section className="py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 grid-cols-1">
            {/* Image Section */}
            <div className="lg:mb-0 mb-10 relative group w-full h-full">
              <img
                src="https://pagedone.io/asset/uploads/1696488602.png"
                alt="Contact Us"
                className="w-full h-full lg:rounded-l-2xl rounded-2xl object-cover"
              />
              <h1 className="font-manrope text-white text-4xl font-bold leading-10 absolute top-11 left-11">
                GET IN TOUCH
              </h1>
              {/* Contact Details Card */}
              <div className="absolute bottom-0 w-full lg:p-11 p-5 ">
                <div className="bg-base-100 rounded-lg p-6">
                  <ContactDetail icon="phone" text="+234 812 520 8257" />
                  <ContactDetail icon="phone" text="+234 703 780 3410" />
                  <ContactDetail icon="email" text="olisahdaniel75@gmail.com" />
                </div>
              </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="bg-gray-50 p-5 lg:p-11 lg:rounded-r-2xl rounded-2xl">
              <h2 className="text-indigo-600 font-manrope text-4xl font-semibold leading-10 mb-11">
                Send Us A Message
              </h2>

              <InputField id="name" name="name" type="text" placeholder="Name" state={state} />
              <InputField id="email" name="email" type="email" placeholder="Email" state={state} />
              <InputField id="phone" name="phone" type="tel" placeholder="Phone" state={state} />

              <div className="mb-6">
                <textarea
                  id="message"
                  name="message"
                  className="resize-none w-full h-52 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-2xl border border-gray-200 focus:outline-none pt-5 px-4"
                  placeholder="Write your message"
                  aria-label="Write your message"
                ></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
              </div>

              {/* Submit Button */}
              <div className="flex justify-center">
                <button
                  type="submit"
                  disabled={state.submitting}
                  className="relative inline-flex items-center justify-center p-0.5 mb-2 overflow-hidden font-bold text-gray-900 rounded-lg group bg-gradient-to-br from-purple-500 to-pink-500 hover:text-white focus:ring-4 focus:outline-none focus:ring-purple-200"
                >
                  <span className="relative px-20 py-5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0 flex items-center">
                    Send
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <CaptivateYourAudience />
    </div>
  );
}

function ContactDetail({ icon, text }) {
  return (
    <a href="javascript:;" className="flex items-center mb-4">
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        // Replace this section with specific icons based on the `icon` prop, e.g., `phone`, `email`
      />
      <h5 className="text-base font-normal leading-6 ml-5">{text}</h5>
    </a>
  );
}

function InputField({ id, name, type, placeholder, state }) {
  return (
    <>
      <input
        id={id}
        name={name}
        type={type}
        className="w-full h-12 text-gray-600 placeholder-gray-400 shadow-sm bg-transparent text-lg font-normal leading-7 rounded-full border border-gray-200 focus:outline-none pl-4 mb-5"
        placeholder={placeholder}
        aria-label={placeholder}
      />
      <ValidationError prefix={name} field={name} errors={state.errors} />
    </>
  );
}
