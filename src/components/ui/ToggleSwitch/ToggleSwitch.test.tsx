import { render } from '@testing-library/react'

import '@testing-library/jest-dom'

import { default as ToggleSwitch } from './ToggleSwitch'

describe('ToggleSwitch', () => {
  it("renders the todo app", () => {
    render(<ToggleSwitch />);
  });
});