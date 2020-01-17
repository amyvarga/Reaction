export const VALIDATION_SCHEMA = [
  {
    message: {
      required: 'Please add a message',
      length: 'Your message must be great than 6 characters'
    }
  },
  {
    character: {
      required: "Please add a character"
    }
  },
  {
    username: {
      required: "Please add a username"
    }
  }
];