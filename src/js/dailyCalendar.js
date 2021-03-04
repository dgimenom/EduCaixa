const data = [
  {
    date: "03/25/2015",
    activities: [
      {
        id: "1",
        title: "Comunica´t. Taller d´expressió corporal",
        maximum: "Máx 230 alumnes",
        price: "35$ per grup",
        events: [
          {
            startTime: "09:30",
            endTime: "11:30",
            remaining: "11 places disponibles",
          },
          {
            startTime: "12:30",
            endTime: "14:30",
            remaining: "22 places disponibles",
          },
          {
            empty: true,
            startTime: "16:00",
            endTime: "18:00",
            remaining: "33 places disponibles",
          },
        ],
      },
      {
        id: "2",
        title: "Comunica´t. Taller d´expressió corporal 2",
        maximum: "Máx 30 alumnes",
        price: "25$ per grup",
        events: [
          {
            startTime: "09:00",
            endTime: "18:00",
            remaining: "11 places disponibles",
          },
        ],
      },
    ],
  },
  {
    date: "04/25/2015",
    activities: [
      {
        id: "2",
        title: "Comunica´t. Taller d´expressió corporal 2",
        maximum: "Máx 30 alumnes",
        price: "25$ per grup",
        events: [
          {
            startTime: "09:00",
            endTime: "18:00",
            remaining: "11 places disponibles",
          },
        ],
      },
    ],
  },
];

// const data2 = 
// [
//   {​
//     date: "03/03/2021",
//     week: true,
//     center: "CaixaForum Barcelona",
//     groups: [
//       {
//         ​
//         id: 1,
//         name: "Bachillerato A",
//       }​,
//       {
//         ​
//         id: 2,
//         name: "Bachillerato B",
//       }​
//     ],
//     activities: [
//       {      ​
//         fblcActivityId: "11111",
//         eventId: "11111",
//         title: "Comunica´t. Taller d´expressió corporal",
//         imageUrl: "http://www.google.es",
//         activityPlanId: "1111",
//         friendlyUrl: "http://www.google.es",
//         product: {
//           ​
//           centerName: "",
//           date: "",
//           capacity: "Máx 230 alumnes",
//           price: "35$ per grup",
//           locationId: "",
//         }​,
//         matched: true,
//         promotions: [
//           {​
//             id: 1,
//             name: "Taller Comunicate + Visita guiada 50% descuento",
//             status: "ACTIVE",
//             type: "PROMOTION",
//             startDate: "yyyy-MM-ddThh:mm:ss",
//             endDate: "yyyy-MM-ddThh:mm:ss",
//           }, 
//         ​],
//         sessions: [
//           {
//             startDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             endDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             availability: 11,
//             maxCapacity: 40,
//           }​,
//           { ​
//             startDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             endDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             availability: 11,
//             maxCapacity: 40,
//           }​,
//           { ​
//             startDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             endDatetime: "yyyy-MM-dd'T'hh:mm:ss",
//             availability: 11,
//             maxCapacity: 40,
//           }​,
//         ],
//       },​
//     ],
//   },
// ];

const templateConst = `...`;
const CALENDAR_HEIGHT = 49.375;
const TIME_SLOTS = 9;

// HANDLEBAR PIPES (calculate styles to properly place the events in the daily calendar)
Handlebars.registerHelper("convertOffset", function (start) {
  const startValue = parseInt(start.split(":")[0] + start.split(":")[1]);
  return (((startValue - 900) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS + "rem";
});
Handlebars.registerHelper("convertHeight", function (start, end) {
  const startValue = parseInt(start.split(":")[0] + start.split(":")[1]);
  const endValue = parseInt(end.split(":")[0] + end.split(":")[1]);
  return (
    (((endValue - startValue) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS + "rem"
  );
});

function renderElements(data) {
  const template = $("#handlebars-daily-calendar").html();
  const templateScript = Handlebars.compile(template);
  const html = templateScript(data);
  $("#daily-calendar").empty();
  $("#daily-calendar").append(html);
  document.getElementById("calendar-events").style.height =
    CALENDAR_HEIGHT + "rem";
}
function toggleSessions(id) {
  const button = document.getElementById("toggle-" + id);
  const x = document.getElementById("sessions-" + id);
  if (x.style.display === "none") {
    x.style.display = "block";
    button.innerHTML = "Oculta les sessions";
  } else {
    x.style.display = "none";
    button.innerHTML = "Mostra les sessions";
  }
  button.classList.toggle("arrow-rotation");
}

function updateData() {
  const randomDay = Math.floor(Math.random() * data.length);
  renderElements(data[randomDay]);
}

renderElements(data[0]);

$(".calendar__modal-link").on("click", function () {
  $(this).toggleClass("open");
});

$(".calendar__modal-close").on("click", function () {
  $(".calendar__modal-link").removeClass("open");
});
