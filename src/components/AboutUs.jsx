import Slider from "./Slider";

const AboutUs = () => {
  return (
    <div
      className="py-16 w-[90%] mx-auto flex lg:flex-row flex-col-reverse items-center text-white gap-24 md:overflow-visible overflow-hidden"
      id="about"
    >
      <Slider sliderWidth={400} sliderHeight={250} />
      <div className="space-y-12 lg:text-left text-center">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-lg">
          Established in 2015 by Grand Master Ahn Dong Kyun and his wife, Grand
          Master Park Eun Joo, Batam Korean Culture Center Tae kwon Do proudly
          boasts 8 years of operation.
          <br />
          <br />
          Our institution in Batam is dedicated to nurturing children's growth
          through Taekwondo and vibrant Korean culture .
          <br />
          <br />
          Taekwondo is a Korean martial art, and by learning Taekwondo, you can
          learn Korean etiquette and culture.
        </p>
        <a
          href="/"
          className="hidden text-secondary text-lg font-bold bg-soft-blue rounded-[10px] p-2 px-10"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
