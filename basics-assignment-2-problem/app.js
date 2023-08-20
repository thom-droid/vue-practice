const assignmentComponent = Vue.createApp({
    data () {
        return {
            alertMessage: 'alert is clicked!',
            keydownInput: '',
            enterInput: '',
        }
    },
    methods: {
        showAlertMessage() {
            alert(this.alertMessage);
        },
        setKeydownInput(event) {
            this.keydownInput = event.target.value;
        },
        setEnterInput(event) {
            this.enterInput = event.target.value;    
        }
    }
});

assignmentComponent.mount("#assignment");