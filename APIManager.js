//This is the class that will manage all your APIs

class APIManager {
    constructor() {
        this.data = {}
    }

    getUsers(){
        $.get(`https://randomuser.me/api/?results=7`,  (response) => {
            const mainUser = {}
            mainUser.firstName = response.results[0].name.first
            mainUser.lastName = response.results[0].name.last
            mainUser.city = response.results[0].location.city
            mainUser.country = response.results[0].location.country
            this.data.mainUser = mainUser   
         })
    }
    kenyaQuote(){
        $.get(`https://api.kanye.rest/`, (kenyaQuote) => {
            
            this.data.quote = kenyaQuote
        })
    
    }
    Poke(){
     
        $.get(`https://pokeapi.co/api/v2/pokemon/`+Math.floor(Math.random() * 100) + 1, (response) =>{
            const pokemon = {}
            pokemon.name = response.name
            pokemon.url = response.sprites.other.dream_world.front_default
            this.data.pokemon = pokemon
        })
    }
    Meat(){
        $.get(`https://baconipsum.com/api/?type=meat-and-filler`, (response) => {
            const meatQuote = response[0]
            this.data.meat = meatQuote
        })
    }
        
    
}
//console.log(this.data)
            
            //this.data.users = response.result.name
            // this.data.users = response
            // render(data)
// let data = {}
// const fetchData = () => {}
// quote () {}
//         pokemon () {}
//         meat (){}
//         friends(){}