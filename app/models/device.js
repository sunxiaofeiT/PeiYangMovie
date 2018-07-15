import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    model: DS.attr('string'),
    buyTime: DS.attr('date'),
    useNumber: DS.attr('number'),
    state: DS.attr('string'),
    using: DS.attr('boolean'),
    desc: DS.attr('string'),
    image: DS.attr('string'),
});
