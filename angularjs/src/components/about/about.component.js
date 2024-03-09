import aboutTemplate from "./about.component.html";
import "./about.component.css";

angular.module("app").component("about", {
  template: aboutTemplate,
  controller: function () {
    this.$onInit = function () {
      console.log("About component initialized");
    };
  },
});
