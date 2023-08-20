const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "Schwarz",
      confirmedName: "",
    };
  },
  computed: {
    outputFullName() {
      // this is going to run every time the page is rendered
      console.log("this is running every time v-dom is updated");
      if (this.name) {
        return this.name + " Schwarz";
      }
      return "";
    },
  },
  methods: {
    // outputFullName() {
    //   // this is going to run every time the page is rendered
    //   console.log("this is running every time v-dom is updated");
    //   if (this.name) {
    //     return this.name + " Schwarz";
    //   }
    //   return "";
    // },
    setConfirmedName() {
      this.confirmedName = this.name;
    },
    submitForm() {
      alert("submitted!");
    },
    setName(event) {
      this.name = event.target.value;
    },
    increment(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
