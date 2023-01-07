function mockarooEndpoint(apiKey) {
    return "https://my.api.mockaroo.com/tournament.json?key=" + apiKey
}

var formData = document.getElementById('mockaroo-form')
var isFormFilled = formData.value != ""
var availableTeams = ["raging-monkeys", "charging-bulls", "lightning-birds", "calm-turtles"]