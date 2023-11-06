import { ExerciseMetadata } from "../../types/metadata";
import { ColorTheme } from "../ExerciseTile";

interface ExerciseButtonProps {
  exercise: ExerciseMetadata;
  theme: ColorTheme;
}

const ExerciseButton: React.FC<ExerciseButtonProps> = ({ exercise, theme }) => {
  return (
    <div
      className={`flex rounded-r-lg border-l-2 p-1 gap-2 items-center ${theme.borderColor} ${theme.buttonBgColor}`}
    >
      <img src="/images/exercise-two.png" alt="" className="h-8 w-8 rounded" />
      <div className="flex flex-col">
        <h3 className="text-sm">{exercise.friendlyExerciseName}</h3>
        <p className="opacity-70 font text-xs">Upper Body</p>
      </div>
    </div>
  );
};

export default ExerciseButton;
