import { render } from '@testing-library/react';
import { AnimatedNumber } from '../AnimatedNumber';
describe('AnimatedNumber', () => {
  it('renders without crashing', () => {
    render(<AnimatedNumber value={100} />);
  });
});
