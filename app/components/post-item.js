import Ember from 'ember';

export default Ember.Component.extend({
    isMessageShowing: false,
    actions: {
        messageShow() {
            this.set("isMessageShowing", true);
        },
        messageHide() {
            this.set("isMessageShowing", false);
        }
    }
});
