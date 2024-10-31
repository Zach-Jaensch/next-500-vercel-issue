## Nextjs 500 page issue on vercel

This issue is a minimum reproduction of our companies app.

On the main page there are 2 links that go to a dynamic server rendered page.

The first link "Page that throws" with bring you to the defined 500 error page (as it throws in the getServerSideProps)

The second link "Page that rewrites to a throw" will be rewritten in the middle to the same page as link 1.

Locally in a production build, they will both show the defined 500 page.

In vercel the second link will show the vercel "This Serverless Function has crashed" error page.

This only occurs when the basePath is configured in `next.config.ts` file.

## Steps to reproduce

Deploy app to vercel.
Go to <VERCEL_DEPLOYMENT_URL>/library
Click on the second link
