export default function() {
  this.get("/posts", function() {
    return {
      data: [{
        type: "post",
        id: 1,
        attributes: {
          title: "Hello, World!",
          message: "Hello, World! This is the first post on EmberJS, it is hard-coded in mirage."
        }
      }, {
        type: "post",
        id: 2,
        attributes: {
          title: "Hello Again!",
          message: "This is the second post on EmberJS, it is also hard-coded in mirage."
        }
      }]
    };
  });
}