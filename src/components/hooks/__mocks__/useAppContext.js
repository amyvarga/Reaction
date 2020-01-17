const mockDispatch = jest.fn();
const mockPublish = jest.fn();

module.exports = {
  useAppContext() {
    return {
      pubsub: mockPublish,
      dispatch: mockDispatch,
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
              currentValue: '',
              isValid: null
            },
          }
        }
      }
    };
  }
};