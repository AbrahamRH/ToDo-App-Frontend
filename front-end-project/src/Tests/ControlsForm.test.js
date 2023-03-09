import { render, fireEvent } from '@testing-library/react';
import Form from '../Components/SearchControls';
import NameFrom from '../Components/NameForm';
import StateForm from '../Components/StateForm';
import PriorityForm from '../Components/PriorityForm';

test('renders NameForm', () => {
  const component = render(<NameFrom/>)
  component.getByText('Name:')
})

test('renders PriorityForm', () => {
  const component = render(<PriorityForm/>)
  component.getByText('Priority:')
})

test('renders StateForm', () => {
  const component = render(<StateForm/>)
  component.getByText('State:')
})

test('renders Filter Controls', () => {
  const component = render(<Form/>)
  component.getByText('Name:')
  component.getByText('Priority:')
  component.getByText('State:')
})

test('Clicking the send button', () => {
  const component = render(<Form/>)
  const mockHandler = jest.fn()
  const button = component.getByText('Enviar')
  fireEvent.click(button)
  component.debug()
  component.getByText('Name:')
})