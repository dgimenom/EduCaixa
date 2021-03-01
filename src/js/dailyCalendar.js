var context = [
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
            time: "09:30h - 10:30h",
            remaining: "11 places disponibles",
          },
          {
            time: "09:30h - 10:30h",
            remaining: "22 places disponibles",
          },
          {
            empty: true,
            time: "09:30h - 10:30h",
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
            time: "09:30h - 10:30h",
            remaining: "22 places disponibles",
          },
          {
            time: "09:30h - 10:30h",
            remaining: "22 places disponibles",
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
        title: "TITLE",
        events: [
          {
            time: "12:12",
            remaining: "26",
          },
        ],
      },
    ],
  },
];

// TODO: Fill with template from html
const templateConst = `...`;

renderElements(context[0]);

function renderElements(context) {
  var template = $("#handlebars-demo").html();
  var templateScript = Handlebars.compile(template);
  var html = templateScript(context);
  $("#daily-calendar").append(html);
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

$(window).resize(function () {
  if (window.innerWidth >= 600) {
    console.log("ACTUALITZO", window.innerWidth);

  }
});
