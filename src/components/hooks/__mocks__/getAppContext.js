export default ({ username = "" } = {}) => ({
  pubsub: jest.fn(),
  dispatch: jest.fn(),
  state: {
    messages: [],
    username: 'anonymous',
    reactionsMap: {},
    formControls: {
      formMessage: {
        message: {
          error: '',
          currentValue: '',
          isValid: null
        },
        character: {
          error: '',
          currentValue: '',
          isValid: null
        }
      },
      formUsername: {
        username: {
          error: '',
          currentValue: username,
          isValid: null
        },
      }
    }
  }
});