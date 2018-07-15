import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
        name: '孙鹏飞',
        age: 21,
        grade: 3,
        collage: '软件学院',
        major: '软件工程',
        passwd: '123456',
        email: '1780132371@qq.com',
        admin: true,
        desc: '我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友',
        image: 'https://ss2.bdstatic.com/70cFvnSh_Q1YnxGkpoWK1HF6hhy/it/u=3699219497,1413039697&fm=27&gp=0.jpg',
      },
      {
        name: '张三',
        age: 21,
        grade: 3,
        collage: '软件学院',
        major: '软件工程',
        passwd: '123456',
        email: '1780132371@qq.com',
        admin: false,
        desc: '我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友',
        image: 'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=1031893560,2135917576&fm=27&gp=0.jpg',
      },
      {
        name: '李四',
        age: 21,
        grade: 3,
        collage: '软件学院',
        major: '软件工程',
        passwd: '123456',
        email: '1780132371@qq.com',
        admin: false,
        desc: '我需要三件东西：爱情友谊和图书。然而这三者之间何其相通！炽热的爱情可以充实图书的内容，图书又是人们最忠实的朋友',
        image: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=580080393,299327986&fm=27&gp=0.jpg',
      },
    ];
  }
});
