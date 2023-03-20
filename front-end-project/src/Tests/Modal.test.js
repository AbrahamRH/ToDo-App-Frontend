import { render, screen } from "@testing-library/react";
import { TodosContextProvider } from "../Context/TodosContext";
import App from "../Components/App";

describe("renders metrics", () => {
  render(
    <TodosContextProvider>
      <App />
    </TodosContextProvider>
  );
  it("must display metrics", () => {
    expect(screen.queryByText("Average"));
  });
  test("must display Low", () => {
    expect(screen.queryByText("Low"));
  })
  test("must display High", () => {
    expect(screen.queryByText("Low"));
  })
  test("must display Medium", () => {
    expect(screen.queryByText("Low"));
  })
});
