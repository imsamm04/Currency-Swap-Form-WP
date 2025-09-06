import { render } from '@testing-library/react';
import { Toast } from '../Toast';
describe('Toast', () => {
  it('renders without crashing', () => {
    render(<Toast message="Test" type="success" onClose={() => {}} />);
  });
});
