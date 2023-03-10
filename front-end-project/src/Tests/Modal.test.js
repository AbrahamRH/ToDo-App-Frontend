
import { render, fireEvent } from '@testing-library/react';
import NewTodoButton from '../Components/NewTodoButton';

test('renders Filter Controls', () => {
  const component = render(<NewTodoButton/>)
  component.getByText('+ New To Do')
  console.debug()

})