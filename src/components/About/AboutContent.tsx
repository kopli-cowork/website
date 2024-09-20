"use client";

import { useState } from "react";
import { v4 as uuid } from "uuid";
import TabPanel from "./TabPanel";

const tabButtons = [
  {
    id: uuid(),
    title: "About Us",
    value: "about",
  },
  {
    id: uuid(),
    title: "Our Mission",
    value: "mission",
  },
  {
    id: uuid(),
    title: "Our Vision",
    value: "vision",
  },
];

export default function AboutContent() {
  const [activeTab, setActiveTab] = useState<string>(tabButtons[0].value);

  return (
    <>
      {/* <div className="tabButtons flex w-full items-center justify-around">
        {tabButtons.map((tabButton) => (
          <button
            key={tabButton?.id}
            onClick={() => setActiveTab(tabButton?.value)}
            className={`w-full border-b px-2 pb-6 pt-8 font-heading text-base font-medium lg:pb-7 lg:pt-9 ${activeTab === tabButton?.value ? "border-primary text-primary dark:border-primary" : "hover:border-primary hover:text-primary dark:border-[#4B4E56] dark:text-white dark:hover:border-primary"}`}
          >
            {tabButton?.title}
          </button>
        ))}
      </div> */}
      
      <div className="w-full">
        
        {activeTab === "about" && (
        // <div>
        //   <iframe
        //     width="600"
        //     height="450"
        //     style={{ border: 0 }}
        //     loading="lazy"
        //     allowFullScreen
        //     referrerPolicy="no-referrer-when-downgrade"
        //     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027.5899785971246!2d24.672131177484083!3d59.45658827467615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293f1527aa6f5%3A0xc56e9fab1f76b48a!2sMarati%205%2F2%2C%2011712%20Tallinn!5e0!3m2!1sen!2see!4v1726169500609!5m2!1sen!2see">
        //   </iframe>
        // </div>
          <TabPanel
            title="Located in Põhjala tehas"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
              accumsan ultricies at in libero accumsan.
            </p>
            <p className="mb-6 text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
            <p className="text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
          </TabPanel>
        )}

        {activeTab === "mission" && (
          <TabPanel
            title="Built-with Latest Tools and Technologies"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
            leftContent
          >
            <p className="mb-6 text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
              accumsan ultricies at in libero accumsan.
            </p>
            <p className="mb-6 text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
            <p className="text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
          </TabPanel>
        )}

        {activeTab === "vision" && (
          <TabPanel
            title="High-quality Premium Design with Everything You Need"
            image1="/images/about/image-1.jpg"
            image1Alt="about image 1"
            image2="/images/about/image-2.jpg"
            image2Alt="about image 2"
          >
            <p className="mb-6 text-base text-dark-text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              condimentum sapien ac leo cursus dignissim. In ac lectus vel orci
              accumsan ultricies at in libero accumsan.
            </p>
            <p className="mb-6 text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
            <p className="text-base text-dark-text">
              Phasellus ex massa, facilisis ac vestibulum eget, ultrices quis
              nulla. Integer vitae magna lacus. Sed venenatis auctor dolor.
            </p>
          </TabPanel>
        )}
      </div>
    </>
  );
}
