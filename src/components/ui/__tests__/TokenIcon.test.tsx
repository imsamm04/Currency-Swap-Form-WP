import { render } from '@testing-library/react';
import { TokenIcon } from '../TokenIcon';
describe('TokenIcon', () => {
  it('renders without crashing', () => {
    render(<TokenIcon symbol="BTC" name="Bitcoin" price="1000" change="0" changeType="positive" gradient="" position={{}} />);
  });
});
