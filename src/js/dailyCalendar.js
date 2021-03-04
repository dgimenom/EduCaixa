const data = 
[
  {
    "​date":"03/03/2021",
    "week":true,
    "center":"CaixaForum Barcelona",
    "groups":[
      {
        "id":1,
        "name":"Bachillerato A"
      },
      {
        "id":2,
        "name":"Bachillerato B"
      },
    ],
    "activities":[
      {
        "fblcActivityId":"1",
        "eventId":"1",
        "title":"Comunica´t. Taller d´expressió corporal",
        "imageUrl":"http://www.google.es",
        "activityPlanId":"1111",
        "friendlyUrl":"http://www.google.es",
        "product":{
          "​centerName":"",
          "date":"",
          "capacity":"Máx 230 alumnes",
          "price":"35$ per grup",
          "locationId":"",
        },
        "matched":true,
        "promotions":[
          {
            "​id":1,
            "name":"Taller Comunicate + Visita guiada 50% descuento",
            "status":"ACTIVE",
            "type":"PROMOTION",
            "startDate":"2021-03-03T09:30:00",
            "endDate":"2021-03-03T09:30:00",
          },
        ],
        "sessions":[
          {
            "startDatetime":"2021-03-03T09:30:00",
            "endDatetime":"2021-03-03T11:30:00",
            "availability":11,
            "maxCapacity":40,
          },
          {
            "startDatetime":"2021-03-03T12:30:00",
            "endDatetime":"2021-03-03T14:30:00",
            "availability":22,
            "maxCapacity":40,
          },
          {
            "startDatetime":"2021-03-03T16:30:00",
            "endDatetime":"2021-03-03T18:00:00",
            "availability":33,
            "maxCapacity":40,
          },
        ],
      },
      {
        "fblcActivityId":"2",
        "eventId":"2",
        "title":"Comunica´t. Taller d´expressió corporal 2",
        "imageUrl":"http://www.google.es",
        "activityPlanId":"1111",
        "friendlyUrl":"http://www.google.es",
        "product":{
          "​centerName":"",
          "date":"",
          "capacity":"Máx 230 alumnes",
          "price":"35$ per grup",
          "locationId":"",
        },
        "matched":false,
        "promotions":[
          {
            "​id":1,
            "name":"Taller Comunicate + Visita guiada 50% descuento",
            "status":"ACTIVE",
            "type":"PROMOTION",
            "startDate":"2021-03-03T09:30:00",
            "endDate":"2021-03-03T09:30:00",
          },
        ],
        "sessions":[
          {
            "startDatetime":"2021-03-03T09:30:00",
            "endDatetime":"2021-03-03T18:00:00",
            "availability":33,
            "maxCapacity":40,
          },
        ],
      },
    ],
  },
];

