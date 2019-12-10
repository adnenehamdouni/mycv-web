// environment.prod.ts
import { environment as defaultEnvironment } from "./environment.defaults";

export const environment = {
  ...defaultEnvironment,
  profile: "prod",
  //overwrite the production environment configuration
  production: true,
  log: false,
  flags: {
    useNewHeader: false
  }
};
