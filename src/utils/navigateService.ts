// src/utils/navigateService.ts
import { NavigateFunction, Location } from "react-router-dom";

let navigate: NavigateFunction | null = null;
let location: Location | null = null;

export const setNavigate = (nav: NavigateFunction) => {
  navigate = nav;
};

export const setLocation = (loc: Location) => {
  location = loc;
};

export const redirectToLoginIfNeeded = () => {
  if (
    location?.pathname !== "/my-account" &&
    !localStorage.getItem("redirected")
  ) {
    localStorage.setItem("redirected", "true");
    navigate?.("/my-account");
  }
};
