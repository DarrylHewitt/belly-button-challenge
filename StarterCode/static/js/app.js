const URL = "https://2u-data-curriculum-team.s3.amazonaws.com/dataviz-classroom/v1.1/14-Interactive-Web-Visualizations/02-Homework/samples.json"

d3.json(URL).then(function (data) {
    console.log(data);
});

function init() {
    d3.json(URL).then(function (data) {
        let panelData = data.names;
        let dropDown = d3.select("#selDataset");
        for (let i = 0; i < panelData.length; i++) {
            dropDown.append("option").text(panelData[i]).property("value", panelData[i]);
        }
        buildPanel(panelData[0]);
        createCharts(panelData[0]);
    });
}

function buildPanel(x) {
    d3.json(URL).then(function (data) {
        let metaData = data.metadata;
        let results = metaData.filter(whatever => whatever.id == x);
        let result = results[0]
        console.log(result);
    });
}

function createCharts(x) {
    d3.json(URL).then(function (data) {
        let mySamples = data.samples;
        let results = mySamples.filter(whatever => whatever.id == x);
        let result = results[0]
        console.log(result);
    });}

function optionChanged(data) {
    buildPanel(data);
    createCharts(data);
}

init();