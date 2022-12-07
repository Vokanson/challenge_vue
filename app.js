const App = {
    data() {
        return {
            placeholderString: "Введите название фильма",
            title: "Поиск фильма по названию",
            inputValue: "",
            film: ["terminator"],

        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value
            // let film = event.target.value
        },

        async addNewFilm() {
            const films = this.inputValue
            // this.film.push(this.inputValue)
            const res = await fetch (`http://www.omdbapi.com/?apikey=922db138&t=${films}`);
            const dat = await res.json();
            console.log (dat)
            // console.log (this.film)
            console.log (res)
        }
    },
}




Vue.createApp(App).mount("#app")