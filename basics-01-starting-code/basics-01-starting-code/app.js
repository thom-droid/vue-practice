const app = Vue.createApp({
  data() {
    return {
      courseGoalA: 'finish the course and learn Vue',
      cousreGoalB: '<h2>Master Vue and build an awesome app </h2>',
      vueLink: 'https://vuejs.org/'
    };
  },
  methods: {
    outputGoal() {
        const randomNumber = Math.random();
        if(randomNumber < 0.5){
            return this.courseGoalA;
        } else {
            return this.cousreGoalB;
        }
    }
  }
});

app.mount("#user-goal");
