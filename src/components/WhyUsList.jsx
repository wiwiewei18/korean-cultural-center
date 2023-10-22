import WhyUs1 from "../assets/img/why-us-1.svg";
import WhyUs2 from "../assets/img/why-us-2.svg";
import WhyUs3 from "../assets/img/why-us-3.svg";
import WhyUs4 from "../assets/img/why-us-4.svg";
import WhyUsCircle from "../assets/img/why-us-circle.svg";

import whyUsData from "../data/whyUs";

import Fade from "react-reveal/Fade";

const WhyUsList = () => {
  return (
    <>
      {whyUsData.whyUs.map((point, index) => (
        <li className="flex md:even:flex-row-reverse md:gap-14" key={index}>
          <Fade bottom>
            <div className="relative flex items-center justify-center">
              <img
                src={WhyUsCircle}
                alt="why-us-circle"
                className="min-w-[246px] md:block hidden"
              />
              <img
                src={point.img}
                alt="why-us"
                className="absolute top-8 left-1/2 -translate-x-1/2"
              />
            </div>
            <div className="text-secondary flex flex-col justify-center">
              <div className="flex items-center gap-4 mb-4">
                <img
                  src={WhyUsCircle}
                  alt="why-us-circle"
                  className="w-[32px] md:hidden"
                />
                <h3 className="text-2xl font-bold">{point.title}</h3>
              </div>
              <p className="text-lg">{point.desc}</p>
            </div>
          </Fade>
        </li>
      ))}
    </>
  );
};

export default WhyUsList;
