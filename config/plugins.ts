module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('SMTP_HOST', 'mail.smtp2go.com'),
        port: env('SMTP_PORT', 2525),
        auth: {
          user: env('SMTP_USERNAME', ''),
          pass: env('SMTP_PASSWORD', ''),
        },
      },
      settings: {
        defaultFrom: 'support@holistic-life.dev',
        defaultReplyTo: 'support@holistic-life.dev',
      },
    },
  },
});
