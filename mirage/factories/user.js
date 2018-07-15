import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
    name(i) {
        return 'user${i}';
    },
    age() {
        return faker.list.random('17','18','19','20','21','22');
    },
    grade() {
        return faker.list.random('1','2','3');
    },
    colloge() {
        return faker.list.random('软件学院', '外国语学院', '数学学院', '化学学院','自动化学院','计算机学院');
    },
    major() {
        return faker.lsit.random('软件工程', '英语专业', '数学专业', '化工专业', '自动化专业', '计算机啊专业');
    },
    passwd: 123456,
    email: '1780132371@qq.com',
    admin() {
        return faker.list.random('true','false');
    },
});
