const greeter = require('.');

describe('Greeter', () => {
  beforeEach(() => {
    console.log = jest.fn();
  });

  it('should greet', () => {
    greeter.greet();
    expect(console.log).toHaveBeenCalledWith('Hello!');
  });

  it('should optionally pass name to greet', () => {
    const name = 'Rafael';
    greeter.greet(name);
    expect(console.log).toHaveBeenCalledWith(`Hello, ${name}!`);
  });
});
