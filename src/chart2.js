var ctx = document.getElementById('chart2');
var chart2 = new Chart(
    ctx, {
    type: 'bar',
    data: {
        labels: availableTeams,
        datasets: [
            {
                label: 'Won matches',
                data: [],
                borderWidth: 1
            },
            {
                label: 'Lost matches',
                data: [],
                borderWidth: 1
            }
        ]
    },
    options: {
        indexAxis: 'y'
    }
}
)

async function updateChart2(data) {
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

    chart2.data.datasets[0] = {
        label: 'Won matches',
        data: teamWinCount,
        borderWidth: 1
    }
    chart2.data.datasets[1] = {
        label: 'Lost matches',
        data: teamLoseCount,
        borderWidth: 1
    }
    chart2.update()
}
