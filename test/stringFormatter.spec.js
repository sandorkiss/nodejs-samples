const formatter = require('../src/stringFormatter');

test.each(['T0003', 't0003', '3'])
('should return "T0003" for input: %s', (input) => {
  // when:
  expect(formatter(input)).toBe('T0003');
});
