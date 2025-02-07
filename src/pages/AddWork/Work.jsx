import WorkDetails from "./WorkDetails";
import HoursDate from "./HoursDate";
import useHourDate from "../../hooks/useHourDate";

const Work = () => {
  const { refetch } = useHourDate();

  return (
    <div>
      <WorkDetails refetch={refetch}></WorkDetails>
      <HoursDate></HoursDate>
    </div>
  );
};

export default Work;
