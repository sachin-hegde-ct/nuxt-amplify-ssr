# Nuxt SSR session issue

Reproducing the Nuxt SSR session issue on initial rendering on server side 

## Setup

Make sure to install the dependencies:

```bash
# npm
npm install
```

## Steps to reproduce

1. Place `aws-export.ts` file directly under `src` folder
2. Build and Run the application
3. Open `http://[::]:3000/sign-in`
4. Login to the application 
5. Refresh the `dashboard` screen

## Observation
Observe app redirects to `sign-in` screen (On terminal we can see Amplify error: No Current user and idToken is not available) and redirects back to `dashboard` (because on client side tokens are available so user has valid session)

https://user-images.githubusercontent.com/78547540/199719014-18920e41-113b-4801-9797-d64045a6aa08.mov
