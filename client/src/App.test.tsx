import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

vi.stubGlobal('alert', vi.fn());

describe('Calculator', () => {
  it('appends digits to the sum correctly', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('1'));
    await userEvent.click(screen.getByText('2'));

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('12');
  });

  it('prevents adding digits if the length is bigger than 3', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('7'));
    await userEvent.click(screen.getByText('6'));

    expect(alert).toHaveBeenCalledWith('숫자는 세 자리까지만 입력 가능합니다!');
  });

  it('prevents adding digits if the length is bigger than 3 eventhough it has operations', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('9'));
    await userEvent.click(screen.getByText('8'));
    await userEvent.click(screen.getByText('/'));
    await userEvent.click(screen.getByText('2'));
    await userEvent.click(screen.getByText('5'));
    await userEvent.click(screen.getByText('4'));
    await userEvent.click(screen.getByText('6'));

    expect(alert).toHaveBeenCalledWith('숫자는 세 자리까지만 입력 가능합니다!');
  });

  it('validates operations if added after no digits', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('/'));
    expect(alert).toHaveBeenCalledWith(
      '숫자를 먼저 입력한 후 연산자를 입력해주세요!'
    );
  });

  it('computes the correct result for a division', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('/'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('2');
  });

  it('computes the correct result for a multiplication', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('X'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('18');
  });

  it('computes the correct result for an Addition', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('+'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('9');
  });

  it('computes the correct result for an Substraction', async () => {
    render(<App />);
    await userEvent.click(screen.getByText('6'));
    await userEvent.click(screen.getByText('-'));
    await userEvent.click(screen.getByText('3'));
    await userEvent.click(screen.getByText('='));
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent('3');
  });
});
