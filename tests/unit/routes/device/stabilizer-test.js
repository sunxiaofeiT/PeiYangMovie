import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | device/stabilizer', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:device/stabilizer');
    assert.ok(route);
  });
});
