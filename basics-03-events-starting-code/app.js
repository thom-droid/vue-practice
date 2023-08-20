const app = Vue.createApp({
  data() {
    return {
      counter: 10,
      name: '',
      lastName: 'Schwarz',
      confirmedName: '',
    };
  },
  methods: {
    setConfirmedName(){
      this.confirmedName = this.name;
    },
    submitForm(){
      alert('submitted!');
    },
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
