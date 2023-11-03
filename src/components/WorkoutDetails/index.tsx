import { useEffect, useState } from "react";
import { ExerciseMetadata } from "../../types/metadata";
import { formatTime } from "../../utils/formatTime";
import { MovementIcon } from "../icons/MovementIcon";
import { SetupIcon } from "../icons/SetupIcon";
import { TipIcon } from "../icons/TipIcon";
import MetadataItem from "../InstructionItem";
import NavButton from "../NavButton";
import Timer from "../Timer";

export interface WorkoutDetailsProps {
  metadata: ExerciseMetadata[];
}

const WorkoutDetails: React.FC<WorkoutDetailsProps> = ({ metadata }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { exerciseBlueprint, exerciseDetails, friendlyExerciseName, imageUrl } =
    metadata[currentIndex];
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

  const handleNavigation = (increment: number) => {
    const newIndex = currentIndex + increment;
    if (newIndex >= 0 && newIndex < metadata.length) {
      setCurrentIndex(newIndex);
      setTimer(10);
    }
  };

  const holdDurationText = exerciseBlueprint.baseConfig.holdDurationMs
    ? " x " + exerciseBlueprint.baseConfig.holdDurationMs / 1000 + "s Hold"
    : "";

  return (
    <div className="flex justify-center items-center">
      <div
        className="flex items-center rounded-lg"
        style={{
          background:
            "linear-gradient(0deg, rgba(7, 103, 135, 0.05) 0%, rgba(7, 103, 135, 0.05) 100%), #FFF",
        }}
      >
        <div className="py-6 pl-5 w-[600px] flex-shrink-0">
          <img
            src={imageUrl}
            alt={friendlyExerciseName}
            className="rounded-lg w-full h-full object-cover"
          />
        </div>
        <div className="flex flex-col pt-12 max-w-4xl">
          <div className="pl-12 space-y-6">
            <div>
              <h1 className="font-plus-jakarta-sans-font text-lg font-bold">
                {friendlyExerciseName}
              </h1>
              <p className="font-inter-font opacity-60">
                {exerciseBlueprint.baseConfig.numReps} Reps x{" "}
                {exerciseBlueprint.baseConfig.numSets} Sets
                {holdDurationText}
              </p>
            </div>
            <div className="font-inter-font space-y-3">
              <MetadataItem
                IconComponent={SetupIcon}
                title="Setup"
                description={exerciseDetails.instructions.setup[0]}
              />
              <MetadataItem
                IconComponent={MovementIcon}
                title="Movement"
                description={exerciseDetails.instructions.movement[0]}
              />
              <MetadataItem
                IconComponent={TipIcon}
                title="Tip"
                description={exerciseDetails.instructions.tips[0]}
              />
            </div>
          </div>
          <div className="mt-12 flex gap-12 justify-end pr-10 pb-6 w-full">
            <Timer>{formatTime(timer)}</Timer>
            <div className="flex gap-2.5">
              <NavButton
                onClick={() => handleNavigation(-1)}
                disabled={currentIndex === 0}
                direction="back"
              />
              <NavButton
                onClick={() => handleNavigation(1)}
                disabled={currentIndex === metadata.length - 1}
                direction="next"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkoutDetails;
