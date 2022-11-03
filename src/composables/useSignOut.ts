export default () => {
  const { $auth } = useNuxtApp();
  const { setUserLoggedInState } = useUserSessionState();

  const signOut = async (global = false) => {
    try {
      await $auth.signOut({ global });
      setUserLoggedInState(false);

      navigateTo({
        path: "/sign-in",
      });
    } catch (error) {
      console.error("error signing out: ", error);
    }
  };

  return {
    signOut,
  };
};
