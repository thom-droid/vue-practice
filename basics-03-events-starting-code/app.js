const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: "",
      lastName: "",
      confirmedName: "",
      // fullName: "",
    };
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const vm = this;
        setTimeout(function () {
          vm.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   console.log("name property is being wathced");
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullName = "";
    //   } else {
    //     this.fullName = this.name + " " + value;
    //   }
    // },
  },
  computed: {
    outputFullName() {
      // this is going to run every time the page is rendered
      console.log("this is running every time v-dom is updated");
      if (!this.name || !this.lastName) {
        return "";
      }

      return this.name + " " + this.lastName;
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
