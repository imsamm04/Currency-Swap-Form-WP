import { renderHook, act } from '@testing-library/react';
import { useToast } from '../useToast';

describe('useToast', () => {
  it('should add and remove toast', () => {
    const { result } = renderHook(() => useToast());
    let toastId: string;
    act(() => {
      toastId = result.current.addToast('Test message', 'success');
    });
    expect(result.current.toasts.length).toBe(1);
    act(() => {
      result.current.removeToast(toastId!);
    });
    expect(result.current.toasts.length).toBe(0);
  });

  it('should clear all toasts', () => {
    const { result } = renderHook(() => useToast());
    act(() => {
      result.current.addToast('Test message 1', 'info');
      result.current.addToast('Test message 2', 'error');
      result.current.clearAllToasts();
    });
    expect(result.current.toasts.length).toBe(0);
  });
});
