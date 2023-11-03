type Side = "LEFT" | "RIGHT" | "BOTH";

interface BaseConfig {
  numSets: number;
  numReps: number;
  side: Side;
  restDurationMs: number;
  setDurationMs: number;
  holdDurationMs?: number;
}

interface ExerciseBlueprint {
  baseConfig: BaseConfig;
  exerciseId: string;
}

interface Instructions {
  setup: string[];
  movement: string[];
  tips: string[];
}

interface ExerciseDetails {
  instructions: Instructions;
  deviceSetupPosition: string;
  exerciseEquipment: string[];
}

export interface ExerciseMetadata {
  exerciseBlueprint: ExerciseBlueprint;
  exerciseDetails: ExerciseDetails;
  friendlyExerciseName: string;
  imageUrl: string; // I added the image url to the data structure to be able to reference the image that corresponds with the exercise
}
