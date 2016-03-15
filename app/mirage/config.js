var loremIpsum = "\"Lorem ipsum dolor sit amet, consectetur adipiscing elit. " +
  "Morbi pretium tempor gravida. Class aptent taciti sociosqu ad litora " +
  "torquent per conubia nostra, per inceptos himenaeos. Nullam facilisis " +
  "purus quam, at luctus orci venenatis maximus. Maecenas vitae dignissim " +
  "nibh. Aliquam erat volutpat. Praesent volutpat, odio eget accumsan " +
  "bibendum, sapien velit malesuada nibh, et aliquam risus ligula ac ante. " +
  "Nullam elementum posuere enim, id vehicula ex laoreet sit amet. Sed " +
  "tellus magna, dignissim et felis a, venenatis gravida massa. Phasellus " +
  "tempus laoreet nibh, bibendum pulvinar leo pretium vel. Ut nec rutrum " +
  "nunc, blandit dapibus diam. Donec id erat sit amet massa mattis eleifend. " +
  "Ut molestie blandit molestie. Vestibulum consequat risus nulla, at " +
  "egestas risus semper nec.\n\nVivamus dapibus augue non suscipit sodales. " +
  "Ut dapibus lectus quis mi blandit luctus. Phasellus dapibus, leo in " +
  "sagittis facilisis, odio lectus semper nibh, sed pellentesque magna massa " +
  "vitae diam. In suscipit nulla vel tempus luctus. Maecenas dapibus " +
  "sollicitudin diam a accumsan. Nunc ullamcorper urna in elit blandit " +
  "condimentum. Pellentesque eleifend ligula et rhoncus eleifend. Aliquam et " +
  "cursus ante. Ut vitae ornare quam. Etiam euismod purus et pellentesque " +
  "ultricies. Ut dui leo, malesuada id nisi at, ornare varius urna. Nulla ac " +
  "urna libero. Fusce aliquet dui sed venenatis egestas. Nulla quis orci " +
  "porta sapien feugiat ornare vitae eget leo.\"";

export default function() {
  this.get("/posts", function() {
    return {
      data: [{
        type: "post",
        id: 1,
        attributes: {
          title: "Hello, World!",
          message: "Hello, World! This is the first post, it is hard-coded " +
            "in mirage. Here's some example text to bulk out the post a " +
            "bit;\n\n" + loremIpsum
        }
      }, {
        type: "post",
        id: 2,
        attributes: {
          title: "Hello Again!",
          message: "This is the second post, it is also hard-coded in " +
            "mirage. Here's some example text to bulk out the page a bit;\n\n" +
            loremIpsum
        }
      }]
    };
  });
}