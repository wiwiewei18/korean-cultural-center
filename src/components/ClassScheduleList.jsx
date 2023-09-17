import classScheduleData from "../data/classSchedule";

const ClassScheduleList = () => {
  return (
    <>
      {classScheduleData.map((tkdclass, index) => (
        <div className="flex items-center justify-center gap-4" key={index}>
          <img
            src={tkdclass.img}
            alt="kindergarten"
            className="w-1/3 rounded-[10px]"
          />
          <div className="w-2/3 text-secondary">
            <h3 className="text-2xl font-bold mb-4">{tkdclass.title}</h3>
            <table>
              <tbody>
                <tr>
                  <td>Age</td>
                  <td>:</td>
                  <td>{tkdclass.age}</td>
                </tr>
                <tr>
                  <td>Day & Time</td>
                  <td>:</td>
                  <td>- {tkdclass.time1}</td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td>- {tkdclass.time2}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </>
  );
};

export default ClassScheduleList;
