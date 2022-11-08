google.charts.load('current',{packages:['corechart']});

google.charts.setOnLoadCallback(drawChart);

function drawChart() {
    var data = google.visualization.arrayToDataTable([
        ['Party', 'Number of Seats'],
        ['PSOE',54.8],
        ['PP',48.6],
        ['PODEMOS',44.4],
        ['VOX',23.9]
    ]);
    
    var options = {
        title:'Senate Parties'
    };
    // Draw Chart
    var chart = new google.visualization.PieChart(document.getElementById('SenateParties'));
    chart.draw(data, options);
}
