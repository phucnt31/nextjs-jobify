## Introduction

- This project is built using Next.js and incorporates various features to help manage a list of job opportunities for job hunting. It utilizes Prisma as the database to store job data, Render for hosting the database, Clerk for authentication, React Query for caching and fetching data, and the Recharts library for displaying monthly application and job status.

- Jobify: https://nextjs-jobify.netlify.app/

## Installation

- npm install

- Set up the necessary environment variables for Clerk, and Render.

```sh
- Clerk
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY =
CLERK_SECRET_KEY =

Put all the necessary environment variables in .env.local

- Render (put in .env file)
DATABASE_URL=
```

- npm run dev

## Create New Next.js Project

```sh
npx create-next-app@latest projectName
```

## Libraries

```sh
   npm install @clerk/nextjs@^4.27.7 @prisma/client@^5.7.0 @tanstack/react-query@^5.14.0 @tanstack/react-query-devtools@^5.14.0 dayjs@^1.11.10 next-themes@^0.2.1 recharts@^2.10.3
   npm install prisma@^5.7.0 -D
```

## shadcn/ui

[Docs](https://ui.shadcn.com/)

- follow Next.js install steps (starting with 2)
- open another terminal window (optional)

```sh
npx shadcn-ui@latest init
```

- setup Button

```sh
npx shadcn-ui@latest add button
```

[Icons](https://lucide.dev/guide/packages/lucide-react)

## Favicon and Logo

- [Favicon](https://favicon.io/)
- [Undraw](https://undraw.co/)
- [Logo - Figma File](https://www.figma.com/community/file/1319010578601364983/jobify-logo-public)

## Clerk Auth

- setup new app, configure fields - (or use existing)
- add ENV Vars
- wrap layout
- add middleware
- make '/' public
- restart dev server

layout.tsx

```tsx
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
```

middleware.tsx

```tsx
import { authMiddleware } from "@clerk/nextjs";

// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: ["/"],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
```

## Explore LinksDropdown Component

- [docs](https://ui.shadcn.com/docs/components/dropdown-menu)

```sh
npx shadcn-ui@latest add dropdown-menu
```

## Add New Theme

- reference shadcn docs

[Theming](https://ui.shadcn.com/docs/theming)
[Themes](https://ui.shadcn.com/themes)

- setup theme in globals.css

## Dark Mode

[Dark Mode](https://ui.shadcn.com/docs/dark-mode/next)

```sh
npm install next-themes

```

## Explore Forms Component

- install

```sh
npx shadcn-ui@latest add form input
```

- Input
- [docs](https://ui.shadcn.com/docs/components/input)

- Form
- [docs](https://ui.shadcn.com/docs/components/form)

## Explore Select Component

- install

```sh
npx shadcn-ui@latest add select
```

- [docs](https://ui.shadcn.com/docs/components/select)

## Create DB in Render

- create .env
- add to .gitignore
- copy external URL
  DATABASE_URL =

## Setup Prisma

- setup new prisma instance

```sh
npx prisma init
```

- push changes to render

```sh
npx prisma db push
```

## Explore Toast Component

- install

```sh
npx shadcn-ui@latest add toast

```

[docs](https://ui.shadcn.com/docs/components/toast)

## Explore - shadcn/ui badge separator and card components

- install

```sh
npx shadcn-ui@latest add badge separator card

```

[badge](https://ui.shadcn.com/docs/components/badge)
[separator](https://ui.shadcn.com/docs/components/separator)
[card](https://ui.shadcn.com/docs/components/card)

## Seed Database

- create fake data in Mockaroo
  [docs](https://www.mockaroo.com/)
- copy from assets or final project
- log user id
- create seed.js
- run "node prisma/seed"

```js
const { PrismaClient } = require("@prisma/client");
const data = require("./mock-data.json");
const prisma = new PrismaClient();

async function main() {
  const clerkId = "clerkUserId";
  const jobs = data.map((job) => {
    return {
      ...job,
      clerkId,
    };
  });
  for (const job of jobs) {
    await prisma.job.create({
      data: job,
    });
  }
}
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
```

## Explore - Shadcn/ui Skeleton component

- install

```sh
npx shadcn-ui@latest add skeleton

```

[docs](https://ui.shadcn.com/docs/components/skeleton)

## Explore Re-charts Library

[docs](https://recharts.org/en-US)
