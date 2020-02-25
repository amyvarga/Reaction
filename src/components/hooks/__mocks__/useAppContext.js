import getAppContext from './getAppContext';

module.exports = {
  useAppContext: jest.fn(() => (getAppContext()))
};