import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    age: DS.attr('number'),
    grade: DS.attr('number'),
    colloge: DS.attr('string'),
    major: DS.attr('string'),
    passwd: DS.attr('string'),
    email: DS.attr('string'),
    admin: DS.attr('boolean'),
});
