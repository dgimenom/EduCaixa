const context = [
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
const templateConst = `
{{#each activities}}
<div class="activity" style="width: 100%">
  <!-- ACTIVITY CONTAINER -->
  <div class="calendar__item p-0">
    <div class="calendar__leyend black"></div>
    <div>
      <p>
        <strong>
          {{title}}
        </strong>
      </p>
      <p>
        {{maximum}}
      </p>
      <p>
        {{price}}
      </p>
      <a class="link__blue calendar__modal-link">
        Más información
      </a>
      <div class="card-course__element calendar__modal" id="">
        <a class="calendar__modal-close" href="#">
          x
        </a>
        <div class="col-lg-12 p-0">
          <div class="card-course__img">
            <a>
              <img
                alt=""
                class="image"
                src="https://educaixa.org/documents/40415705/53887618/pruebasedu2.jpg/bc3d48fd-d310-4d17-99b5-4a6aff3a5d67?t=1605525095141"
              />
            </a>
          </div>
          <div>
            <div
              class="d-flex mb-1 typografy__five justify-content-between"
            >
              <span class="color-educaixa-secundary">
                Activitat |
                <span class="circular-Std-Bold">
                  Visita guiada
                </span>
              </span>
              <label class="card-course__tag">
                afegida
              </label>
            </div>
            <a
              class="link__black link--no-underline"
              href="https://educaixa.org/es/-/aprendizaje-colaborativo"
            >
              <h3 class="card-course__title">
                Poètiques de l'emoció
              </h3>
            </a>
            <p class="card-course__summary">
              Nulla at ipsum vitae neque consectetur dictum. Vivamus
                vitae dolor augue. Cras ornare tempor scelerisque. Nunc
                libero lorem, ornare ac venenatis eget, faucibus eget
                sem. Pellentesque posuere massa ut.
            </p>
          </div>
          <div class="card-course__link-container">
            <a
              onclick=""
              class="link__black link--underline"
              href="https://educaixa.org/es/resultados?q=metodologías de innovación"
            >
              Voz,
            </a>
            <a
              onclick=""
              class="link__black"
              href="https://educaixa.org/es/resultados?q=aprendizaje cooperativo"
            >
              Cuerpo
            </a>
            ,
            <a
              onclick=""
              class="link__black link--underline"
              href="https://educaixa.org/es/resultados?q=EduCaixaTalks"
            >
              Teatro
            </a>
          </div>
          <div class="card-course__description">
            <p class="circular-Std-Bold">
              CaixaForum Barcelona
            </p>
            <p class="circular-Std-Bold">
              Disponible a partir 23.01.2019
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- HIDE/SHOW LINK -->
  <a
    id="toggle-{{id}}"
    class="toggle-link link__blue link--underline down-arrow"
    onclick="toggleSessions('{{id}}')"
  >
    Mostra les sessions
  </a>

  <!-- SESSIONS CONTAINER -->
  <div id="sessions-{{id}}" style="display: none">
    {{#each events}}
      {{#if empty}}
        <div
          class="calendar__item large calendar__border--light-gray"
          data-date="2021-01-04"
          data-start="2021-01-04T08:30:00"
          data-end="2021-01-04T11:00:00"
        >
          <div>
            <p class="color-grayLight">
              {{time}}
            </p>
            <p class="mb-3 color-gray">
              <span class="item-activity__ico--alert"></span>
              {{remaining}}
            </p>
            <a href="#" class="link__black">
              <span class="item-activity__ico--plus"></span>
              Agegeix a la
            lista d´espera
            </a>
          </div>
        </div>
      {{else}}
        <div
          class="calendar__item large calendar__border--blue"
          data-date="2021-01-20"
          data-start="2021-01-20T11:00:00"
          data-end="2021-01-20T13:00:00"
        >
          <div>
            <p class="color-educaixa-secundary">
              {{time}}
            </p>
            <p class="color-gray">
              <span class="item-activity__ico--alert"></span>
              {{remaining}}
            </p>
            <select
              name="form-class"
              class="form-select form-control error-field"
            >
              <option value="volvo">
                Grup 1. 1r de Batxillerat A
              </option>
              <option value="saab">
                Grup 2. 1r de Batxillerat A
              </option>
            </select>
            <!-- <datalist
              class="form-select form-control error-field"
              id="select-2"
              name="select-2"
              title="perfil-profesional"
              aria-errormessage="select-2Helper"
              aria-invalid="true"
            >
              <div
                class="d-flex align-items-center calendar__item-datalist"
              >
                <div class="calendar__notification one me-2">
                  1
                </div>
                <strong>
                  Grup 1. 1r de Batxillerat A
                </strong>
              </div>
            </datalist> -->
          </div>
        </div>
      {{/if}}
    {{/each}}
  </div>
</div>
{{/each}}
`;

renderElements(context[0]);

function renderElements(context) {
  var template = $("#handlebars-demo").html();
  var templateScript = Handlebars.compile(templateConst);
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
