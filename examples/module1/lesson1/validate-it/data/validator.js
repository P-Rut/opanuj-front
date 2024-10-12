import { CORRECT_RESULT } from "./alerts.js";
import { INCORRECT_RESULT } from "./alerts.js";
import { INCORRECT_INPUT } from "./alerts.js";
import { isValidInput } from "./methods.js";
import { validateAllMethods } from "./methods.js";

export const validator = (input) => {

      if (!isValidInput(input)) {
            return INCORRECT_INPUT
      }
      if (validateAllMethods(input))
            return CORRECT_RESULT
      else {
            return INCORRECT_RESULT
      }
}