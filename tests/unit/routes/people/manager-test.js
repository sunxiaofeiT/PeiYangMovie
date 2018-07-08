import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | people/manager', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:people/manager');
    assert.ok(route);
  });
});
