# ember-lookup
[![Latest NPM release][npm-badge]][npm-badge-url]
[![TravisCI Build Status][travis-badge]][travis-badge-url]
[![Ember Observer Score][ember-observer-badge]][ember-observer-url]

[npm-badge]: https://img.shields.io/npm/v/ember-lookup.svg
[npm-badge-url]: https://www.npmjs.com/package/ember-lookup
[travis-badge]: https://img.shields.io/travis/kturney/ember-lookup/master.svg
[travis-badge-url]: https://travis-ci.org/kturney/ember-lookup
[ember-observer-badge]: http://emberobserver.com/badges/ember-lookup.svg
[ember-observer-url]: http://emberobserver.com/addons/ember-lookup

This provides a helper that allows using `Ember.getOwner()#lookup from templates`.

## Installation

```sh
ember install ember-lookup
```

## Usage

### Lookup a service
By default, `ember-lookup` will lookup a service.
```hbs
{{#with (lookup 'my-service') as |myService|}}
  {{! use service }}
{{/with}}
```

### Lookup anything registered with ember
The type of the object to lookup may be provided as the second parameter.
```hbs
{{#with (lookup 'environment' 'config') as |config|}}
  {{! use config }}
{{/with}}
```

```hbs
{{#with (lookup 'foo' 'bar') as |foo|}}
  {{! use foo of type bar }}
{{/with}}
```

### If using [ember-let](https://github.com/thefrontside/ember-let)
```hbs
{{let myService=(lookup 'my-service')}}
```

## Credit where credit is due
Basically copied from [this issue](https://github.com/rtablada/ember-with-service/issues/2) by [rwjblue](https://github.com/rwjblue) in [ember-with-service](https://github.com/rtablada/ember-with-service).

## Running Tests

* `npm test` (Runs `ember try:each` to test your addon against multiple Ember versions)
* `ember test`
* `ember test --server`

## Building

* `ember build`

For more information on using ember-cli, visit [https://ember-cli.com/](https://ember-cli.com/).
