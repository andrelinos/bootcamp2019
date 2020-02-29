const { format } = require('date-fns');
const bcrypt = require('bcryptjs');

module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Andrelino',
          email: 'andrelino@silva.com',
          provider: false,
          password_hash: bcrypt.hashSync('123456', 8),
          created_at: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"),
          updated_at: format(new Date(), "yyyy-MM-dd'T'HH:mm:ssxxx"),
        },
      ],
      {}
    );
  },

  down: () => {},
};
