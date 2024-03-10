## Single-spa-angularJS starter

This is a starter for [SingleSPA](https://single-spa.js.org/) that aims to help other devs who are trying to update
legacy apps that uses AngularJS, especially in the case where you can't simple just write all the features again.

This isn't supposed to be a definitive architecture, but a starting point for you to build your own, feel free to modify it as you need.

In this project we have:
- AngularJS with Webpack
- Prefix to avoid CSS styles being applied to components outside of AngulaRJS.
- AngularJS rendering a Parcel that contains Angular 15 with standalone components. (Checkout to the branch 'angularjs-with-parcels')

## Getting Started

1. Clone this repository.
2. In the root directory run `pnpm install`.
3. Run `pnpm start` to start root config.
4. Change to the `angularjs` directory and run `pnpm install` again.
5. Run `pnpm run serve` to start the AngularJS app.
6. Go to `http://localhost:9000/` to see the app running.
