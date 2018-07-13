import DS from 'ember-data';

export default DS.Model.extend({
    id: DS.attr(),
    title: DS.attr('string'),
    content: DS.attr('string'),
    time: DS.attr('date'),
    author: DS.attr('string',{
        defaultValue() {
            return new Date();
        }
    }),
});
