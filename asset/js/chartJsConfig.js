        // https://chartjs.org
        function chart(borderColor, backgroundColor, id, label, icon, dataCharts, display, lineTension){
            const data = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
            datasets: [
                {
                label: label,
                data: dataCharts,
                lineTension: lineTension ? '0.2' : '0',
                backgroundColor: backgroundColor,  // Semi-transparent red
                borderColor: borderColor,    // Solid red
                fill: false
                }
            ]
            };
    
            const config = {
            type: 'line',
            data: data,
            options: {
                responsive: true,
                plugins: {
                legend: {
                    display: false
                },
                tooltip: {
                    callbacks: {
                        label: function(tooltipItem) {
                            return tooltipItem.dataset.label + ' : ' + tooltipItem.parsed.y + icon;  // Menambahkan simbol dolar di belakang angka saat di hover
                        }
                    }
                }
                },
                maintainAspectRatio: false,
                scales: {
                x: {
                    border: {
                    display: false
                    },
                    grid: {
                    display: display ??= false,
                    drawBorder: false
                    },
                    ticks: {
                    display: display ??= false
                    }
                },
                y: {
                    display: display ??= false,
                    grid: {
                    display: false
                    },
                    ticks: {
                    display: display ??= false
                    }
                }
                },
                elements: {
                rectangle: {
                    borderWidth: 2 // Set the border width for rectangles (bars)
                },
                line: {
                    borderWidth: 2 // Set the border width for lines
                },
                // You can customize borders for other elements like points, etc.
                }
            }
            };
    
            new Chart(document.getElementById(id), config);
        }
