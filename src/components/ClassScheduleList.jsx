import classScheduleData from "../data/classSchedule";

const ClassScheduleList = () => {
  return (
    <>
      {classScheduleData.map((tkdclass, index) => (
        <div className="flex items-center justify-center gap-4" key={index}>
          <img
            src="https://s3-alpha-sig.figma.com/img/449d/9b6c/ebb130af7f252ef8def25237857cdd26?Expires=1694390400&Signature=QmdW4HH7EgJ~kZG9ZsQopoW499cf6Go3Zs~VyhcGadF2SjgykzdxOlO92vLguDR513ToLtMwEhC6mfNV~dNlSx5BRJyH4yyLM8jLhr9RZxfjhNjNEAg3ZTAu6Vj9TPBZvJ5iOaSFckeR9t4XeWjiu7TUY5zqD~Q2QXHxmJ~xPgHoXTstPPjqh3RwxPVy1L154ozdri~4f~OzXsNELVuaipDPFv3OM3c8rzJbpczV0gV5u5XwvDF5dPc4sd8A1TqSFlMENzdQ-btWCsi9YrzknNfis-HI-EPQOUC8TkwbliO4nAbU9bxUe2TrIeSEM2g37CCoZhRLM87X-UQpRL7SLw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
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
