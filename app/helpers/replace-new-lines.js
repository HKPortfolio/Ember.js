import Ember from 'ember';

export function replaceNewLines([text]/*, hash*/) {
  return new Ember.Handlebars.SafeString(text.replace(/\n/g, "<br />"));
}

export default Ember.Helper.helper(replaceNewLines);