const template = 
`
<div class="daily-calendar-container">
<div class="empty"></div>
<div class="time">
  <p>
    09:00h
  </p>
  <p>
    10:00h
  </p>
  <p>
    11:00h
  </p>
  <p>
    12:00h
  </p>
  <p>
    13:00h
  </p>
  <p>
    14:00h
  </p>
  <p>
    15:00h
  </p>
  <p>
    16:00h
  </p>
  <p>
    17:00h
  </p>
  <p>
    18:00h
  </p>
</div>
<div class="activities">
  {{#each activities}}
    <div class="activity" style="width: 100%; margin: 0 1rem;">
      <!-- ACTIVITY CONTAINER -->
      <div class="calendar__item p-0">
        <div class="calendar__leyend black"></div>
        <div class="calendar__info">
          <div>
            <p class="title">
              <strong>
                {{title}}
              </strong>
            </p>
            <p class="maximum">
              {{product.capacity}}
            </p>
            <p class="price">
              {{product.price}}
            </p>
            <a class="discount mb-3 d-block calendar__modal-link">
              <span class="item-activity__ico--porcent"></span>
              Descompte
            </a>
            <div
              class="card-course__element typografy__four calendar__modal"
              id=""
            >
              <a class="calendar__modal-close">
                x
              </a>
              <div>
                <span class="item-activity__ico--porcent"></span>
                <span>
                  Pack descompte
                </span>
              </div>
              {{#each promotions}}
                <p
                  class="circular-Std-Book color-grayMedium circular-Std-Bold"
                >
                  {{name}}
                </p>
              {{/each}}
            </div>
          </div>
          <a class="link__blue calendar__modal-link">
            Més informació
          </a>
          <div class="card-course__element calendar__modal" id="">
            <a class="calendar__modal-close">
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
                  Nulla at ipsum vitae neque consectetur dictum. Vivamus vitae dolor augue. Cras ornare tempor scelerisque. Nunc libero lorem, ornare ac venenatis eget, faucibus eget sem. Pellentesque posuere massa ut.
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
        id="toggle-{{activityPlanId}}"
        class="toggle-link link__blue link--underline down-arrow"
        onclick="toggleSessions('{{activityPlanId}}')"
      >
        Mostra les sessions
      </a>
      <!-- SESSIONS CONTAINER -->
      <div class="sessions-mobile">
        <div id="sessions-{{activityPlanId}}" style="display: none">
          {{#each sessions}}
            {{#if empty}}
              <div
                class="calendar__item large calendar__border--light-gray"
              >
                <div>
                  <p class="color-grayLight">
                    {{startDatetime}} - {{endDatetime}}h
                  </p>
                  <p class="mb-3 color-gray">
                    <span class="item-activity__ico--alert"></span>
                    {{maxCapacity}}
                  </p>
                  <a href="#" class="link__black">
                    <span class="item-activity__ico--plus"></span>
                    Agegeix a la lista d´espera
                  </a>
                </div>
              </div>
            {{else}}
              <div class="calendar__item large calendar__border--blue">
                <div>
                  <p class="color-educaixa-secundary">
                    {{convertTime startDatetime}} - {{convertTime endDatetime}}
                  </p>
                  <p class="color-gray">
                    <span class="item-activity__ico--alert"></span>
                    {{availability}}
                  </p>
                  <select
                    name="form-class"
                    class="form-select form-control error-field"
                  >
                    <option value="option-1">
                      Grup 1. 1r de Batxillerat A
                    </option>
                    <option value="option-2">
                      Grup 2. 1r de Batxillerat A
                    </option>
                  </select>
                </div>
              </div>
            {{/if}}
          {{/each}}
        </div>
      </div>
    </div>
  {{/each}}
</div>
<div class="events" id="calendar-events">
  {{#each activities}}
    <div class="activity" style="width: 100%; margin: 0 1rem;">
      <div id="sessions-{{activityPlanId}}" style="position: relative;">
        {{#each sessions}}
          {{#if empty}}
            <div
              class="calendar__item large calendar__border--light-gray"
              style="position: absolute; margin-top: {{
                convertOffset startDatetime
              }}; height: {{convertHeight startTime endDatetime}};"
            >
              <div>
                <p class="color-grayLight">
                  {{convertTime startDatetime}} - {{convertTime
                    endDatetime
                  }}
                </p>
                <p class="mb-3 color-gray">
                  <span class="item-activity__ico--alert"></span>
                  {{availability}}
                </p>
                <a href="#" class="link__black">
                  <span class="item-activity__ico--plus"></span>
                  Agegeix a la lista d´espera
                </a>
              </div>
            </div>
          {{else}}
            <div
              class="calendar__item large calendar__border--blue"
              style="position: absolute; margin-top: {{
                convertOffset startDatetime
              }}; height: {{convertHeight startDatetime endDatetime}};"
            >
              <div>
                <p class="color-educaixa-secundary">
                  {{convertTime startDatetime}} - {{convertTime endDatetime}}
                </p>
                <p class="color-gray">
                  <span class="item-activity__ico--alert"></span>
                  {{availability}}
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
              </div>
            </div>
          {{/if}}
        {{/each}}
      </div>
    </div>
  {{/each}}
</div>
</div>
`;

const CALENDAR_HEIGHT = 49.375;
const TIME_SLOTS = 9;

// HANDLEBAR PIPES (calculate styles to properly place the events in the daily calendar)
Handlebars.registerHelper("convertTime", function (time) {
  const date = new Date(time);
  const currentHours = ("0" + date.getHours()).substr(-2);
  const currentMinutes = ("0" + date.getMinutes()).substr(-2);
  return `${currentHours}:${currentMinutes}`;
});
Handlebars.registerHelper("convertOffset", function (start) {
  const date = new Date(start)
  const startValue = parseInt(date.getHours() * 100 +  date.getMinutes());
  return (((startValue - 900) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS + "rem";
});
Handlebars.registerHelper("convertHeight", function (start, end) {
  const startDate = new Date(start)
  const endDate = new Date(end)
  const startValue = parseInt(startDate.getHours() * 100 +  startDate.getMinutes());
  const endValue = parseInt(endDate.getHours() * 100 +  endDate.getMinutes());
  return (
    (((endValue - startValue) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS + "rem"
  );
});

function renderElements(data) {
  const templateFromHtml = $("#handlebars-daily-calendar").html();
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
  const res = JSON.parse(JSON.stringify(data));
  const randomDay = Math.floor(Math.random() * data.length);
  renderElements(res[randomDay]);
}

updateData();

$(".calendar__modal-link").on("click", function () {
  $(this).toggleClass("open");
});

$(".calendar__modal-close").on("click", function () {
  $(".calendar__modal-link").removeClass("open");
});
