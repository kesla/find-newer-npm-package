import test from 'tapava';
import find from './lib';

test('find() empty', t => {
  const input = [];
  const packages = [];
  const actual = find(input, packages);
  const expected = [];
  t.deepEqual(actual, expected);
});

test('find() simple ~', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.0.2', '1.0.1', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.0.2', '2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() simple ^', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.1.0', '1.2.0', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.0.0', '1.2.0', '2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() simple ^ & ~', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.0.1', '1.0.2', '1.1.0', '1.2.0', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.0.2', '1.2.0', '2.0.0'];
  t.deepEqual(actual, expected);
});
