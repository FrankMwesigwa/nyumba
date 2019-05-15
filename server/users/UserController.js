import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import User from './User';

export const getUsers = (req, res) => {
  User.find().exec((err, users) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Users Fetch Failed' });
    }
    return res.json({ 'success': true, 'message': 'Users fetched successfully', users });
  });
}

export const addUser = (req, res) => {
  const newUser = new User(req.body);
  newUser.save((err, user) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'User Creation Failed' });
    }
    return res.json({ 'success': true, 'message': 'User added successfully', user });
  })
}

export const registerUser = (req, res) => {
  User.findOne({ email: req.body.email }).then(user => {
    if (user) {
      return res.status(400).json({ email: "Email already exists" });
    }
  })

  const newUser = new User({
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    password: req.body.password
  });

  // Hash password before saving in database
  bcrypt.genSalt(10, (err, salt) => {
    bcrypt.hash(newUser.password, salt, (err, hash) => {
      if (err) throw err;
      newUser.password = hash;
      newUser
        .save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    });
  });
}

export const loginUser = (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ message: "Incorrect Email Address Entered" });
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {id: user.id, email: user.email};

        jwt.sign(
          payload, process.env.secretOrKey,
          {expiresIn: 31556926 },
          (err, token) => res.json({success: true, token: "Bearer " + token})
        );
      } else {
        return res
          .status(400)
          .json({ message: "Incorrect Password Entered" });
      }
    });
  });
}

export const updateUser = (req, res) => {
  User.findOneAndUpdate({ _id: req.body.id }, req.body, { new: true }, (err, user) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error', 'error': err });
    }
    console.log(user);
    return res.json({ 'success': true, 'message': 'Updated successfully', user });
  })
}

export const getUser = (req, res) => {
  User.find({ _id: req.params.id }).exec((err, todo) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }
    if (todo.length) {
      return res.json({ 'success': true, 'message': 'Todo fetched by id successfully', todo });
    }
    else {
      return res.json({ 'success': false, 'message': 'Todo with the given id not found' });
    }
  })
}

export const deleteUser = (req, res) => {
  User.findByIdAndRemove(req.params.id, (err, todo) => {
    if (err) {
      return res.json({ 'success': false, 'message': 'Some Error' });
    }
    return res.json({ 'success': true, 'message': todo.todoText + ' deleted successfully' });
  })
}