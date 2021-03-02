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
            offset: "2.78rem",
            range: "11.11rem",
            remaining: "11 places disponibles",
          },
          {
            startTime: "12:30",
            endTime: "14:30",
            offset: "19.4rem",
            range: "11.11rem",
            remaining: "22 places disponibles",
          },
          {
            empty: true,
            startTime: "16:00",
            endTime: "18:00",
            offset: "38.8rem",
            range: "11.11rem",
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
            offset: "0rem",
            range: "11.11rem",
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
        id: "1",
        title: "Comunica´t. Taller d´expressió corporal",
        maximum: "Máx 230 alumnes",
        price: "35$ per grup",
        events: [
          {
            startTime: "09:30",
            endTime: "11:30",
            offset: "2.78rem",
            range: "11.11rem",
            remaining: "11 places disponibles",
          },
          {
            startTime: "12:30",
            endTime: "14:30",
            offset: "19.4rem",
            range: "11.11rem",
            remaining: "22 places disponibles",
          },
          {
            empty: true,
            startTime: "16:00",
            endTime: "18:00",
            offset: "38.8rem",
            range: "11.11rem",
            remaining: "33 places disponibles",
          },
        ],
      },
    ],
  },
];
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
  console.log('RANDOM DAY: ' + data[randomDay].date);
  renderElements(data[randomDay]);
}

renderElements(data[0]);
