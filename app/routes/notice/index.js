import Route from '@ember/routing/route';

export default Route.extend({
    // 重定向到了 notice.all 路由
    // beforeModel() {
    //     this.transitionTo('notice.all');
    //   }

    model() {
        return this.get('store').findAll('passage');
    }
});
