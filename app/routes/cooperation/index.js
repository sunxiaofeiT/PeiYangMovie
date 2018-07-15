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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      }, {
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
      },
      {
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
      },
      {
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
      },
    ]
  }
});
