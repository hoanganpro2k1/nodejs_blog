import { mongooseToObject } from '../../utils/mongoose.js';
import Course from '../models/Course.js';

class CourseController {
  // [GET] /courses/:slug
  async show(req, res) {
    const course = await Course.findOne({ slug: req.params.slug }).exec();
    res.render('courses/show', { course: mongooseToObject(course) });
  }

  // [GET] /courses/create
  async create(req, res) {
    res.render('courses/create');
  }

  // [POST] /courses/store
  async store(req, res) {
    try {
      const formData = req.body;
      formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
      await new Course(req.body).save();
      res.redirect('/');
    } catch (error) {
      console.log(error);
    }
  }

  // [GET] /courses/:id/edit
  async edit(req, res, next) {
    try {
      const course = await Course.findById(req.params.id).lean();
      res.render('courses/edit', { course });
    } catch (error) {
      next(error);
    }
  }

  // [PUT] /courses/:id
  update(req, res, next) {
    Course.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect('/me/stored/courses'))
      .catch(next);
  }
}

export default new CourseController();
