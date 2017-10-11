import { expect } from 'chai';
import { describe, it } from 'mocha';
import { setupTest } from 'ember-mocha';
import Service from '@ember/service';

describe('Unit | Helper | lookup', function() {
  setupTest('helper:lookup');

  it('should default to injecting services', function() {
    this.register('service:hello', Service.extend({
      isHello: true
    }));

    let result = this.subject().compute([ 'hello' ]);
    expect(result, 'service:hello').to.exist;
    expect(result, 'service:hello').to.have.property('isHello', true);
  });

  it('should require an object name', function() {
    expect(() => this.subject().compute([])).to.throw('lookup requires a name string as its first argument');
  });

  it('should require object name to be a string', function() {
    expect(() => this.subject().compute([ 1024 ])).to.throw('lookup requires a name string as its first argument');
  });

  it('should allow looking up arbitrary types', function() {
    this.register('foo:bar', Service.extend({
      isFooBar: true
    }));

    let result = this.subject().compute([ 'bar', 'foo' ]);
    expect(result, 'foo:bar').to.exist;
    expect(result, 'foo:bar').to.have.property('isFooBar', true);
  });

  it('should assert that the requested item exists', function() {
    expect(() => this.subject().compute([ 'bar', 'foo' ])).to.throw(`"foo:bar" does not exist`);
  });

  it('should pass through lookup options', function() {
    this.register('service:hello', Service.extend({
      isHello: true
    }));

    const singleton1 = this.subject().compute([ 'hello' ], { singleton: true });
    const singleton2 = this.subject().compute([ 'hello' ], { singleton: true });

    expect(singleton1, 'singleton1').to.equal(singleton2, 'singleton2');

    const nonsingleton1= this.subject().compute([ 'hello' ], { singleton: false });
    const nonsingleton2= this.subject().compute([ 'hello' ], { singleton: false });

    expect(nonsingleton1, 'nonsingleton1').to.not.equal(nonsingleton2, 'nonsingleton2');
  });
});

