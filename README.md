# Personal website and blog of Viktor Nyblom

This repository contains the source code for [nyblom.io](https://nyblom.io).

## Tech stack

This site is built using [React](https://reactjs.org/), [Next](https://nextjs.org/), [Tailwind CSS](https://tailwindcss.com/) and [TypeScript](https://www.typescriptlang.org/). The site uses [Nhost](https://nhost.io/) to store and show the current read count for each blog post.

The site is hosted on [Vercel](https://vercel.com/).


## Note on file structure

All Typescript lives in the `src` folder, as this gives a cleaner overview of everything in the repo.

Blog post mdx files are placed under `posts`.

Any page content that is not a blog post is placed under `content`.

As per Nextjs documentation, the `public` folder is kept in the root of the project.

## Getting started

Step 1: Clone repository

```bash
git clone git@github.com:Qw4z1/nyblom-io.git
```

Step 2: Install dependencies

```bash
yarn
```

Step 3: Add Nhost url

  1. Go to Nhost and [signup](https://app.nhost.io/signup)
  2. Get your Nhost subdomain
  3. Create an `.env.local` file with your Nhost Url:

```bash
echo "https://[your subdomain here].nhost.run/v1/graphql" > .env.local
```

Step 4: Start development server

```bash
yarn dev
```
