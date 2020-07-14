import { extend } from 'vee-validate';
import * as rules from 'vee-validate/dist/rules';

Object.keys(rules).forEach(rule => {
  extend(rule, rules[rule]);
});
extend("password", {
  validate(value) {
    const strongRgx = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%?^&*])(?=.{8,})');
    return strongRgx.test(value);
  },
  message: "Please enter a valid password."
});
