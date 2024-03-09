import rootTemplate from "./root.component.html";

angular.module("app").component("root", {
  template: rootTemplate,
  controller: function () {
    this.$onInit = function () {
      console.log("Root component initialized");
    };
  },
});
