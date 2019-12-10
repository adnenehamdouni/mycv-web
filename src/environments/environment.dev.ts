// environment.dev.ts
import { environment as defaultEnvironment } from "./environment.defaults";

export const environment = {
  ...defaultEnvironment,
  profile: "dev"
};
