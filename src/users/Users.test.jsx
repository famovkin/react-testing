import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Users from './Users';
import axios from 'axios';
import { MemoryRouter } from 'react-router-dom';
import AppRouter from '../router/AppRouter';
import { renderWithRouter } from '../tests/helpers/renderWithRouter';

jest.mock('axios');

describe('USERS TEST', () => {
  let response;

  beforeEach(() => {
    response = {
      data: [
        {
          id: 1,
          name: 'Leanne Graham',
        },
        {
          id: 2,
          name: 'Ervin Howell',
        },
        {
          id: 3,
          name: 'Clementine Bauch',
        },
      ],
    };
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('GET USERS', async () => {
    axios.get.mockReturnValue(response);
    renderWithRouter(<Users />);
    const users = await screen.findAllByTestId('user-item');
    expect(users.length).toBe(3);
    expect(axios.get).toBeCalledTimes(1);
    screen.debug();
  });

  test('TEST REDIRECT TO DETAILS PAGE', async () => {
    axios.get.mockReturnValue(response);
    render(
      <MemoryRouter>
        <AppRouter />
        <Users />
      </MemoryRouter>
    );

    await waitFor(async () => {
      const users = await screen.findAllByTestId('user-item');
      userEvent.click(users[0]);
    });

    screen.debug();
    expect(screen.getByTestId('user-page')).toBeInTheDocument();
  });
});
