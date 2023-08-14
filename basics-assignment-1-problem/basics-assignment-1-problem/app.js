const assignmentComponent = Vue.createApp({
  data() {
    return {
      name: "michael",
      age: 31,
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
    calculateAge(){
        return this.age + 5;
    }
  },
  mounted() {
    this.getRandomNumber();
  }
});

assignmentComponent.mount("#assignment");
