let app = new Vue({
  el: "#app",
  data: {
    lesson1: {
      text: "Texto contenido en el spam",
      title: "Este es el titulo del spam",
      seen: true,
    },
    lesson2: {
      items: ["Learn JavaScript", "Learn Python", "Learn C#"],
    },
    lesson3: {
      message: "Hello Vue.js!",
    }
  },
  methods: {
    onWrited: function (data) {
      console.log(data);
    }
  },
});
