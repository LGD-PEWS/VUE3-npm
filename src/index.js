//index.js
import bigbutton from "./components/bigbutton.vue"; // 引入封装好的组件
import biginput from "./components/biginput.vue"; // 引入封装好的组件

export { bigbutton, biginput }; //实现按需引入*

const components = [bigbutton, biginput];
const install = function (App, options) {
  components.forEach((component) => {
    App.component(component.name, component);
  });
};
export default { install }; // 批量的引入*
