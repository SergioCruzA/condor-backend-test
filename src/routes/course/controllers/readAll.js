
const courseInterface = require('../../../interfaces/course')

module.exports = async (req, res, next) => {
  let query = {};
  // query sent in the route
  let { limit, offset, name } = req.query;

  // Parse limit and offset to number
  limit = Number(limit) || 10;
  offset = Number(offset) || 0;

  // Validate if name exists, add for query in find
  if (name) query.name = new RegExp(`${name}`, 'i');

  // Call readAll interfaces for get courses
  const resp = await courseInterface.readAll({ limit, offset, query });

  // Response server with the data
  res.json({
    offset: resp.offset,
    limit: resp.limit,
    next: resp.nextCursor,
    items: resp.data,
  });
}