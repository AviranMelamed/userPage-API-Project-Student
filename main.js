const renderer = new Renderer()
const apiManager = new APIManager()

$(`#load`).on(`click`, function() {
    apiManager.getUsers()
    apiManager.kenyaQuote()
    apiManager.Poke()
    apiManager.Meat()

})

$(`#display`).on(`click`, function() {
    renderer.renderMainUser(apiManager.data.mainUser)
    renderer.renderKenyaQuote(apiManager.data.quote)
    renderer.renderPokemon(apiManager.data.pokemon)
    renderer.renderMeat(apiManager.data.meat)
})