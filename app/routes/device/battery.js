import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      name: '摄像机电池2',
      model: 'sony sec1',
      buyTime: '2015-09-07',
      useNumber: '5',
      state: '良好',
      using: true,
      desc: '小型摄像机，轻便',
      image: 'https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=4087766285,4126440352&fm=27&gp=0.jpg',
    }, ]
  }
});
