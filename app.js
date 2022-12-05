const App = {
    data() {
        return {
            placeholderString: "Введите название фильма",
            title: "Поиск фильма по названию",
            inputValue: "",

        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value
            console.log (inputValue)
        },
        addNewFilm() {
            console.log (this.inputValue)
            alert(this.inputValue)
        }
    },
}



Vue.createApp(App).mount("#app")