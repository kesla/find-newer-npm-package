import test from 'tapava';
import find from './lib';

test('find() empty packages', t => {
  const input = ['1.0.0'];
  const packages = [];
  const actual = find(input, packages);
  const expected = [];
  t.deepEqual(actual, expected);
});

test('find() empty input', t => {
  const input = [];
  const packages = ['1.0.0', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() ~', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.0.2', '1.0.1', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.0.2', '2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() ^', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.1.0', '1.2.0', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.2.0', '2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() ^ and ~', t => {
  const input = ['1.0.0'];
  const packages = ['1.0.0', '1.0.1', '1.0.2', '1.1.0', '1.2.0', '2.0.0'];
  const actual = find(input, packages);
  const expected = ['1.0.2', '1.2.0', '2.0.0'];
  t.deepEqual(actual, expected);
});

test('find() multiple input versions', t => {
  const input = ['1.0.0', '2.0.0'];
  const packages = ['1.0.0', '1.0.1', '1.0.2', '1.1.0', '1.2.0', '2.0.0', '2.0.1'];
  const actual = find(input, packages);
  const expected = ['1.0.2', '1.2.0', '2.0.1'];
  t.deepEqual(actual, expected);
});
