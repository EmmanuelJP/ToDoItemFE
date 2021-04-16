Vue.component("lessonTwo", {
  props: ["items"],
  template: `<ol>
        <li
          v-for="item in items"
        >{{item}}</li>
      </ol>`,
});
