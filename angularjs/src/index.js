import singleSpaAngularJS from "single-spa-angularjs";
import angular from "angular";
import appAngular from "./app.module";

import "./components/components.all";

const ngLifecycles = singleSpaAngularJS({
  angular: angular,
  mainAngularModule: "app",
  ngRoute: true,
  preserveGlobal: false,
  template: "<root />",
});

export const bootstrap = ngLifecycles.bootstrap;
export const mount = ngLifecycles.mount;
export const unmount = ngLifecycles.unmount;
