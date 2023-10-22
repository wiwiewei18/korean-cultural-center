import WhyUsList from "./WhyUsList";

const WhyUs = () => {
  return (
    <section className="bg-soft-blue py-16">
      <div className="w-4/5 mx-auto space-y-16">
        <h2 className="text-4xl text-secondary font-bold text-center">
          Why Choose Batam Korean Culture Center?
        </h2>
        <div className="space-y-16">
          <WhyUsList />
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
