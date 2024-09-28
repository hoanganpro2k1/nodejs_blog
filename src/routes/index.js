import coursesRoute from './courses.js';
import meRoute from './me.js';
import newsRoute from './news.js';
import siteRoute from './site.js';

function route(app) {
  app.use('/news', newsRoute);
  app.use('/courses', coursesRoute);
  app.use('/me', meRoute);
  app.use('/', siteRoute);
}

export default route;
