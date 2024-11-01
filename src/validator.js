export const validator = {
  onlyNum: (str) => /^$|^\d+$/.test(str),
  notEmpty: (str) => str.trim() !== '',

  validate(data, validations) {
    return Object.entries(validations).reduce((acc, entry) => {
      const [key, validationItems] = entry;
      acc[key] = !validationItems.find((validation) => validation(data[key]) === false);
      console.log(key, acc[key]);
      return acc;
    }, {});
  },

  isValid(validationResult) {
    return Object.values(validationResult).find((value) => value === false) === undefined;
  },
};
