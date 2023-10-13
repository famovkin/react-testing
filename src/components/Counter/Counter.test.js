import { screen, waitFor } from '@testing-library/react';
import Counter from './Counter';
import userEvent from '@testing-library/user-event';
import { renderTestApp } from '../../tests/helpers/renderTestApp';

describe('Counter test', () => {
  test('Test increment', async () => {
    const { getByTestId } = renderTestApp(<Counter />, {
      initialState: {
        counter: { value: 10 },
      },
      route: '/',
    });

    screen.debug();
    const incrementBtn = getByTestId('increment-btn');
    expect(getByTestId('value-title')).toHaveTextContent('0');
    await waitFor(() => {
      userEvent.click(incrementBtn);
    });
    expect(getByTestId('value-title')).toHaveTextContent('1');
  });
});
