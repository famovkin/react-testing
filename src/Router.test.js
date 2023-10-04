import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

describe('TEST APP', () => {
  test('ROUTER TEST', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );
    await waitFor(() => {
      const aboutLink = screen.getByTestId('about-link');
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId('about-page')).toBeInTheDocument();

    await waitFor(() => {
      const mainLink = screen.getByTestId('main-link');
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('ERROR PAGE TEST', async () => {
    render(
      <MemoryRouter initialEntries={['/asdfasdf']}>
        <App />
      </MemoryRouter>
    );
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
