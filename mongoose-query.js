import mongoose from 'mongoose';

// how to use : $or
const Model = mongoose.model('modelName');
Model.findOne({
  line,
  $or: [{
    status: 'running'
  }, {
    status: 'waiting'
  }, {
    status: 'preview'
  }]
});

// how to use : nested populate
Model.find().populate({
  path: 'line', // line is a field of Model ref to Line
  select: ['id', 'department'], // department is a field of Line ref to Department
  populate: {
    path: 'department',
    select: ['id']
  }
});
