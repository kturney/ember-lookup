import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupComponentTest } from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';
import Ember from 'ember';

const {
  Service
} = Ember;

describe('Integration | Helper | lookup', function() {
  setupComponentTest('lookup', {
    integration: true
  });

  it('should be available in templates', function() {
    this.register('service:hello', Service.extend({
      isHello: true
    }));

    expect(() => this.render(hbs`{{lookup 'hello'}}`)).to.not.throw();
  });

  it('should be able to lookup configs', function() {
    this.render(hbs`{{lookup 'environment' 'config'}}`);
  });
});

