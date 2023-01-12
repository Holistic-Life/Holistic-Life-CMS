module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'smtp.mailersend.net'),
        port: env('SMTP_PORT', 587),
        auth: {
          user: "MS_2C85TY@holistic-life.dev",
          pass: "EFj5aRHRihZ2WLhj",
        },
      },
      settings: {
        defaultFrom: 'support@holistic-life.dev',
        defaultReplyTo: 'support@holistic-life.dev',
      },
    },
  },
});
