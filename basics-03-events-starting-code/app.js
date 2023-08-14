const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: '',
      lastName: 'Schwarz',
    };
  },
  methods: {
    setName(event, lastName) {
      this.name = event.target.value + ' ' + lastName;
    },
    increment(num) {
      this.counter += num;
    },
    subtract(num) {
      this.counter -= num;
    }

  }
});

app.mount('#events');
