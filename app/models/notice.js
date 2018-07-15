import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    content: DS.attr('string'),
    time: DS.attr('date',{
        defaultValue() {
            return new Date();
        }
    }),
    author: DS.attr('string'),
    image: DS.attr('string'),
});
