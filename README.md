This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

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

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.


---

### Bun development
This project is running with bun environment and package manager. However, you can use node.js if encounter environmental issues.
```bash
curl -fsSL https://bun.sh/install | bash # install with Linux
brew install oven-sh/bun/bun # install with MacOS 
scoop install bun # install with Windows

bun --version # check installation
bun use # use bun as default

npx tsx index.ts # check running environment
bun index.js # switch to bun environment
```

### Run
```bash
bun install
# build and run on ssr mode
bun run build
bun run start
# run in developer mode
bun dev
```
### Do testing with cypress and percy
To do cypress test, do the following:
```bash
# first start the frontend application
bun dev
# run cypress test
bun run cypress
```
1. To have percy, go to percy, create an account and set up
2. Get percy token and run the following script
3. This will upload percy screenshot to your account. After execution, check screenshots at percy platform

```bash
# add token to environment
export PERCY_TOKEN=<your percy token>
# start application
bun dev
# run percy along with cypress. 
bun run percy
```



### Live Demo 
Live demo at: [carousel-cv Vercel](https://carousel-cvvercel0.vercel.app/)


