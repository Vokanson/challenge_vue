const App = {
    data() {
        return {
            placeholderString: "Введите название фильма",
            title: "Поиск фильма по названию",
            inputValue: "",
            nameFilm: "",
            titleYear: "Год выхода:",
            yearFilm: "",
            aboutFilm: "",
            genre : [],

        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value
        },

        async addNewFilm() {
            const films = this.inputValue
            const res = await fetch (`http://www.omdbapi.com/?apikey=922db138&t=${films}`);
            const dat = await res.json();
            this.nameFilm = dat.Title
            this.yearFilm = dat.Year
            this.aboutFilm = dat.Plot
            const genreRetApi = dat.Genre
            function splitString(stringToSplit, separator) {
                const arrayOfString = stringToSplit.split(separator);
                console.log (arrayOfString[1])
                this.genre = arrayOfString
            }
            splitString(genreRetApi, ",")

            console.log (genreRetApi)
            console.log (dat)
            console.log (res)
        }
    },
}




Vue.createApp(App).mount("#app")