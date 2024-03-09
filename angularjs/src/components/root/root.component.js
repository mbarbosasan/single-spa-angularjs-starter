import rootTemplate from "./root.component.html";
import "./root.style.css";

angular.module("app").component("root", {
  template: rootTemplate,
  controller: function () {
    this.$onInit = function () {
      console.log("Root component initialized");
    };
  },
});
