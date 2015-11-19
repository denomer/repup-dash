export default {
  negativeDataLine: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'negative Reviews',
        fillColor: 'rgba(255,0,0,0.3)',
        strokeColor: 'rgba(255,0,0,0.3)',
        pointColor: 'rgba(255,0,0,0.3)',
        pointStrokeColor: '#fff',
        pointHighlightFill: '#fff',
        pointHighlightStroke: 'rgba(220,220,220,1)',
        data: [65, 59, 80, 81, 56, 55, 40]
      }
    ]
  },
  positiveDataLine: {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {  
        label: 'postive Reviews',
        fillColor: 'rgba(0,255,0,0.3)',
        strokeColor: 'rgba(0,255,0,0.3)',
        pointColor: 'rgba(0,255,0,0.3)',
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
  ],

  datatable: [
    {
      ota:"Goibobo",
      score: 4,
      totalReviews: 23
    },
    {
      ota:"Agoda",
      score: 4,
      totalReviews: 23
    },
    {
      ota:"MakeMytrip",
      score: 4,
      totalReviews: 23
    },
    {
      ota:"Booking",
      score: 4,
      totalReviews: 23
    }
  ]
  
};
