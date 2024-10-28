import React from "react";
import Image from "next/image";
import customeWebDev from "@/assets/ariking-about.jpg";
import Link from "next/link";

export default function ServicesPage() {
  return (
    <div>
      <div className="">
        {/* Title */}
        <div className="text-center md:text-left my-16 lg:pr-64 container px-4 mx-auto">
          <h2 className="text-4xl font-extrabold dark:text-white">
            Our Services
          </h2>
          <p className="mt-4 text-lg text-gray-500">
            We are a full-service digital agency that can help you take your
            business to the next level. We offer a wide range of services, from
            website design and development to mobile app development and digital
            marketing. Our team of experts will work with you to understand your
            needs and create a custom solution that will help you achieve your
            goals.
          </p>
        </div>

        {/* 💥 Custom Web Development Section */}
        <div className="flex flex-col md:flex-row items-center gap-8 my-10 container px-4 mx-auto">
          {/* Image */}
          <div className="w-full md:w-1/2 lg:p-10 bg-pink-100">
            <Image
              src={customeWebDev}
              alt="Custom Web Development"
              className="rounded-lg lg:h-[35rem]"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">
              Custom Web Development
            </h2>
            <p className="text-lg text-gray-500">
              <b>
                Looking for custom web development that delivers results? Look
                no further than us.
              </b>
              We are a leading web development company that specializes in
              bespoke web development. We use innovative technology tools and
              our expert developers to add unique functionalities to brands,
              companies, and enterprise websites to offer a superior experience
              to their users.
            </p>

            {/* List of Services */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Our bespoke web development services include:
            </h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              {[
                "Custom design and development",
                "E-commerce development",
                "Content management system integration",
                "SEO optimization",
                "Mobile app development",
                "And more.",
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917L5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-gray-500">
              <b>
                We guarantee that our bespoke web development services will help
                you achieve your business goals.
              </b>
              We are committed to providing you with the best possible service
              and ensuring that you are completely satisfied with our work.
            </p>
          </div>
        </div>
        {/* 💥Mobile App Development Section */}
        <div className="bg-purple-200 py-14">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10 container px-4 mx-auto">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                User-Centered Mobile App Development for Business Growth
              </h2>
              <p className="text-lg text-gray-500">
                Get ahead of your competitors with a user-centered mobile app
                that delivers a memorable user experience and propels your
                brand's growth. We are a trusted mobile app development company
                for world-class brands.
              </p>
              <p className="text-lg text-gray-500">
                Our expert mobile app developers use a user-centered approach to
                create high-tech solutions that meet your specific needs and
                requirements.
              </p>

              {/* List of Services */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                Here are some of the benefits of working with us:
              </h3>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                {[
                  " Affordable",
                  "Quality",
                  "Transparency",
                  "Expertise",
                  "Flexibility",
                  "And more.",
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917L5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg text-gray-500">
                Want to achieve your business goals with a high-quality,
                affordable mobile app? We can help!{" "}
                <Link href="/contact">Contact us</Link>
              </p>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 lg:p-10">
              <Image
                src={customeWebDev}
                alt="Custom Web Development"
                className="rounded-lg lg:h-[35rem]"
              />
            </div>
          </div>
        </div>
        {/* 💥Digital Marketing */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10 container px-4 mx-auto my-10">
          {/* Image */}
          <div className="w-full md:w-1/2 lg:p-10 bg-pink-100">
            <Image
              src={customeWebDev}
              alt="Custom Web Development"
              className="rounded-lg lg:h-[35rem]"
            />
          </div>
          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-4">
            <h2 className="text-2xl font-bold dark:text-white">
              Digital Marketing
            </h2>
            <p className="text-lg text-gray-500">
              We are experts in digital marketing and we have a proven track
              record of success. We have helped businesses of all sizes achieve
              their marketing goals, from increasing website traffic to
              generating leads to driving sales.
            </p>

            {/* List of Services */}
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              We are a comprehensive digital marketing agency that offers a wide
              range of services, including
            </h3>
            <ul className="space-y-4 text-gray-500 dark:text-gray-400">
              {[
                "Search engine optimization (SEO)",
                "Social media marketing",
                " Content marketing",
                "Email marketing",
                "And more.",
              ].map((service, index) => (
                <li key={index} className="flex items-center space-x-3">
                  <svg
                    className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 16 12"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 5.917L5.724 10.5 15 1.5"
                    />
                  </svg>
                  <span>{service}</span>
                </li>
              ))}
            </ul>

            <p className="text-lg text-gray-500">
              <b>
                We will work with you to develop a customized marketing plan
                that meets your specific needs and goals.
              </b>
              We will take the time to understand your business, your target
              audience, and your marketing goals. Then, we will develop a plan
              that is tailored to your specific needs.
            </p>
            <p>
              We are confident that we can help you achieve your marketing
              goals. Contact us today to learn more about our digital marketing
              services.
            </p>
          </div>
        </div>
        {/* 💥Graphic design*/}
        <div className="bg-purple-200 py-14">
          <div className="flex flex-col md:flex-row items-center gap-8 mb-10 container px-4 mx-auto">
            {/* Text Content */}
            <div className="w-full md:w-1/2 space-y-4">
              <h2 className="text-2xl font-bold dark:text-white">
                Graphic & Branding
              </h2>
              <p className="text-lg text-gray-500">
                Our Expert Graphic and Branding Team Creates Strong Visual
                Identities That Reflect Your Unique Personality and Values
              </p>
              <p className="text-lg text-gray-500">
                We start by understanding your target audience, goals, and
                competitive landscape. Then, we use our expertise in graphic
                design, typography, and color theory to create a brand that is
                both effective and memorable.
              </p>
              <p className="text-lg text-gray-500">
                Our work has helped businesses of all sizes achieve their
                marketing and sales goals. We're confident that we can help you
                create a brand that will help you grow your business
              </p>

              {/* List of Services */}
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                We also offer a wide range of branding services, including:
              </h3>
              <ul className="space-y-4 text-gray-500 dark:text-gray-400">
                {[
                  "Logo design",
                  "Brand identity development",
                  "Website design",
                  " Print design",
                  "Advertising",
                ].map((service, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="flex-shrink-0 w-4 h-4 text-green-500 dark:text-green-400"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 16 12"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M1 5.917L5.724 10.5 15 1.5"
                      />
                    </svg>
                    <span>{service}</span>
                  </li>
                ))}
              </ul>
            </div>
            {/* Image */}
            <div className="w-full md:w-1/2 lg:px-10">
              <Image
                src={customeWebDev}
                alt="Custom Web Development"
                className="rounded-lg lg:h-[35rem]"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
