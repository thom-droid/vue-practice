const assignmentComponent = Vue.createApp({
  data() {
    return {
      name: "michael",
      age: 0,
      ageInFiveYears: 0,
      randomNumber: 0,
      imageUrl:
        "https://www.alleycat.org/wp-content/uploads/2019/03/FELV-cat.jpg",
    };
  },
  methods: {
    getRandomNumber() {
      this.randomNumber = Math.random();
    },
  },
  mounted() {
    this.getRandomNumber();
  }
});

assignmentComponent.mount("#assignment");
