const TrackConfig = require('track-config');

TrackConfig.configure((c) => {
  c.loader = ((module) => require(`../app/${module}.js`));
});
