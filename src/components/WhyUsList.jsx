import WhyUs1 from "../assets/img/why-us-1.svg";
import WhyUs2 from "../assets/img/why-us-2.svg";
import WhyUs3 from "../assets/img/why-us-3.svg";
import WhyUs4 from "../assets/img/why-us-4.svg";
import WhyUsCircle from "../assets/img/why-us-circle.svg";

import whyUsData from "../data/whyUs";

const WhyUsList = () => {
  return (
    <>
      {whyUsData.whyUs.map((point, index) => (
        <li className="flex even:flex-row-reverse gap-14" key={index}>
          <div className="relative flex items-center justify-center">
            <img
              src={WhyUsCircle}
              alt="why-us-circle"
              className="min-w-[246px]"
            />
            <img
              src={point.img}
              alt="why-us"
              className="absolute top-8 left-1/2 -translate-x-1/2"
            />
          </div>
          <div className="text-secondary flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-4">{point.title}</h3>
            <p className="text-lg">{point.desc}</p>
          </div>
        </li>
      ))}
    </>
  );
};

export default WhyUsList;
