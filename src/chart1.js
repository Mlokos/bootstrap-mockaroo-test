var ctx = document.getElementById('chart1');
var chart1 = new Chart(
    ctx, {
    type: 'bar',
    data: {
        labels: availableTeams,
        datasets: [
            {
                label: 'Number of players',
                data: [],
                borderWidth: 1
            }
        ]
    }
}
)

async function createChart1() {
    apiKey = formData.value
    data = await (await fetch(mockarooEndpoint(apiKey))).json();

    var teamDictQuantityCount = {}
    for (var i = 0, size = availableTeams.length; i < size; ++i) {
        teamDictQuantityCount[availableTeams[i]] = 0
    }

    for (var i = 0, size = data.length; i < size; ++i) {
        teamDictQuantityCount[data[i]["group"]] += 1
    }

    var teamQuantityCount = []
    for (var i = 0, size = availableTeams.length; i < size; ++i) {
        teamQuantityCount.push(teamDictQuantityCount[availableTeams[i]])
    }

    console.log(chart1.data)

    chart1.data.datasets[0] = {
        label: 'Number of players',
        data: teamQuantityCount,
        borderWidth: 1
    }
    chart1.update()
}
