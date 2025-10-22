const Character = require('../character');

test('Tanjiro promotes from Mizunoto to Mizunoe', () => {
  const tanjiro = new Character("Tanjiro", "Mizunoto");
  expect(tanjiro.promote()).toBe("Mizunoe");
});

test('Hashira rank cannot go higher', () => {
  const giyu = new Character("Giyu", "Hashira");
  expect(giyu.promote()).toBe("Hashira");
});
