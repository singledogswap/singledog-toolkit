import { darkColors, lightColors } from "../../theme/colors";
import { SingledogToggleTheme } from "./types";

export const light: SingledogToggleTheme = {
  handleBackground: lightColors.backgroundAlt,
  handleShadow: lightColors.textDisabled,
};

export const dark: SingledogToggleTheme = {
  handleBackground: darkColors.backgroundAlt,
  handleShadow: darkColors.textDisabled,
};
