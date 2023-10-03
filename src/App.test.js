import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

describe('REACT', () => {
  test('GET', () => {
    render(<App />);
    const linkElement = screen.getByText(/hello world/i);
    const btn = screen.getByRole('button');
    const input = screen.getByPlaceholderText(/input value/i);
    expect(linkElement).toBeInTheDocument();
    expect(btn).toBeInTheDocument();
    expect(input).toMatchSnapshot();
    // screen.debug();
  });

  test('QUERY', () => {
    render(<App />);
    const unexistElem = screen.queryByText(/'hello world!'/i);
    expect(unexistElem).toBeNull();
  });

  test('FIND', async () => {
    render(<App />);
    screen.debug();
    const helloWorldElem = await screen.findByText(/data/i);
    expect(helloWorldElem).toBeInTheDocument();
    expect(helloWorldElem).toHaveStyle({ color: 'red' });
    screen.debug();
  });

  test('CLICK EVENT', async () => {
    render(<App />);
    const btn = screen.getByTestId('toggle-btn');
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeInTheDocument();
    fireEvent.click(btn);
    expect(screen.queryByTestId('toggle-elem')).toBeNull();
  });

  test('INPUT', async () => {
    render(<App />);
    const input = screen.getByPlaceholderText(/input value/i);
    expect(screen.queryByTestId('value-elem')).toContainHTML('');

    // Искуственное событие
    // fireEvent.input(input, { target: { value: 123123 } });

    // Пользовательский ввод
    userEvent.type(input, '123123');
    expect(screen.queryByTestId('value-elem')).toContainHTML('123123');
  });
});
