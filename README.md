This is a starter template.

Copy or Fork this repo.

install dependencies: `npm install`

To start the server use `npx wrangler dev`
This will allow you to test your Worker locally during development.
You will now be able to go to http://localhost:8787 to see your Worker running. Any changes you make to your code will trigger a rebuild, and reloading the page will show you the up-to-date output of your Worker.

Deploy your code to cloudflare.
Before deploying make sure you are logged in to your
cloudflare account, run: `npx wrangler login`

It will ask for permission, allow it
After that run: `npx wrangler deploy`
in terminal you will see a sub domain like: <YOUR_WORKER>.<YOUR_SUBDOMAIN>.workers.dev
This is where your worker is deployed, head over to this and you can see the output.

To verify if you are logged in, run: `npx wrangler whoami`

Wrangler is a Command line tool for developing cloudflare workers. It allows you to build and test workers
from your own environment, for more information head over to: https://github.com/cloudflare/workers-sdk
