import reducer, { saveFormData } from './supportRequestSlice';

describe('supportRequestSlice', () => {
  const initialState = [];

  test('should return the initial state', () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test('should handle saveFormData', () => {
    const formData = {
      fullName: 'John Doe',
      email: 'johndoe@example.com',
      issueType: 'Bug Report',
      tags: ['UI', 'Backend'],
      steps: [{ description: 'Step 1' }],
    };

    const nextState = reducer(initialState, saveFormData(formData));

    expect(nextState).toHaveLength(1);
    expect(nextState[0]).toEqual(formData);
  });
});
