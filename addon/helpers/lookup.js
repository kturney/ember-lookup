import { assert } from '@ember/debug';
import { getOwner } from '@ember/application';
import { typeOf } from '@ember/utils';
import Helper from '@ember/component/helper';

export default Helper.extend({
  compute([ name, type = 'service' ], hash) {
    assert('lookup requires a name string as its first argument', name && typeOf(name) === 'string');
    const owner = getOwner(this);
    const fullname = `${type}:${name}`;

    // Configs are funny because they are POJOs but not registered with { instantiate: false },
    // so we need to lookup configs like they are factories.
    // see for some discussion: https://discuss.emberjs.com/t/best-practices-accessing-app-config-from-addon-code/7006/6
    const result = type === 'config'
      ? owner.resolveRegistration(fullname)
      : owner.lookup(fullname, hash);

    assert(`"${fullname}" does not exist`, result);

    return result;
  }
});
