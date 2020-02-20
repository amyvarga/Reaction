import defaultInitialState from '../__mocks__/useAppContextInitialState';

module.exports = {
  useAppContext: jest.fn(() => (defaultInitialState))
};