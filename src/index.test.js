const greeter = require('.');

describe('Greeter', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should greet', () => {
    greeter.greet();
    expect(console.log).toHaveBeenCalledWith('Hello!');
  });
});
