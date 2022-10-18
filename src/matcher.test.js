import fn from './fn';

test('1은 1이다.', () => {
  expect(1).toBe(1);
});

test('2더하기 3은 5다.', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('3더하기 3은 5가 아니다', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});

test('생성된 유저의 name은 Hajun, age는 26이다.', () => {
  expect(fn.makeUser('Hajun', 26)).toEqual({ name: 'Hajun', age: 26 });
});

test('생성된 유저의 name은 Hajun, age는 26, gender는 undefined이다.', () => {
  expect(fn.makeUser('Hajun', 26)).toStrictEqual({ name: 'Hajun', age: 26, gender: undefined });
});

test('null은 null이다.', () => {
  expect(null).toBeNull();
});

test('undefined는 undefined이다.', () => {
  expect(undefined).toBeUndefined();
});

test('0은 undefined가 아니다.', () => {
  expect(0).toBeDefined();
});

test('빈 배열은 truthy한 값이다.', () => {
  expect([]).toBeTruthy();
});

test('0은 falsy한 값이다.', () => {
  expect(0).toBeFalsy();
});

test('3 + 3은 4보다 크다', () => {
  expect(fn.add(3, 3)).toBeGreaterThan(4);
});

test('3 + 3은 6보다 크거나 같다', () => {
  expect(fn.add(3, 3)).toBeGreaterThanOrEqual(6);
});

test('3 + 3은 7보다 작다', () => {
  expect(fn.add(3, 3)).toBeLessThan(7);
});

test('3 + 3은 6보다 작거나 같다', () => {
  expect(fn.add(3, 3)).toBeLessThanOrEqual(6);
});

test('0.1 더하기 0.2는 0.3이다.', () => {
  expect(fn.add(0.1, 0.2)).toBeCloseTo(0.3);
});

test('Hello World에 소문자e 문자열이 포함되어 있다.', () => {
  expect('Hello World').toMatch(/e/);
});

test('userList 배열에 Mike라는 문자열이 포함되어 있다.', () => {
  const userList = ['Tom', 'Jane', 'Mike'];
  expect(userList).toContain('Mike');
});

test('fn.throwError 함수에서 에러가 트리거 된다. 에러메세지는 abcd이다.', () => {
  expect(fn.throwError).toThrow('abcd');
});
