export default {
  scoreBasedData: {
    labels: ["Hotel1", "Hotel2", "Hotel3", "Hotel4","Hotel4","Hotel4","Hotel4"],
    datasets: [
      {
        label: "Hotel Compare Data",
        fillColor: "rgba(220,220,220,0.5)",
        strokeColor: "rgba(220,220,220,0.8)",
        highlightFill: "rgba(220,220,220,0.75)",
        highlightStroke: "rgba(220,220,220,1)",
        data: [65, 59, 80, 81,65,85,69]
      }
    ]
  },
  reviewBasedData: {
    labels: ["Hotel1", "Hotel2", "Hotel3", "Hotel4"],
    datasets: [
      {
        label: "Hotel Review Based Data Positive",
        fillColor: "rgba(0,255,0,0.3)",
        strokeColor: "rgba(0,255,0,0.3)",
        highlightFill: "rgba(0,255,0,0.3)",
        highlightStroke: "rgba(0,255,0,0.3)",
        data: [65, 59, 80, 81]
      },
      {
        label: "Hotel Review Based Data Negative",
        fillColor: "rgba(255,0,0,0.3)",
        strokeColor: "rgba(255,0,0,0.3)",
        highlightFill: "rgba(255,0,0,0.3)",
        highlightStroke: "rgba(255,0,0,0.3)",
        data: [30, 59, 70, 40]
      }
    ]
  },

  catagoryScoresData: [
    {
      hotelName:'Galaxy',
      catagories:[
        {
          catagoryName:'Washrooms',
          reviews:'6',
          score:'42',
          positiveReviews:'25',
          neutralReviews:'50',
          negativeReviews:'25'
        }
      ]
    }
  ],

  otaData: [
    {
      reviewPlatform:"TripAdvisor",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    },
    {
      reviewPlatform:"Booking",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    },
    {
      reviewPlatform:"Agoda",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    },
    {
      reviewPlatform:"MakeMyTrip",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    },
    {
      reviewPlatform:"Expedia",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    },
    {
      reviewPlatform:"Goibibo",
      data:[
        {
          hotelName:'Galaxy',
          reviews:'5',
          positiveReviews:'52',
          neutralReviews:'28',
          negativeReviews:'20'
        },
        {
          hotelName:'Star',
          reviews:'28',
          positiveReviews:'26',
          neutralReviews:'4',
          negativeReviews:'70'
        },
        {
          hotelName:'Moon',
          reviews:'55',
          positiveReviews:'82',
          neutralReviews:'14',
          negativeReviews:'4'
        }
      ]
    }
  ]
};