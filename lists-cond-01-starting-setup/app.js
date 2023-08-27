const app = Vue.createApp({
  data() {
    return {
      goals: [],
      enteredInput: "",
    };
  },
  methods: {
    addGoal() {
      this.goals.push(this.enteredInput);
    },
    removeGoal(idx) {
      this.goals.splice(idx, 1);
    },
  },
});

app.mount("#user-goals");
