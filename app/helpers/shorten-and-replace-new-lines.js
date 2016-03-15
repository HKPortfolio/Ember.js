import Ember from 'ember';

export function shortedAndReplaceNewLines([text]/*, hash*/) {
    return new Ember.Handlebars.SafeString(text.substr(0, text.length / 10).replace(/\n/g, "<br />") + "...");
}

export default Ember.Helper.helper(shortedAndReplaceNewLines);
