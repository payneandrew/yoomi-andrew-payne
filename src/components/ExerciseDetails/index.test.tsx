import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import ExerciseDetails from ".";
import { metadata } from "../../data/metadata";

describe("WorkoutDetails", () => {
  jest.useFakeTimers();

  it("Renders correctly with initial data", () => {
    render(<ExerciseDetails metadata={metadata} />);

    expect(
      screen.getByText(metadata[0].friendlyExerciseName)
    ).toBeInTheDocument();
    expect(screen.getByText(/setup/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.setup[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/movement/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.movement[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/tip/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.tips[0])
    ).toBeInTheDocument();
  });

  it('Navigates to next exercise on "Next" button click', () => {
    render(<ExerciseDetails metadata={metadata} />);
    fireEvent.click(screen.getByTestId("next-button"));

    expect(
      screen.getByText(metadata[1].friendlyExerciseName)
    ).toBeInTheDocument();
    expect(screen.getByText(/setup/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.setup[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/movement/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.movement[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/tip/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.tips[0])
    ).toBeInTheDocument();
  });

  it('Navigates to previous exercise on "Back" button click', () => {
    render(<ExerciseDetails metadata={metadata} />);
    fireEvent.click(screen.getByTestId("next-button"));
    fireEvent.click(screen.getByTestId("back-button"));

    expect(
      screen.getByText(metadata[0].friendlyExerciseName)
    ).toBeInTheDocument();
    expect(screen.getByText(/setup/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.setup[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/movement/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.movement[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/tip/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[0].exerciseDetails.instructions.tips[0])
    ).toBeInTheDocument();
  });

  it("Initial timer value is set correctly and decrements every second", () => {
    render(<ExerciseDetails metadata={metadata} />);

    expect(screen.getByText(/00:10/)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(/00:09/)).toBeInTheDocument();
  });

  it("Increments the current index when the timer runs out", () => {
    render(<ExerciseDetails metadata={metadata} />);
    const backButton = screen.getByTestId("back-button");
    expect(backButton).toBeDisabled();

    for (let i = 0; i < 10; i++) {
      act(() => {
        jest.advanceTimersByTime(1000);
      });
    }

    expect(backButton).not.toBeDisabled();
    expect(
      screen.getByText(metadata[1].friendlyExerciseName)
    ).toBeInTheDocument();
    expect(screen.getByText(/setup/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.setup[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/movement/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.movement[0])
    ).toBeInTheDocument();
    expect(screen.getByText(/tip/i)).toBeInTheDocument();
    expect(
      screen.getByText(metadata[1].exerciseDetails.instructions.tips[0])
    ).toBeInTheDocument();
  });

  it("Correctly displays hold duration text", () => {
    render(<ExerciseDetails metadata={[metadata[2]]} />);
    expect(screen.getByText(/x 10s/i)).toBeInTheDocument();
  });
});
