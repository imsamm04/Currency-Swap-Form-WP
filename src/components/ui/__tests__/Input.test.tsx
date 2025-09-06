import { render } from '@testing-library/react';
import { Input } from '../Input';
describe('Input', () => {
  it('renders without crashing', () => {
    render(<Input value="" onChange={() => {}} />);
  });
});
