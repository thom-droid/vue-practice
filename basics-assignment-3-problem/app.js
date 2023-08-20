const app = Vue.createApp({
  data() {
    return {
      number: 0,
      targetNumber: 37,
      message: {
        lessThan: "Not there yet",
        greaterThan: "Too much!",
        reached: "reached at the point!",
      },
    };
  },
  computed: {
    calculate() {
      console.log("calculating");
      if (this.number < this.targetNumber) {
        return this.message.lessThan;
      } else if (this.number === this.targetNumber) {
        return this.message.reached;
      } else {
        return this.message.greaterThan;
      }
    },
  },
  watch: {
    calculate() {
      alert("watcher is working.");
      setTimeout(() => {
        this.number = 0;
      }, 5000);
    },
  },
  methods: {
    increment(num) {
      this.number += num;
    },
  },
});

app.mount("#assignment");
