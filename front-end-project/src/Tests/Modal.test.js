import { render, fireEvent } from "@testing-library/react";
import NewTodoButton from "../Components/NewTodoButton";

test("renders Filter Controls", () => {
  const component = render(<NewTodoButton />);
  component.getByText("+ New To Do");
  console.debug();
});

test("check the modal toggle", () => {
  const component = render(<NewTodoButton />);
  const button = component.getByText('+ New To Do')
  fireEvent.click(button);
  component.getByText('Create a task')
});
