const sum = require('./sum');

test('Hello World = Hello World', () => {
  expect(sum("Hello World")).toBe("Hello World");
});
