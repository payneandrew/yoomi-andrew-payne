import { render, screen } from "@testing-library/react";
import ExerciseButton from ".";
import { metadata } from "../../data/metadata";
import { Themes } from "../ExerciseTile";

describe("ExerciseButton", () => {
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
  it("renders ExerciseButton component", () => {
    render(<ExerciseButton exercise={metadata[0]} theme={colorThemes.blue} />);

    expect(
      screen.getByText(metadata[0].friendlyExerciseName)
    ).toBeInTheDocument();
  });
});
