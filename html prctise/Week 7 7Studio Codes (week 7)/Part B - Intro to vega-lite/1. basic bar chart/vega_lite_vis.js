var vg_1 = "daily_cost_bar_chart.vg.json"; //JSON file required to set up chart. Note .vg.json
// Use # because using id unqiue. Would be . for class and nothing for a standard html element
vegaEmbed("#bar_chart", vg_1).then(function(result) { 
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);