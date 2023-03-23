import Button from "./components/button.vue";
import pkg from "../package.json";
const components = [Button];

const install = function (Vue, opts = {}) {
  components.forEach((component) => {
    if (component.install) {
      Vue.use(component);
    } else if (component.name) {
      Vue.component(component.name, component);
    }
  });
};

export { Button };

export default {
  install,
  Button,
  version: pkg.version,
};
