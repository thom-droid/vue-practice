const app = Vue.createApp({
  data() {
    return {
      userInput: "",
      userValues: {
        user1: "user1",
        user2: "user2",
      },
      classValue: "",
      timeoutId: null,
      toggled: false,
      userInputForTask3: "",
    };
  },
  computed: {
    computeToggled() {
      return this.toggled ? "visible" : "hidden";
    },
    // code from instructor
    // paraClasses() {
    //   return {
    //     user1: this.userInput === "user1",
    //     user2: this.userInput === "user2",
    //     visible: this.toggled,
    //     hidden: !this.toggled,
    //   };
    // },
  },
  methods: {
    checkUserInput() {
      //throttling
      if (this.timeoutId) {
        clearTimeout(this.timeoutId);
      }

      this.timeoutId = setTimeout(() => {
        if (this.userInput === this.userValues[this.userInput]) {
          this.classValue = this.userInput;
        }
      }, 1000);
    },
    toggle() {
      this.toggled = !this.toggled;
    },
  },
});

app.mount("#assignment");
