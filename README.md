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

Step 3: Add API_URL and token.

This project uses a custom API that I've built. You'll find the source code for that at [this url](https://github.com/Qw4z1/read-tracker).

The API is dockerised, but note that you'll also need a MySQL database to connect to. If you need a suggestion, check out [Planetscale](https://planetscale.com/).

Step 4: Add .env file

At the root of the project add a file called .env with the following keys.

NOTION_TOKEN=
NOTION_DB_ID=
NEXT_PUBLIC_ROOT_URL=<http://localhost:3000>
CONVERTKIT_API_KEY=
NEXT_PUBLIC_API_URL=<url to the read-tracker API>
NEXT_PUBLIC_API_TOKEN=<token that you set for read-tracker API>

Step 5: Run local build

```bash
yarn dev
```
