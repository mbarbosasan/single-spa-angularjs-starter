import ngRoute from "angular-route";
import angular from "angular";
import "single-spa-angularjs/lib/parcel";

const appAngular = angular.module("app", [ngRoute, "single-spa-angularjs"]);

appAngular.config([
  "$locationProvider",
  "$routeProvider",
  function ($locationProvider, $routeProvider) {
    $routeProvider
      .when("/home", {
        template: "<home />",
      })
      .when("/about", {
        template: "<about />",
      })
      .otherwise({ redirectTo: "/home" });
  },
]);
export default appAngular;
