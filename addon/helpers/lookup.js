import Ember from 'ember';

const {
  assert,
  getOwner,
  Helper,
  typeOf
} = Ember;

export default Helper.extend({
  compute([ name, type = 'service' ]) {
    assert('lookup requires a name string as its first argument', name && typeOf(name) === 'string');

    const result = getOwner(this).lookup(`${type}:${name}`);
    assert(`"${type}:${name}" does not exist`, result);
    return result;
  }
});
