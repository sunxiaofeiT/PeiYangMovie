export default function () {

  // this.namespace = "/api";

  this.get('/passages?author=Veruca%20Salt', function () {
    return {
      data: [{
        type: 'passage',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          author: '孙鹏飞',
          time: '',
          content: '这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, ]
    }
  })

  this.get('/passages', function () {
    return {
      data: [{
        type: 'passage',
        id: 'grand-old-mansion',
        attributes: {
          title: 'Grand Old Mansion',
          author: 'Veruca Salt',
          time: '2018-07-13 15:49',
          content: '这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章',
          image: 'https://upload.wikimedia.org/wikipedia/commons/c/cb/Crane_estate_(5).jpg'
        }
      }, {
        type: 'passage',
        id: 'urban-living',
        attributes: {
          title: 'Urban Living',
          author: '孙鹏飞',
          time: '',
          content: '这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章',
          image: 'https://upload.wikimedia.org/wikipedia/commons/0/0e/Alfonso_13_Highrise_Tegucigalpa.jpg'
        }
      }, {
        type: 'passage',
        id: 'downtown-charm',
        attributes: {
          title: 'Downtown Charm',
          author: 'Violet Beauregarde',
          time: '',
          content: '这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章这是一篇文章',
          image: 'https://upload.wikimedia.org/wikipedia/commons/f/f7/Wheeldon_Apartment_Building_-_Portland_Oregon.jpg'
        }
      }]
    };
  });

  this.post('/passage', (schema, request) => {
    const attrs = JSON.parse(request.requestBody).passage;

    return schema.passages.create(attrs);
  });

  this.get('/passage/:id', (schema, request) => {
    var id = request.params.id;
    return schema.passages.find(id);
  })
}
