angular.module("app").component("ngParcel", {
  template: `
    <p>Angular 2+ component:</p>
    <single-spa-parcel
      parcel-config="parcelConfig"
      ></single-spa-parcel>
  
  
  `,
  controller: [
    "$scope",
    function ($scope) {
      $scope.parcelConfig = () => System.import("@my-org/angular2");
    },
  ],
});
