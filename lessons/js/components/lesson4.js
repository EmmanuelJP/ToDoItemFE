Vue.component("lessonFour", {
  template: `<section><input v-model="inputValue" @input="onInputValueChange" /></section>`,
  data() {
    return {
      inputValue: "",
    };
  },
  methods: {
    onInputValueChange: function (event) {
      this.$emit("writed", event.srcElement.value);
    },
  },
});
