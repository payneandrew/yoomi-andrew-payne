import { metadata } from "../../data/metadata";
import ExerciseButton from "../ExerciseButton";

interface ExerciseTileProps {
  header: string;
  theme: "blue" | "grey";
}

export type ColorTheme = {
  bgColor: string;
  textColor: string;
  borderColor: string;
  buttonBgColor: string;
};

export type Themes = {
  [key in ExerciseTileProps["theme"]]: ColorTheme;
};

const colorThemes: Themes = {
  blue: {
    bgColor: "bg-deep-blue",
    textColor: "text-white",
    borderColor: "border-white",
    buttonBgColor: "bg-coral-blue",
  },
  grey: {
    bgColor: "bg-white",
    textColor: "text-black",
    borderColor: "border-deep-blue",
    buttonBgColor: "bg-light-grey",
  },
};

const ExerciseTile: React.FC<ExerciseTileProps> = ({ header, theme }) => {
  const { bgColor, textColor } = colorThemes[theme];
  return (
    <div
      className={`flex flex-col rounded-lg p-3 gap-2 ${bgColor} ${textColor}`}
    >
      <h2 className="font-semibold text-base">{header}</h2>
      {metadata.map((exercise) => (
        <div className="flex flex-col gap-2">
          <ExerciseButton exercise={exercise} theme={colorThemes[theme]} />
        </div>
      ))}
    </div>
  );
};

export default ExerciseTile;
