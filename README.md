# ministarter

> Starting configuration for fast and static web projects

Using
- **Gulp** as a _task manager_
- **Pug** for _templates_
- **PostCSS** to process _styles_
- **Babel** to transpile _scripts_
- **BrowserSync** to view live _results_


### Main steps
```
$ git clone https://github.com/elrumordelaluz/ministarter.git
```
_Clone the repository_


```
$ npm i
```
_Install node modules_


```
$ npm run watch
```
_Watch when modifying files, alias of `$ gulp watch`_




### Aditional scripts
```
$ npm start
```
_Alias of `$ gulp`_

```
$ npm run clean
```
_Cleans `dist/` folder_


```
$ npm run deploy

```
_Build and push `dist/` folder into gh-pages [*]_

[*]: https://gist.github.com/cobyism/4730490
