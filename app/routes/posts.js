import Ember from 'ember';

var posts = [{
    id:1,
    title:"Hello, World!",
    message:"Hello, World! This is the first post on Canary, it is hard-coded."    
}, {
    id:2,
    title:"Hello Again!",
    message:"This is the second post on Canary, it is also hard-coded."
}]

export default Ember.Route.extend({
    model() {
        return posts;
    }
});
