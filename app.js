const App = {
    data() {
        return {
            visible: false,
            placeholderString: "Введите название фильма",
            title: "Поиск фильма по названию",
            inputValue: "",
            nameFilm: "",
            yearFilm: "",
            aboutFilm: "",
            genre: [],
            posterURL:"",
            naFilm:"",
            dat:[]

        }
    },
    methods: {
        inputChangeHandler (event) {
            this.inputValue = event.target.value

        },


        addNewFilm: async function () {
            const films = this.inputValue
            const res = await fetch(`http://www.omdbapi.com/?apikey=922db138&s=${films}`)
             this.dat = await res.json()
            console.log(this.dat)
            console.log(this.dat.Search[0].Title)

            if (dat.Error === "Movie not found!") {
                this.naFilm = "Фильм не найден!"
                this.inputValue = ""
            }
            else{
                this.naFilm = ""
                this.nameFilm = this.inputValue
                console.log (dat.Search[0])
                this.yearFilm = "Год выхода: " + dat.Year
                this.aboutFilm = dat.Plot
                this.posterURL = dat.Poster
                console.log (dat.Poster)
                const arrayOfString = dat.Genre.split(",");
                console.log(arrayOfString[1])
                this.genre= arrayOfString
                console.log(dat.Genre)
                console.log(dat)
                console.log(res)
                this.inputValue = ""
            }


        }
    },
}




Vue.createApp(App).mount("#app")
