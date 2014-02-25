// this is just a proof of concept. As per @mizzao's request in IR#382

SinglePageLocation = function() {
  this._history = [{
    path: location.href,
    state: {}
  }];
  this._index = 0;
  this._dep = new Deps.Dependency;
}

SinglePageLocation.prototype.set = function(path, options) {
  options = options || {};
  
  if (! options.replaceState)
    this._index += 1;
  
  this._history[this._index] = {
    path: path,
    state: options.state || {}
  }
  
  this._dep.changed();
}

SinglePageLocation.prototype.path = function(path, options) {
  this._dep.depend();
  
  return this._history[this._index].path;
}

SinglePageLocation.prototype.back = function() {
  if (this._index > 0) {
    this._index -= 1;
    this._dep.changed();
  }
}

SinglePageLocation.prototype.start = function() {}

// auto setup the router
Router.configure({
  location: new SinglePageLocation
});