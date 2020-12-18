import { renderHook, act } from '@testing-library/react-hooks';
import { useForm } from 'hooks/useForm';

import '@testing-library/jest-dom';

describe('Tests in useForm', () => {
  const initialForm = {
    name: 'Cris',
    email: 'chrisloarryn@gmail.com'
  };

  test('Should return a form by default', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [formValues, handleInputChange, reset] = result.current;

    expect(formValues).toEqual(initialForm);
    expect(typeof handleInputChange).toBe('function');
    expect(typeof reset).toBe('function');
  });

  test('Should change name value', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
    });
    const [formValues] = result.current;

    expect(formValues).toEqual({ ...initialForm, name: 'Melissa' });
  });

  test('Should reset the form with reset function', () => {
    const { result } = renderHook(() => useForm(initialForm));
    const [, handleInputChange, reset] = result.current;

    act(() => {
      handleInputChange({
        target: {
          name: 'name',
          value: 'Melissa'
        }
      });
      reset();
    });
    const [formValues] = result.current;

    expect(formValues).toEqual(initialForm);
  });
});
