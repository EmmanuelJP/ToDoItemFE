Vue.component("lessonThree", {
  props: ["message"],
  data() {
    return {
      myMessage: this.message,
    };
  },
  methods: {
    reverseMessage: function () {
      this.myMessage = this.myMessage.split("").reverse().join("");
    },
  },
  template: `
  <section>
  <p>{{myMessage}}</p>
      <button @click="reverseMessage">Reverse Message</button>
  </section>
  `,
});
