import pathToRegexp from 'path-to-regexp';

class Route {
  constructor({path}) {
    this.path = path;
    this.generate = pathToRegexp.compile(path);
  }
}

export default Route;
