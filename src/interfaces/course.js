// Require course model
const courseModel = require('../models/course');

// Interface for read all courses
const readAll = async({ limit = 10, offset = 0, query = {} }) => {
  let nextCursor;
  // Find courses
  const courses = await courseModel.find(query).skip(offset).limit(limit);

  // Define the new offset
  const newOffset = offset + limit;

  // Validate if there are more course to read
  const nextCourse = await courseModel.findOne(query).skip(newOffset).limit(1);
  console.log(nextCourse);

  // Define the next query for request more courses
  if (nextCourse) nextCursor = `/courses?limit=10&offset=${newOffset}`;

  // Return data 
  return {
    data: courses,
    limit,
    offset,
    nextCursor,
  }
}

module.exports = {
  readAll,
}