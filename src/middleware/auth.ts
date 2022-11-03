/**
 * This route middleware would restrict the routes for unauthenticated users or users
 * which are authenticated but the phone_number is still not verified.
 */
export default defineNuxtRouteMiddleware(async (to) => {
  const isLoggedIn = await useAuth().isUserLoggedIn();
  console.log(`isLoggedIn : ${isLoggedIn}`);

  if (!isLoggedIn) {
    return navigateTo({
      path: "/sign-in",
    });
  }
});
