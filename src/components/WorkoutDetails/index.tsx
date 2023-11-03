import { useEffect, useState } from "react";
import { ExerciseMetadata } from "../../types/metadata";
import { formatTime } from "../../utils/formatTime";
import BackButton from "../BackButton";
import MetadataItem from "../InstructionItem";
import NextButton from "../NextButton";
import Timer from "../Timer";
import { MovementIcon } from "../icons/MovementIcon";
import { SetupIcon } from "../icons/SetupIcon";
import { TipIcon } from "../icons/TipIcon";

export interface WorkoutDetailsProps {
  metadata: ExerciseMetadata[];
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ metadata }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const currentExercise = metadata[currentIndex];
  const [timer, setTimer] = useState<number>(10);

  useEffect(() => {
    if (timer > 0 && currentIndex < metadata.length) {
      const timerId = setTimeout(() => {
        setTimer(timer - 1);
      }, 1000);

      return () => clearTimeout(timerId);
    } else if (timer <= 0 && currentIndex < metadata.length - 1) {
      handleNavigation(1);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [timer, currentIndex, metadata.length]);

  const handleNavigation = (inc: number) => {
    const newIndex = currentIndex + inc;
    if (newIndex >= 0 && newIndex < metadata.length) {
      setCurrentIndex(newIndex);
      setTimer(10);
    }
  };

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex items-center w-11/12"
        style={{
          background:
            "linear-gradient(0deg, rgba(7, 103, 135, 0.05) 0%, rgba(7, 103, 135, 0.05) 100%), #FFF",
        }}
      >
        <div className="w-96 py-6 pl-5 flex-shrink-0">
          <img
            src={currentExercise.imageUrl}
            alt={currentExercise.friendlyExerciseName}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col pt-12">
          <div className="pl-12 space-y-6">
            <div>
              <h1 className="font-plus-jakarta-sans-font text-lg font-bold">
                {currentExercise.friendlyExerciseName}
              </h1>
              <p className="font-inter-font opacity-60">
                {currentExercise.exerciseBlueprint.baseConfig.numReps} Reps x{" "}
                {currentExercise.exerciseBlueprint.baseConfig.numSets} Sets
                {currentExercise.exerciseBlueprint.baseConfig.holdDurationMs
                  ? " x " +
                    currentExercise.exerciseBlueprint.baseConfig
                      .holdDurationMs /
                      1000 +
                    "s"
                  : ""}
              </p>
            </div>
            <div className="font-inter-font space-y-3">
              <MetadataItem
                IconComponent={SetupIcon}
                title="Setup"
                description={
                  currentExercise.exerciseDetails.instructions.setup[0]
                }
              />
              <MetadataItem
                IconComponent={MovementIcon}
                title="Movement"
                description={
                  currentExercise.exerciseDetails.instructions.movement[0]
                }
              />
              <MetadataItem
                IconComponent={TipIcon}
                title="Tip"
                description={
                  currentExercise.exerciseDetails.instructions.tips[0]
                }
              />
            </div>
          </div>
          <div className="mt-12 flex gap-12 justify-end pr-10 pb-6 w-full">
            <Timer>{formatTime(timer)}</Timer>
            <div className="flex gap-2.5">
              <BackButton
                onClick={() => handleNavigation(-1)}
                disabled={currentIndex === 0}
              />
              <NextButton
                onClick={() => handleNavigation(1)}
                disabled={currentIndex === metadata.length - 1}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
