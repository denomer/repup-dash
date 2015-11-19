export default {
  dataLine: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'My First dataset',
        fillColor: 'rgba(220,220,220,0.2)',
        strokeColor: 'rgba(220,220,220,1)',
        pointColor: 'rgba(220,220,220,1)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  },

  dataPie: [
    {
      value: 300,
      color: '#F7464A',
      highlight: '#FF5A5E',
      label: 'TripAdvisor'
    },
    {
      value: 50,
      color: '#46BFBD',
      highlight: '#5AD3D1',
      label: 'Agoda'
    },
    {
      value: 100,
      color: '#FDB45C',
      highlight: '#FFC870',
      label: 'MakeMyTrip'
    }
  ]
};
