import { Chart } from 'chart.js';

function getColor (isActive, alpha = 1) {
  return isActive
    ? `rgba(54, 162, 235, ${alpha})`
    : `rgba(255, 99, 132, ${alpha})`;
}

function getLabel (el, i, data) {
  const date = new Date();
  date.setHours(date.getHours() - data.length + i);
  date.setMinutes(0);
  date.setSeconds(0);
  date.setMilliseconds(0);
  return date.toLocaleString('ru');
}

export function createChart (container, data, isActive) {
  const ctx = container.getContext('2d');

  const borderColor = getColor(isActive);
  const backgroundColor = getColor(isActive, 0.5);

  const chart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: data.map(getLabel),
      datasets: [
        {
          data: data,
          borderWidth: 1,
          borderColor: borderColor,
          backgroundColor: backgroundColor
        }
      ]
    },
    options: {
      legend: {
        display: false
      },
      scales: {
        xAxes: [{ticks: {display: false}}],
        yAxes: [{ticks: {beginAtZero: true}}]
      },
      layout: {
        padding: {
          right: 7
        }
      }
    }
  });

  return chart;
}
