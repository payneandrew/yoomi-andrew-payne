import { useState } from "react";
import { ExerciseMetadata } from "../../types/metadata";
import { BackIcon } from "../icons/BackIcon";
import { MovementIcon } from "../icons/MovementIcon";
import { NextIcon } from "../icons/NextIcon";
import { SetupIcon } from "../icons/SetupIcon";
import { TipIcon } from "../icons/TipIcon";

export interface WorkoutDetailsProps {
  metadata: ExerciseMetadata[];
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ metadata }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < metadata.length - 1) setCurrentIndex(currentIndex + 1);
  };

  const handleBack = () => {
    if (currentIndex > 0) setCurrentIndex(currentIndex - 1);
  };

  const currentExercise = metadata[currentIndex];

  return (
    <div className="bg-background flex">
      <div className="h-96 w-96 py-6 pl-5 flex-shrink-0">
        <img src="images/excercise-two.png" alt="exercise two" />
      </div>
      <div className="pl-12 space-y-6">
        <div>
          <h1 className="font-plus-jakarta-sans-font text-lg font-bold">
            {currentExercise.friendlyExerciseName}
          </h1>
          <p className="font-inter-font opacity-60">
            {currentExercise.exerciseBlueprint.baseConfig.numReps} Reps x{" "}
            {currentExercise.exerciseBlueprint.baseConfig.numSets} Sets x{" "}
            {/* TODO: convert this to sec, mins, etc */}
            {currentExercise.exerciseBlueprint.baseConfig.setDurationMs / 1000}s
            Hold
          </p>
        </div>
        <div className="font-inter-font space-y-3">
          <div className="flex items-start gap-5">
            <SetupIcon />
            <div>
              <h2 className="font-bold text-base">Setup</h2>
              <p className="opacity-60">
                {currentExercise.exerciseDetails.instructions.setup}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <MovementIcon />
            <div>
              <h2 className="font-bold text-base">Movement</h2>
              <p className="opacity-60">
                {currentExercise.exerciseDetails.instructions.movement}
              </p>
            </div>
          </div>
          <div className="flex items-start gap-5">
            <TipIcon />
            <div>
              <h2 className="font-bold text-base">Tip</h2>
              <p className="opacity-60">
                {currentExercise.exerciseDetails.instructions.tips}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-auto p-6">
        {/* Timer component here */}
        <div className="flex justify-between">
          <button onClick={handleBack}>
            <BackIcon />
          </button>
          <button onClick={handleNext}>
            <NextIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
