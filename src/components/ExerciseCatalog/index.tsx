import { format } from "date-fns";
import { metadata } from "../../data/metadata";
import ExerciseTile from "../ExerciseTile";

const ExerciseCatalog: React.FC = () => {
  return (
    <div className="font-inter-font flex flex-col">
      <div className="pt-8 pl-6">
        <h1 className="font-bold">Today's Exercises</h1>
        <p className="opacity-60">{format(new Date(), "dd MMM yyyy, eeee")}</p>
      </div>
      <div className="grid grid-cols-3 gap-4 p-6">
        <ExerciseTile
          header="2 selected"
          theme="blue"
          metadata={[metadata[0], metadata[1]]}
        />
        <ExerciseTile
          header="Select to add"
          theme="grey"
          metadata={[metadata[0], metadata[1]]}
        />
        <div className="flex flex-col justify-between gap-3">
          <ExerciseTile header="Done" theme="grey" metadata={[metadata[2]]} />
          <button className="w-full h-full bg-deep-blue rounded text-white items-center justify-center">
            Begin Workout
          </button>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCatalog;
