Package.describe({
  summary: "A proof of concept - a 'single page app' location for IR"
});

Package.on_use(function (api, where) {
  api.use('deps');
  
  api.add_files('iron-location-single-page.js', 'client');
  
  api.use('iron-router');
  api.export('SinglePageLocation', 'client');
});