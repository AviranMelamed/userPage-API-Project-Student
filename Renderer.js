class Renderer {
    renderMainUser(mainUser){
        let source = $(`#main-user-template`).html()
        let template = Handlebars.compile(source)
        let userHTML = template(mainUser)
         $(".user-container").append(userHTML)
    }
    renderKenyaQuote(kenyaQuote){
          let source = $(`#kenya-quote-template`).html()
          let template = Handlebars.compile(source)
          let quoteHTML = template(kenyaQuote)
          $(".quote-container").append(quoteHTML)
    }
    renderPokemon(pokemon){
        let source = $(`#poke-template`).html()
        let template = Handlebars.compile(source)
        let pokeHtml = template(pokemon)
        $(".pokemon-container").append(pokeHtml)
    }
    renderMeat(meat){
        let source = $(`#meat-template`).html()
        let template = Handlebars.compile(source)
        let meatHtml = template(meat)
        $(".meat-container").append(meatHtml)
    }


    
    

}


// Your Renderer is a class which contains each of the methods to render 
// each section of the user page through Handlebars

// We've set up some empty methods for you to fill out - 
// their names should suggest what needs to happen in each one

// You also have a "main" render method which should invoke 
// all the "inner" methods with the relevant parameters

