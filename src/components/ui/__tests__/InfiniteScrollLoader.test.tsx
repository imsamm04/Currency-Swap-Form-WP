import { render } from '@testing-library/react';
import { InfiniteScrollLoader } from '../InfiniteScrollLoader';
describe('InfiniteScrollLoader', () => {
  it('renders without crashing', () => {
  render(<InfiniteScrollLoader isLoading={false} hasMore={true} observerRef={() => {}} />);
  });
});
