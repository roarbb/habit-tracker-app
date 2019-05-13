const { forwardTo } = require('prisma-binding');

const Query = {
  habits: forwardTo('db'),
};

module.exports = Query;
