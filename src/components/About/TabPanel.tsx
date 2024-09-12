import Image from "next/image";

export default function TabPanel({
  title,
  image1,
  image1Alt,
  image2,
  image2Alt,
  leftContent,
  children,
}: any) {
  return (
    <div
      className={`-mx-4 flex w-full flex-wrap items-center pt-[70px] ${leftContent ? "flex-row-reverse" : ""}`}
    >
      <div className="w-full px-4 lg:w-1/2">
        <div className="relative z-30 mb-14 h-[490px] max-w-[600px] lg:mb-0">
          <div className="absolute left-0 top-0 aspect-[86/121] w-full max-w-[344px]">
            {/* <Image src={image1} alt={`${image1Alt || "image alt text"}`} fill /> */}
          <iframe
            width="550"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            referrerPolicy="no-referrer-when-downgrade"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2027.5899785971246!2d24.672131177484083!3d59.45658827467615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x469293f1527aa6f5%3A0xc56e9fab1f76b48a!2sMarati%205%2F2%2C%2011712%20Tallinn!5e0!3m2!1sen!2see!4v1726169500609!5m2!1sen!2see">
          </iframe>
          </div>

          {/* <div className="absolute right-0 top-1/2 z-10 aspect-[53/66] w-full max-w-[315px] -translate-y-1/2">
            <Image src={image2} alt={`${image2Alt || "image alt text"}`} fill />

            <div className="absolute -left-5 -top-5 -z-10 h-full w-full border border-primary border-opacity-10 bg-primary bg-opacity-5 backdrop-blur-[6px] dark:border-white dark:border-opacity-10 dark:bg-white dark:bg-opacity-10"></div>
          </div> */}
          <div className="absolute right-0 top-24 z-40">
          </div>
        </div>
      </div>
      <div className="w-full px-4 lg:w-1/2">
        <div className="max-w-[565px] lg:ml-auto">
          <h2 className="mb-8 font-heading text-2xl font-light text-dark dark:text-white sm:text-[40px] sm:leading-[50px]">
            {title}
          </h2>
          {children}
        </div>
      </div>
    </div>
  );
}
