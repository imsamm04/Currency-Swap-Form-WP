import { render } from '@testing-library/react';
import { ToastContainer } from '../ToastContainer';
describe('ToastContainer', () => {
  it('renders without crashing', () => {
    render(<ToastContainer toasts={[]} onRemove={() => {}} />);
  });
});
