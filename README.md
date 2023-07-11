# Full Stack E-Commerce Store with Next.js 13, Stripe, App Router, React, Typescript and Tailwind.

#### [https://sushil-ecommerce-store.vercel.app](https://sushil-ecommerce-store.vercel.app)

### MAKE SURE YOU HAVE [ADMIN](https://github.com/iprime2/ecommerce-store-nextjs-ts) SETUP FIRST!

### Features:

- Users can create their own online e-commerce store and manage the data from the admin
- The data will be fetched from admin store APIs
- Users can search for specific products or use filters to narrow down the product selection
- Stripe checkout

![Screenshot](demo.png)

![Screenshot](demo1.png)

### Prerequisites

**Node version 14.x**

### Cloning the repository

```shell
git clone https://github.com/iprime2/ecommerce-store-nextjs-ts
```

### Install packages

```shell
npm install
```

### Setup .env file


```js
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=
DATABASE_URL=
NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=
CLOUDINARY_URL=
STRIPE_API_KEY=
FRONTEND_STORE_URL=
STRIPE_WEBHOOK_SECRET=
```
 
### Setup Prisma

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |
| `lint`          | Check any javascript error               |
| `build`         | To build the webapp                      |
