# BbApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.1.0.

## Issues

- Handling of the DOB. Unable to read/parse the date format correctly from the excel file.
- Table does not reflect the changes immediately when `0` is entered into the issue count filter. I was able to update the table by doing a mouseover on the table header. This issue is related to change detection since we are using OnPush strategy. An explicit call to `detectChanges()` OR `markForCheck()` might fix this.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Screenshot

![Overview of the application](screenshot.png)
