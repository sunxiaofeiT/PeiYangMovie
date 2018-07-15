import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // return this.store.query('passage',{'author': 'Veruca Salt'});
    return [{
      title: 'Urban Living',
      author: '孙鹏飞',
      time: '2018-07-15 14:39',
      content: '这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章',
      image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg',
    }]
  }
});
