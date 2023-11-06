import { format } from "date-fns";
import ExerciseTile from "../ExerciseTile";

const ExerciseCatalog: React.FC = () => {
  return (
    <div className="font-inter-font flex flex-col">
      <div className="pt-8 pl-6">
        <h1 className="font-bold">Today's Exercises</h1>
        <p className="opacity-60">{format(new Date(), "dd MMM yyyy, eeee")}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6">
        <ExerciseTile header="2 selected" theme="blue" />
        <ExerciseTile header="Select to add" theme="grey" />
        <ExerciseTile header="Done" theme="grey" />
      </div>
    </div>
  );
};

export default ExerciseCatalog;
