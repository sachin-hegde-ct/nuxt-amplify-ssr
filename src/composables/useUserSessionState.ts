// Stores user logged in state

import { Ref } from "vue";

export const useUserSessionState = () => {
  const isLoggedIn = useState("isLoggedIn", (): Ref<boolean> => ref(false));

  const setUserLoggedInState = (loggedInState: boolean) => {
    isLoggedIn.value = loggedInState;
  };

  return {
    isLoggedIn: computed(() => isLoggedIn.value),
    setUserLoggedInState,
  };
};
