import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: '十佳青年活动',
      type: "活动", // 1消息，2申请设备
      isNew: false,
      isActivity: true,
      isAskDevice: false,
      content: '时间：本周五晚上6点开始，大约持续2个小时',
      device: '',
      reason: '',
      from: '孙鹏飞',
      to: '',
      time: '2018-07-24 19:00',
    }, ]
  }
});
