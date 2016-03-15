import Ember from 'ember';

var loremIpsum =
    "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque non " +
    "sapien sit amet nisi congue facilisis non et mauris. Nunc vel semper " +
    "arcu. In congue quis risus a efficitur. Suspendisse efficitur auctor " +
    "nunc. Praesent posuere risus tristique erat pretium, eu euismod elit " +
    "sollicitudin. Nulla eget felis auctor, dapibus mi quis, ultrices metus. " +
    "Nullam dui purus, sollicitudin et justo eget, facilisis bibendum risus. " +
    "Morbi eget quam non erat maximus mattis ut sed purus. Sed rhoncus " +
    "ultrices nisl, eu tincidunt massa finibus eget. Sed vel lectus nec nisl " +
    "porta gravida. Nunc ut lacinia magna, sit amet euismod felis.\"";

export default Ember.Route.extend({
    model() {
        return {
            loremIpsum: loremIpsum
        };
    }
});
