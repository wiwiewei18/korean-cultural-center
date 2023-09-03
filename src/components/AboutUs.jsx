import Slider from "./Slider";

const AboutUs = () => {
  return (
    <div className="py-16 w-[90%] mx-auto flex items-center text-white gap-24">
      <Slider sliderWidth={400} sliderHeight={250} />
      <div className="space-y-12">
        <h2 className="text-4xl font-bold">About Us</h2>
        <p className="text-lg">
          Established in 2016 by Grand Master Ahn Dong Kyun and his wife, Grand
          Master Park Eun Joo, Batam Korean Culture Center proudly boasts 7
          years of operation.
          <br />
          <br />
          Our institution in Batam is dedicated to nurturing children's growth
          through Taekwondo and vibrant Korean culture.
          <br />
          <br />
          Guided by Grand Master Ahn Dong Kyun, a renowned Grand Master Dan 5 in
          martial arts, and led by Grand Master Park Eun Joo, together with our
          masters from Indonesia, our center has been an inspirational hub.
          <br />
          <br />
          With a focus on discipline, creativity, and self-confidence, our
          nurturing environment supports children aged 3 to 16. Beyond martial
          arts, we're a community shaping young minds, empowering future
          leaders, and celebrating Korean heritage. Join us on this remarkable
          journey of growth and self-discovery.
        </p>
        <a
          href="#"
          className="hidden text-secondary text-lg font-bold bg-soft-blue rounded-[10px] p-2 px-10"
        >
          Learn More
        </a>
      </div>
    </div>
  );
};

export default AboutUs;
