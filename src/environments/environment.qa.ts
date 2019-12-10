// environment.qa.ts
import { environment as defaultEnvironment } from "./environment.defaults";

export const environment = {
  ...defaultEnvironment,
  profile: "qa"
};
