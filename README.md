# Next.js Mongo Passport Template

This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app). The purpose of this application is to serve as a starting template for building a Next.js [MERN application](https://www.mongodb.com/resources/languages/mern-stack) using [Passport.js local-strategy](https://www.passportjs.org/packages/passport-local/) for authentication.

## Getting Started

The first step to take when getting started is to install and start up the [nextjs-mongo-passport-template-server](https://github.com/nick-ramsay/nextjs-mongo-passport-template-server) application. This server is the backend for the application and will be necessary for this application to function.

After starting the server, return to this `nextjs-mongo-passport-template` application and run `npm install` to install node packages. Once this is done, you can run this Next.js app on the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

The application consists of six pages:
- Login page: `login` directory
- Create Account Request page: `create-account-request` directory
- Create Account page: `create-account` directory
- Reset Password Request page: `reset-password-request` directory
- Reset Password page: `reset-password` directory
- Home page: `page.tsx` file

You'll be brought to the Login page first. In order to use the application, you'll want to click the `Create Account` link where you can request an email verification code via the Create Account Request page which will be sent to your email. You'll then be redirected to the Create Account page where you can create your account and set your password. Once you do this, you'll be redirected to the Login page where you can login to view the home page of the portal.

You'll also see that a `Reset Password` link exists for resetting your password if necessary.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

If you wish to create a production build of this application, you'll need to run `npm run build` to generate the build. Once complete, you can run the production build with the `npm start` command.


## Deployed on Vercel and Heroku

You can visit a deployed version of this application at https://www.nextjs-mongo-passport-template.com. This frontend client is deployed on [Vercel](https://vercel.com/).

The backend server for this application is deployed on Heroku at https://api.nextjs-mongo-passport-template.com/.

Note that in order for the the server-side Passport.js authetication to work properly, it's important that the server which generates the Passport cookie shares the same domain name as the frontend application where the cookie is stored. This is why the host for both uses `nextjs-mongo-passport-template.com`.
