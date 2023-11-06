import { render } from "@testing-library/react";
import ExerciseCatalog from "./components/ExerciseCatalog";
import ExerciseDetails from "./components/ExerciseDetails";
import Layout from "./components/Layout";
import { metadata } from "./data/metadata";

describe("App Components", () => {
  it("ExerciseCatalog renders without crashing", () => {
    render(<ExerciseCatalog />);
  });

  it("ExerciseDetails renders without crashing", () => {
    render(<ExerciseDetails metadata={metadata} />);
  });

  it("Layout renders without crashing", () => {
    render(
      <Layout>
        <ExerciseCatalog />
        <ExerciseDetails metadata={metadata} />
      </Layout>
    );
  });
});
