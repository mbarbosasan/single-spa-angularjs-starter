import ngRoute from "angular-route";

const appAngular = angular.module("app", ["ngRoute"]);

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
