import Ember from 'ember';

export function summarise([text]/*, hash*/) {
  return text.substr(0, 20) + "...";
}

export default Ember.Helper.helper(summarise);
