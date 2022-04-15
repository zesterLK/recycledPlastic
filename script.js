var ctx = document.getElementById("myChart").getContext("2d");
// Creating Chart Class Object
var myChart = new Chart(ctx, {
  // Type of Chart - bar, line, pie, doughnut, radar, polarArea
  type: "line",

  // The data for our dataset
  data: {
    // Data Labels
    labels: [
      "1960",
      "1970",
      "1980",
      "1990",
      "2000",
      "2005",
      "2010",
      "2015",
      "2017",
      "2018",
    ],

    datasets: [
      // Data Set 1
      {
        label: ["Recycled"],
        data: [
          0, 0, 20000.0, 370000.0, 1480000.0, 1780000.0, 2500000, 3120000,
          3000000, 3090000,
        ],
        // Background Color
        backgroundColor: ["rgba(2, 32, 95, 0.2)"],
        borderColor: ["rgba(2, 32, 95, 1)"],
        fill: true,
      },

      {
        label: ["Composted"],
        data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        // Background Color
        backgroundColor: ["rgba(254, 192, 0, 0.2)"],
        borderColor: ["rgba(254, 192, 0, 0.2)"],
        fill: true,
      },

      {
        label: ["Combustion with Energy Recovery"],
        data: [
          0, 0, 140000, 2980000, 4120000, 4330000, 4530000, 5330000, 5590000,
          5620000,
        ],
        // Background Color
        backgroundColor: ["rgba(98, 196, 244, 0.2)"],
        borderColor: ["rgba(98, 196, 244, 1)"],
        fill: true,
      },

      {
        label: ["Landfill"],
        data: [
          390000, 2900000, 6670000, 13780000, 19950000, 23270000, 24370000,
          26030000, 26820000, 26970000,
        ],
        // Background Color
        backgroundColor: ["rgba(215, 215, 215, 0.2)"],
        borderColor: ["rgba(215, 215, 215, 1)"],
        fill: true,
      },
    ],
  },

  options: {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: (ctx) => "Plastics Waste Management: 1960-2018",
        color: "black",
        font: {
          size: 25,
        },
      },
      tooltip: {
        mode: "index",
      },
      legend: {
        title: {
          display: true,
          text: "Click on legend items below to customize items displayed in the chart",
        },
        position: "bottom",
      },
    },
    interaction: {
      mode: "nearest",
      axis: "x",
      intersect: false,
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
      y: {
        stacked: true,
        title: {
          display: true,
          text: "Tons",
          font: {
            weight: "bold",
            size: 20,
          },
        },
      },
    },
  },
});

//   options: {
//     responsive: true,
//     plugins: {
//       title: {
//         display: true,
//         text: (ctx) => "Plastics Waste Management: 1960-2018",
//       },
//       tooltip: {
//         mode: "index",
//       },
//       interaction: {
//         mode: "nearest",
//         axis: "x",
//         intersect: false,
//       },
//       scales: {
//         x: {
//           title: {
//             display: true,
//             text: "Year",
//             fontSize: 40,
//             fontStyle: "bold",
//           },
//         },
//         y: {
//           stacked: true,
//           title: {
//             display: true,
//             text: "Tons",
//             fontSize: 40,
//             fontStyle: "bold",
//           },
//         },
//       },
//     },
//     animation: {
//       duration: 3000,
//       easing: "easeInOut",
//     },
//   },
// });
// Configuration options go here
//   options: {
//     // Set Responsiveness By Default Its True
//     // When Its True Canvas Width Height won't work
//     responsive: true,

//     // Set Padding
//     // layout: {
//     //   padding: {
//     //     left: 50,
//     //     right: 0,
//     //     top: 0,
//     //     bottom: 0,
//     //   },
//     // },

//     // Configure ToolTips
//     tooltips: {
//       enabled: true, // Enable/Disable ToolTip By Default Its True
// backgroundColor: "red", // Set Tooltip Background Color
// titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
// titleFontSize: 30, // Set Tooltip Font Size
// titleFontStyle: "bold italic",
// titleFontColor: "yellow",
// titleAlign: "center",
// titleSpacing: 3,
// titleMarginBottom: 50,
// bodyFontFamily: "Comic Sans MS",
// bodyFontSize: 20,
// bodyFontStyle: "italic",
// bodyFontColor: "black",
// bodyAlign: "center",
// bodySpacing: 3,
//     },

//     // Custom Chart Title
//     title: {
//       display: true,
//       text: "Custom Chart Title",
//       position: "bottom",
//       fontSize: 25,
//       fontFamily: "Comic Sans MS",
//       fontColor: "red",
//       fontStyle: "bold italic",
//       padding: 20,
//       lineHeight: 5,
//     },

//     // Legends Configuration
//     legend: {
//       display: true,
//       position: "bottom", // top left bottom right
//       align: "end", // start end center
//       labels: {
//         fontColor: "red",
//         fontSize: 16,
//         boxWidth: 20,
//       },
//     },

//     // We have Three Events - events which take string array, onHover and Onclick which take function
//     // Example of events
//     // This chart will not respond to mousemove, etc
//     // mousemove, mouseout, click, touchstart, touchmove
//     // events: ["click"],

//     // onClick Example
//     // onClick: function () {
//     //   console.log("On Click");
//     // },

//     // onHover Example - It will work
//     // onHover: function () {
//     //   console.log("On Hover");
//     // },
//   },
// })
