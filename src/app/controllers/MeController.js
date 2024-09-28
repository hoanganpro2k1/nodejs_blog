import Course from '../models/Course.js';

class MeController {
  // [GET] /stored/courses
  async storedCourses(req, res, next) {
    try {
      const courses = await Course.find({}).lean();
      res.render('me/stored-courses', { courses });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /stored/news
  async storedNews(req, res) {
    res.send('storedNews');
  }
}

export default new MeController();
