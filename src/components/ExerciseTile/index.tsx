import { metadata } from "../../data/metadata";
import ExerciseButton from "../ExerciseButton";

interface ExerciseTileProps {
  header: string;
}

const ExerciseTile: React.FC<ExerciseTileProps> = ({ header }) => {
  return (
    <div className="flex flex-col bg-deep-blue rounded-lg p-3 text-white gap-2">
      <h2 className="font-semibold text-base">{header}</h2>
      {metadata.map((exercise) => (
        <div className="flex flex-col gap-2">
          <ExerciseButton exercise={exercise} />
        </div>
      ))}
    </div>
  );
};

export default ExerciseTile;
