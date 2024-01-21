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

        let demoPanel = d3.select("#sample-metadata").html("");

        Object.entries(result).forEach(([key, value]) => {
            demoPanel.append("h5").text(`${key}: ${value}`);

        });

    });
}

function createCharts(x) {
    d3.json(URL).then(function (data) {
        let mySamples = data.samples;
        let results = mySamples.filter(whatever => whatever.id == x);
        let result = results[0]
        console.log(result);

        let slicedValues = result.sample_values.slice(0, 10);
        let slicedLabels = result.otu_ids.slice(0, 10);
        let slicedHovertext = result.otu_labels.slice(0, 10);

        let yticks = slicedLabels.map(id => `OTU ${id}`).reverse();
        let xticks = slicedValues.reverse();
        let labels = slicedHovertext.reverse();

        let trace = {
            x: xticks,
            y: yticks,
            text: labels,
            type: "bar",
            orientation: "h"
        };

        let layout = {
            title: "Top 10 OTUs Present"
        };

        Plotly.newPlot("bar", [trace], layout);

        let traceBubble = {
            x: result.otu_ids,
            y: result.sample_values,
            text: result.otu_labels,
            mode: 'markers',
            marker: {
                size: result.sample_values,
                color: result.otu_ids,
                colorscale: 'Earth'  
            }
        };

        let dataBubble = [traceBubble];

        let layoutBubble = {
            title: `Bubble Chart for Individual ${x}`,
            xaxis: { title: 'OTU IDs' },
            yaxis: { title: 'Sample Values' },
            hovermode: "closest"
        };

        Plotly.newPlot('bubble', dataBubble, layoutBubble);

    });}

function optionChanged(data) {
    buildPanel(data);
    createCharts(data);
}

init();