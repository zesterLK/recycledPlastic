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

      // Data Set 2
      // {
      //   //  Chart Label
      //   label: "Framework",

      //   // Actual Data
      //   data: [10, 8, 3, 7, 8, 9],

      //   // Background Color
      //   backgroundColor: [
      //     "rgba(255, 97, 132, 0.2)",
      //     "rgba(54, 16, 235, 0.2)",
      //     "rgba(255, 26, 86, 0.2)",
      //     "rgba(75, 12, 192, 0.2)",
      //     "rgba(153, 2, 255, 0.2)",
      //     "rgba(255, 19, 64, 0.2)",
      //   ],
      // },
    ],
  },

  // Configuration options go here
  options: {
    // Set Responsiveness By Default Its True
    // When Its True Canvas Width Height won't work
    responsive: false,

    // Set Padding
    layout: {
      padding: {
        left: 50,
        right: 0,
        top: 0,
        bottom: 0,
      },
    },

    // Configure ToolTips
    tooltips: {
      enabled: true, // Enable/Disable ToolTip By Default Its True
      backgroundColor: "red", // Set Tooltip Background Color
      titleFontFamily: "Comic Sans MS", // Set Tooltip Title Font Family
      titleFontSize: 30, // Set Tooltip Font Size
      titleFontStyle: "bold italic",
      titleFontColor: "yellow",
      titleAlign: "center",
      titleSpacing: 3,
      titleMarginBottom: 50,
      bodyFontFamily: "Comic Sans MS",
      bodyFontSize: 20,
      bodyFontStyle: "italic",
      bodyFontColor: "black",
      bodyAlign: "center",
      bodySpacing: 3,
    },

    // Custom Chart Title
    title: {
      display: true,
      text: "Custom Chart Title",
      position: "bottom",
      fontSize: 25,
      fontFamily: "Comic Sans MS",
      fontColor: "red",
      fontStyle: "bold italic",
      padding: 20,
      lineHeight: 5,
    },

    // Legends Configuration
    legend: {
      display: true,
      position: "bottom", // top left bottom right
      align: "end", // start end center
      labels: {
        fontColor: "red",
        fontSize: 16,
        boxWidth: 20,
      },
    },

    animation: {
      duration: 3000,
      easing: "easeInOut",
    },

    // We have Three Events - events which take string array, onHover and Onclick which take function
    // Example of events
    // This chart will not respond to mousemove, etc
    // mousemove, mouseout, click, touchstart, touchmove
    // events: ["click"],

    // onClick Example
    // onClick: function () {
    //   console.log("On Click");
    // },

    // onHover Example - It will work
    // onHover: function () {
    //   console.log("On Hover");
    // },
  },
});
