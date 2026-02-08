import { Github } from 'lucide-react'
import React from 'react'
import protfolio1 from "@/assets/portfolio/gda.png"
import protfolio2 from "@/assets/portfolio/innov8.png"
import protfolio3 from "@/assets/portfolio/nails.png"
import protfolio4 from "@/assets/portfolio/tra.png"
import protfolio5 from "@/assets/portfolio/shs.png"
import Image from 'next/image'

export default function Portfolio() {
  return (
    <div id='portfolio'>
      <div className='max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8'>
        <div className='text-3xl font-semibold text-center mb-16'>
          <p>OUR PORTFOLIO</p>
          <p className='text-xl mt-2 font-normal'>Portfolio of innovative digital products.</p>
        </div>

        <div className='grid sm:grid-cols-2 lg:grid-cols-3 gap-6'>
          {[

            {
              name: "GDA",
              image: protfolio1,
              desc: "Transform your ideas into compelling narratives with our premium ghostwriting service.",
              linkUrl: "https://gda-mu.vercel.app/"
            },
            {
              name: "Innovatespace Tech Accademy",
              image: protfolio2,
              desc: "We do not just build, we train the next generation of IT professionals. Get started today and let's build something amazing together!",
              linkUrl: "https://www.innovatespace.co/en"
            },
            {
              name: "Tech Region Africa",
              image: protfolio4,
              desc: "Dive into our intensive courses in web development, data, and AI and gain the in-demand skills to access high-growth career paths.",
              linkUrl: "https://techregion.africa/"
            },
            {
              name: "Nails Tech",
              image: protfolio3,
              desc: "Professional nail care and beauty services.",
              linkUrl: "https://nailed-by-starrque.vercel.app/"
            },
            {
              name: "Smart Hand Services",
              image: protfolio5, desc: "Providing innovative smart hand services for enhanced user experience.",
              linkUrl: "https://www.smarthandyservices.co.uk/"
            }
          ].map((project, index) => (
            <div className="card bg-base-100 shadow-sm">
              <figure>
                <Image
                  src={project.image}
                  alt={project.name}
                  className='w-full h-48 object-cover' />
                {/* <img
                  src={project.image}
                  alt="Shoes" /> */}
              </figure>
              <div className="card-body">
                <h2 className="card-title">
                  {project.name}
                  {/* <div className="badge badge-secondary">NEW</div> */}
                </h2>
                <p>{project.desc}</p>
                <div className="card-actions justify-end">
                  {/* <div className="badge badge-outline">React</div> */}
                  <a href={project.linkUrl} target="_blank" rel="noopener noreferrer">
                    <div className="badge badge-outline">View Project</div>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
