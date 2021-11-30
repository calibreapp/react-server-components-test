# React Server Component Test

This repository aims to test React Server Components & client-side bundles.

It:

- Has production sourcemaps enabled
- Uses webpack/babel defaults (not swc, as that appears to be broken atm)
- Has `concurrentFeatures` & `serverComponents` enabled
- Is deployed to [react-server-components-test.vercel.app](https://react-server-components-test.vercel.app).

What happens:

- `moment.js` is included in `index.server.js`
- `moment.js` appears as a client-side bundle

What I expected:

- `moment.js` not to be included as a client-side bundle

![image](https://user-images.githubusercontent.com/924/143995286-6920288a-bf7a-4009-b0cd-a06f3754c7fb.png)
