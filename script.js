document.addEventListener('DOMContentLoaded', function () {
    // Initialize Chart.js
    const ctxSoilMoisture = document.getElementById('soilMoistureChart').getContext('2d');
    const soilMoistureChart = new Chart(ctxSoilMoisture, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Soil Moisture Levels',
                data: [],
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxWeather = document.getElementById('weatherChart').getContext('2d');
    const weatherChart = new Chart(ctxWeather, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Weather Conditions',
                data: [],
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxNutrient = document.getElementById('nutrientChart').getContext('2d');
    const nutrientChart = new Chart(ctxNutrient, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Nutrient Levels',
                data: [],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxPestDetection = document.getElementById('pestDetectionChart').getContext('2d');
    const pestDetectionChart = new Chart(ctxPestDetection, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Pest Detection (%)',
                data: [],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxPredictiveAnalytics = document.getElementById('predictiveAnalyticsChart').getContext('2d');
    const predictiveAnalyticsChart = new Chart(ctxPredictiveAnalytics, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Predictive Analytics',
                data: [],
                borderColor: 'rgba(255, 206, 86, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxPerformance = document.getElementById('performanceChart').getContext('2d');
    const performanceChart = new Chart(ctxPerformance, {
        type: 'bar',
        data: {
            labels: ['System Performance'],
            datasets: [{
                label: 'Performance (%)',
                data: [],
                backgroundColor: 'rgba(75, 192, 192, 0.2)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                x: { display: true },
                y: { beginAtZero: true }
            }
        }
    });

    // New Charts
    const ctxFertilizer = document.getElementById('fertilizerChart').getContext('2d');
    const fertilizerChart = new Chart(ctxFertilizer, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Fertilizer Usage',
                data: [],
                borderColor: 'rgba(255, 159, 64, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxInsurance = document.getElementById('insuranceChart').getContext('2d');
    const insuranceChart = new Chart(ctxInsurance, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Insurance Coverage',
                data: [],
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    const ctxCrop = document.getElementById('cropChart').getContext('2d');
    const cropChart = new Chart(ctxCrop, {
        type: 'line',
        data: {
            labels: [],
            datasets: [{
                label: 'Crop Yield',
                data: [],
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                fill: false
            }]
        },
        options: {
            scales: {
                x: { display: false },
                y: { beginAtZero: true }
            }
        }
    });

    function updateData() {
        const now = new Date();
        const label = now.getHours() + ':' + now.getMinutes() + ':' + now.getSeconds();
        const randomData = () => Math.floor(Math.random() * 100);

        // Update existing charts
        soilMoistureChart.data.labels.push(label);
        soilMoistureChart.data.datasets[0].data.push(randomData());
        soilMoistureChart.update();

        weatherChart.data.labels.push(label);
        weatherChart.data.datasets[0].data.push(randomData());
        weatherChart.update();

        nutrientChart.data.labels.push(label);
        nutrientChart.data.datasets[0].data.push(randomData());
        nutrientChart.update();

        pestDetectionChart.data.labels.push(label);
        pestDetectionChart.data.datasets[0].data.push(randomData());
        pestDetectionChart.update();

        predictiveAnalyticsChart.data.labels.push(label);
        predictiveAnalyticsChart.data.datasets[0].data.push(randomData());
        predictiveAnalyticsChart.update();

        performanceChart.data.datasets[0].data = [randomData()];
        performanceChart.update();

        // Update new charts
        fertilizerChart.data.labels.push(label);
        fertilizerChart.data.datasets[0].data.push(randomData());
        fertilizerChart.update();

        insuranceChart.data.labels.push(label);
        insuranceChart.data.datasets[0].data.push(randomData());
        insuranceChart.update();

        cropChart.data.labels.push(label);
        cropChart.data.datasets[0].data.push(randomData());
        cropChart.update();

        // Update recommendations and feedback
        document.getElementById('recommendations').innerHTML = `
            <li class="list-group-item">Irrigation schedule: ${Math.random() * 10 + 1} hours</li>
            <li class="list-group-item">Fertilizer needed: ${Math.random() * 100 + 1} kg</li>
            <li class="list-group-item">Pest control needed: ${Math.random() * 5 + 1} times</li>
        `;

        document.getElementById('feedback').innerHTML = `
            <li class="list-group-item">Farmer A: Excellent</li>
            <li class="list-group-item">Farmer B: Good</li>
            <li class="list-group-item">Farmer C: Needs Improvement</li>
        `;
    }

    // Call the update function every 5 seconds
    setInterval(updateData, 5000);
});
