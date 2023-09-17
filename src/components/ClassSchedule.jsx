import ClassScheduleList from "./ClassScheduleList";
import bg1 from "../assets/img/class-schedule-bg-1.svg";
import bg2 from "../assets/img/class-schedule-bg-2.svg";

const ClassSchedule = () => {
  return (
    <section className="bg-soft-blue py-16 relative" id="classes">
      <div className="w-4/5 mx-auto space-y-8">
        <h2 className="text-4xl text-secondary font-bold">Class Schedules</h2>
        <div className="space-y-6">
          <ClassScheduleList />
          <img
            src={bg1}
            alt="background"
            className="absolute right-0 top-0 w-[28rem]"
          />
          <img
            src={bg2}
            alt="background"
            className="absolute right-0 bottom-0 right-[14rem] w-[28rem]"
          />
        </div>
      </div>
    </section>
  );
};

export default ClassSchedule;
