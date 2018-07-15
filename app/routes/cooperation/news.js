import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: 'nihao',
      type: "消息", // 1消息，2申请设备
      isNew: true,
      isActivity: false,
      isAskDevice: false,
      content: '下午3点办公室开会',
      device: '',
      reason: '',
      from: '孙鹏飞',
      to: '李四',
      time: '2018-07-24 19:00',
    }, ]
  }
});
