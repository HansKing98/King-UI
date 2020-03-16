import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

// Vue本身有$on和$emit的机制

Vue.prototype.$dispatch = function (eventName, data) {
  // 想上传递，一直不停的获取$parent
  let parent = this.$parent
  while (parent) {
    parent.$emit(eventName, data)
    parent = parent.$parent
  }
}
Vue.prototype.$boardcast = function (eventName, data) {
  // 递归通知所有的子元素
  boardcast.call(this, eventName, data)
}
function boardcast(eventName, data) {
  this.$children.forEach(child => {
    // 每一个字组件
    child.$emit(eventName, data)
    if (child.$children.length) {
      boardcast.call(child, eventName, data)
    }
  })
}

new Vue({
  render: h => h(App),
}).$mount('#app')
