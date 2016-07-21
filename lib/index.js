import Set from 'es6-set';
import arrayFrom from 'array-from';
import {satisfies, valid} from 'semver';

module.exports = (_input, packages) => {
  const result = new Set();
  const input = _input.filter(valid);
  const inputSet = new Set(input);

  input.forEach(version => {
    const tildeVersion = `~${version}`;
    const hatVersion = `^${version}`;
    const tildePackages = [];
    const hatpackages = [];
    packages.forEach(pkg => {
      if (satisfies(pkg, tildeVersion)) {
        tildePackages.push(pkg);
      }
      if (satisfies(pkg, hatVersion)) {
        hatpackages.push(pkg);
      }
    });
    result.add(tildePackages.sort().reverse()[0]);
    result.add(hatpackages.sort().reverse()[0]);
  });
  result.add(packages.sort().reverse()[0]);

  return arrayFrom(result)
    .filter(version => version && !inputSet.has(version));
};
