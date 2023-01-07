async function createChart2() {
    var ctx = document.getElementById('chart2');

    apiKey = formData.value
    data = await (await fetch(mockarooEndpoint(apiKey))).json();

    var teamDictWinCount = {}
    var teamDictLoseCount = {}
    for (var i = 0, size = availableTeams.length; i < size; ++i) {
        teamDictWinCount[availableTeams[i]] = 0
        teamDictLoseCount[availableTeams[i]] = 0
    }

    for (var i = 0, size = data.length; i < size; ++i) {
        if (data[i]["match_won"] == 1) {
            teamDictWinCount[data[i]["group"]] += 1
        } else {
            teamDictLoseCount[data[i]["group"]] += 1
        }
    }

    var teamWinCount = []
    for (var i = 0, size = availableTeams.length; i < size; ++i) {
        teamWinCount.push(teamDictWinCount[availableTeams[i]])
    }
    var teamLoseCount = []
    for (var i = 0, size = availableTeams.length; i < size; ++i) {
        teamLoseCount.push(teamDictLoseCount[availableTeams[i]])
    }

    new Chart(
        ctx, {
            type: 'bar',
            data: {
                labels: availableTeams,
                datasets: [
                    {
                        label: 'Won matches',
                        data: teamWinCount,
                        borderWidth: 1
                    },
                    {
                        label: 'Lost matches',
                        data: teamLoseCount,
                        borderWidth: 1
                    }
                ]
            },
            options: {
                indexAxis: 'y'
            }
        }
    )
}
