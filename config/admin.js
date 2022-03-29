module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '02e7af1b6f237cd9c6e96061360f3586'),
  },
});
