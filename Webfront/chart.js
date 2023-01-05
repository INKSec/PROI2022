google.charts.load('current',{packages:['corechart']});
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    // Set Data
    var data = google.visualization.arrayToDataTable([
        ['Zeit', 'Mohn','Weiß','Mehr'],
        [0,7,4,5],[10,8,5,7],[20,8,3,4],[30,9,2,8],
        [40,9,1,2],[50,15,10,10],[60,11,7,9],
        [70,13,5,7],[80,14,3,2],[90,15,4,5]
    ]);
    // Set Options
    var options = {
        title: 'Füllstand',
        hAxis: {title: 'Zeit'},
        vAxis: {title: 'Menge'},
        legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('füllstand'));
    chart.draw(data, options);
}

