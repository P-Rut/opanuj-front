export const isValidInput = (value) => {
      return value != '' && Number.isInteger(Number(value))
}

const isLessThan = (boundry) => {
      return (input) => input < boundry
}
const isMoreThan = (boundry) => {
      return (input) => input > boundry
}

const VALIDATOR_METHODS = [
      isLessThan(100),
      isMoreThan(0)
]

export const validateAllMethods = (value) => {
      const numericValue = Number(value);
      return VALIDATOR_METHODS.every((method) => method(numericValue));
}



