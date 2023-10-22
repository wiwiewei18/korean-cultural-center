import classScheduleData from "../data/classSchedule";

import Fade from "react-reveal/Fade";

const ClassScheduleList = () => {
  return (
    <>
      {classScheduleData.map((tkdclass, index) => (
        <Fade left>
          <div
            className="flex md:flex-nowrap flex-wrap items-center justify-center gap-4"
            key={index}
          >
            <img
              src={tkdclass.img}
              alt="kindergarten"
              className="md:w-1/3 rounded-[10px]"
            />
            <div className="md:w-2/3 w-full text-secondary">
              <h3 className="text-2xl font-bold mb-4">{tkdclass.title}</h3>
              <table>
                <tbody>
                  <tr>
                    <td className="font-semibold">Age</td>
                    <td>:</td>
                    <td>{tkdclass.age}</td>
                  </tr>
                  {tkdclass.times.map((time, index) => (
                    <tr key={index}>
                      <td className="font-semibold">
                        {index == 0 ? "Day & Time" : ""}
                      </td>
                      <td>{index == 0 ? ":" : ""}</td>
                      <td>
                        {tkdclass.times.length > 1 ? (
                          <b>GROUP {index + 1} ] </b>
                        ) : (
                          <></>
                        )}
                        {time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </Fade>
      ))}
    </>
  );
};

export default ClassScheduleList;
