const fn = {
  add: (a, b) => a + b,
  makeUser: (name, age) => ({ name, age, gender: undefined }),
  throwError() {
    throw new Error('abcd');
  },
};

export default fn;
