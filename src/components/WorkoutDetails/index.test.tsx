import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import WorkoutDetails from ".";
import { metadata } from "../../data/metadata";

describe("WorkoutDetails", () => {
  jest.useFakeTimers();

  it("renders correctly with initial data", () => {
    render(<WorkoutDetails metadata={metadata} />);
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

  it('navigates to next exercise on "Next" button click', () => {
    render(<WorkoutDetails metadata={metadata} />);
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

  it('navigates to previous exercise on "Back" button click', () => {
    render(<WorkoutDetails metadata={metadata} />);
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

  it("initial timer value is set correctly and decrements every second", () => {
    render(<WorkoutDetails metadata={metadata} />);

    expect(screen.getByText(/00:10/)).toBeInTheDocument();

    act(() => {
      jest.advanceTimersByTime(1000);
    });

    expect(screen.getByText(/00:09/)).toBeInTheDocument();
  });
});
