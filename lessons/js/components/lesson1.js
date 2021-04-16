Vue.component("lessonOne", {
  props: ["title", "text", "seen"],
  template: "<span v-if='seen' :title='title'> {{text}}</span>",
});
