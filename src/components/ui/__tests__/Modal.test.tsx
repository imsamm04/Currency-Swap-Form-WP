import { render } from '@testing-library/react';
import { Modal } from '../Modal';
describe('Modal', () => {
  it('renders without crashing', () => {
  render(<Modal isOpen={true} onClose={() => {}}>Test</Modal>);
  });
});
