import homeTemplate from "./home.component.html";

angular.module("app").component("home", {
  template: homeTemplate,
  controller: function () {
    this.$onInit = function () {
      console.log("Home component initialized");
    };
  },
});
