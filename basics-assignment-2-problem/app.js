const assignmentComponent = Vue.createApp({
  data() {
    return {
      alertMessage: "alert is clicked!",
      keydownInput: "",
      enterInput: "",
    };
  },
  methods: {
    showAlertMessage() {
      alert(this.alertMessage);
    },
    setKeydownInput(event) {
      this.keydownInput = event.target.value;
    },
    confirmInput() {
      this.enterInput = this.keydownInput;
    },
  },
});

assignmentComponent.mount("#assignment");
