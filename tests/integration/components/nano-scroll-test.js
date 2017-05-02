import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('nano-scroll', 'Integration | Component | nano scroll', {
  integration: true
});

test('it renders', function(assert) {

  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  this.render(hbs`{{nano-scroll}}`);

  assert.equal(this.$().text().trim(), '');

  // Template block usage:
  this.render(hbs`
    {{#nano-scroll}}
      template block text
    {{/nano-scroll}}
  `);

  assert.equal(this.$().text().trim(), 'template block text');
});

test('it should has className', function(assert) {
  this.render(hbs`{{#nano-scroll}}Hello world{{/nano-scroll}}`);

  assert.ok(this.$().children(0).hasClass('nano'));
  assert.equal(this.$().find('.nano-content').length, 1);
});

test('it should extend namespace', function(assert) {
  this.render(hbs`{{#nano-scroll}}Hello world{{/nano-scroll}}`);

  assert.ok(this.$('.nano').nanoScroller);
});
