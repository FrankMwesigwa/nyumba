import mongoose from 'mongoose';
import userSchema from './UserSchema';

const User = mongoose.model('User', userSchema);

class userController {
  static getPosts(req, res) {
    User.find({}, (error, users) => {
      if (error) { res.json(error); }
      res.json(users);
    });
  }

  static createPost(req, res) {
    const newUser = new User(req.body);
    newUser.save((error, user) => {
      if (error) { res.json(error); }
      res.json(user);
    });
  }

  static getOnePost(req, res) {
    User.findById(req.params.id, (error, user) => {
      if (error) { res.json(error); }
      res.json(user);
    });
  }

  static updatePost(req, res) {
    User.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true }, (error, user) => {
      if (error) { res.json(error); }
      res.json(user);
    });
  }

  static deletePost(req, res) {
    User.remove({ _id: req.params.id }, (error, user) => {
      if (error) { res.json(error); }
      res.json(user);
    });
  }
}

export default userController;
