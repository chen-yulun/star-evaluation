// index.js
import Star from './Star.vue';

Star.install = Vue => Vue.component(Star.name, Star);  // 给Star组件配置install方法 

export default Star;