import { multipleMongooseToObject } from '../../utils/mongoose.js';
import Course from '../models/Course.js';

class SiteController {
  // [GET] /
  async index(req, res, next) {
    try {
      // Use lean() or multipleMongooseToObject
      const courses = await Course.find({});
      res.render('home', { courses: multipleMongooseToObject(courses) });
    } catch (error) {
      next(error);
    }
  }

  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}

export default new SiteController();
