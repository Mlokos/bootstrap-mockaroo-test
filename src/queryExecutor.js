async function updateCharts(data) {
    apiKey = formData.value
    data = await (await fetch(mockarooEndpoint(apiKey))).json()

    updateChart1(data)
    updateChart2(data)
}