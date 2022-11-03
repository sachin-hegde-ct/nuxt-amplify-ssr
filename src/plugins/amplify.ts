import { Amplify, Auth, Storage, withSSRContext } from "aws-amplify";
import { AwsConfig } from "../aws-exports";

export default defineNuxtPlugin((app) => {
  const awsConfig = AwsConfig();

  Amplify.configure({ ...awsConfig, ssr: true });

  const modules = {
    auth: Auth,
    storage: Storage,
  };

  if (process.server) {
    const cookies = app.ssrContext.event.req.headers.cookie;

    const isIdTokenAvailable = cookies
      ?.split(";")
      .find((cookie) => cookie.includes("idToken"));

    isIdTokenAvailable
      ? console.log("***** Id Token Available *****")
      : console.log("***** Id Token Not Available *****");

    const { Auth: ssrAuth } = withSSRContext({ req: app.ssrContext.event.req });

    modules.auth = ssrAuth;
  }

  return {
    provide: modules,
  };
});
