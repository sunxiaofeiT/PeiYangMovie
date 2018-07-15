import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr('string'),
    type: DS.attr('string'), // 1消息，2申请设备
    isNew: DS.attr('boolean'),
    isActivity: DS.attr('boolean'),
    isAskDevice: DS.attr('boolean'),
    content: DS.attr('string'),
    device: DS.attr(),
    reason: DS.attr('string'),
    from: DS.attr('string'),
    to: DS.attr('string'),
    time: DS.attr('date'),
});
