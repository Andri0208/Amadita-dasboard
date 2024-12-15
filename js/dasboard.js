const ctx = document.getElementById('myChart');
const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio'],
        datasets: [
            {
                label: 'Asegurado', 
                data: [-800, -30, 380, 360, -320, -300, -310], 
                borderColor: 'rgba(255, 99, 132, 1)', 
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                fill: false // 
            },
            {
                label: 'No asegurado',
                data: [-700, 3, 20, 5, 1, 4, 10],
                borderColor: 'rgba(93, 114, 133, 1)',
                backgroundColor: 'rgba(93, 114, 133, 0.2)',
                fill: false
            }
        ]
    },
    options: {
        responsive: true,
        scales: {
            y: {
                beginAtZero: true
            }
        }
    }
});

document.querySelector('.navbar-toggle').addEventListener('click', function () {
    const navbar = document.querySelector('.navbar-collapse');
    navbar.classList.toggle('show');
  });
  