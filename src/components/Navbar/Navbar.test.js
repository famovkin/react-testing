import { screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { renderWithRouter } from '../../tests/helpers/renderWithRouter';
import Navbar from './Navbar';

describe('TEST APP', () => {
  test('ABOUT LINK TEST', async () => {
    renderWithRouter(<Navbar />);
    await waitFor(() => {
      const aboutLink = screen.getByTestId('about-link');
      userEvent.click(aboutLink);
    });
    expect(screen.getByTestId('about-page')).toBeInTheDocument();
  });

  test('USERS LINK TEST', async () => {
    renderWithRouter(<Navbar />);
    await waitFor(() => {
      const mainLink = screen.getByTestId('main-link');
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('MAIN LINK TEST', async () => {
    renderWithRouter(<Navbar />);
    await waitFor(() => {
      const mainLink = screen.getByTestId('main-link');
      userEvent.click(mainLink);
    });
    expect(screen.getByTestId('main-page')).toBeInTheDocument();
  });

  test('ERROR PAGE TEST', async () => {
    renderWithRouter(<Navbar />, '/asdfasdf');
    expect(screen.getByTestId('not-found-page')).toBeInTheDocument();
  });
});
