import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      title: '申请个设备',
      type: "申请设备", // 1消息，2申请设备
      isNew: false,
      isActivity: false,
      isAskDevice: true,
      content: '',
      device: ['摄像机', '单反', '摄像机架子'],
      reason: '拍摄十佳青年活动',
      from: '孙鹏飞',
      to: '',
      time: '2018-07-24 19:00',
    }, ]
  }
});
