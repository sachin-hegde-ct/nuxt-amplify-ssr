export const useAuth = () => {
  const { $auth } = useNuxtApp();
  const userSessionState = useUserSessionState();

  const isUserLoggedIn = async () => {
    const isLoggedIn = userSessionState.isLoggedIn.value;

    if (isLoggedIn) return true;

    try {
      /**
       * Amplify currentSession method will automatically refresh the
       * accessToken and idToken if tokens are expired.
       */
      await $auth.currentSession();

      // We need attributes to show user related data, however it is not applicable to all the apps
      const { attributes } = await $auth.currentAuthenticatedUser();

      userSessionState.setUserLoggedInState(true);
      return true;
    } catch (error) {
      console.log(`Amplify error: ${error}`);
      userSessionState.setUserLoggedInState(false);

      return false;
    }
  };

  return {
    isUserLoggedIn,
  };
};
