import { render } from '@testing-library/react';
import { SocialIcon } from '../SocialIcons';
describe('SocialIcons', () => {
  it('renders without crashing', () => {
  render(<SocialIcon name="Twitter" />);
  });
});
