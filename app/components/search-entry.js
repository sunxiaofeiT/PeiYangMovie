import Component from '@ember/component';

export default Component.extend({

    searchKeyWord : '',

    actions: {
        resetInput() {
            this.set(this.searchKeyWord, '');
        },
        searchButton() {
            if(this.searchKeyWord === ''){
                console.log('填写搜索关键字');
            }else {
                console.log('搜索关键字：',this.searchKeyWord);
            }
        }
    } 
});
