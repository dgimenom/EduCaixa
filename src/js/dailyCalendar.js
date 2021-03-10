/* daily calendar.js */

const CALENDAR_HEIGHT = 35.4375; //in  rem
const START_TIME = 9; // can only be oclock time in order to get integer slot
const END_TIME = 20; // can only be oclock time in order to get integer slot
const TIME_SLOTS = END_TIME - START_TIME;
const NUM_RANGE_WEEKS_RECEIVED = 2;
const TEMPLATE_FROM_JS = `
<div class="time-day-container">
<div class="fc-toolbar-chunk">
		<button
				class="fc-prev-button fc-button fc-button-primary"
				type="button"
				aria-label="prev"
				onclick="changeDay(-1)"
		>
				<span class="fc-icon fc-icon-chevron-left"></span>
		</button>
</div>
<div class="fc-toolbar-chunk">
		<h2 class="time-day-title">
				{{convertDaily date}}
		</h2>
		{{#if center}}
				<h4 class="time-day-subtitle">
						{{center}}
				</h4>
		{{/if}}
</div>
<div class="fc-toolbar-chunk">
		<button
				class="fc-next-button fc-button fc-button-primary"
				type="button"
				aria-label="next"
				onclick="changeDay(1)"
		>
				<span class="fc-icon fc-icon-chevron-right"></span>
		</button>
</div>
</div>
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
<p>
19:00h
</p>
<p>
20:00h
</p>
</div>
<div class="activities">
{{#unless activities}}
		<h5 class="warning" style="margin: auto; color: #4176db; font-style: italic;">
				<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.NO.ACTIVITIES")%>
		</h5>
{{/unless}}
{{#each activities}}
		<div class="activity-container">
				<!-- ACTIVITY CONTAINER -->
				<div class="calendar__item p-0">
						{{#if matched}}
								<div class="calendar__leyend blue"></div>
						{{else}}
								<div class="calendar__leyend black"></div>
						{{/if}}
						<div class="calendar__info">
								<div>
										<p class="title">
												<strong>
														{{title}}
												</strong>
										</p>
										<p class="maximum">
												{{{product.capacity}}}
										</p>
										<p class="price">
												{{{product.price}}}
										</p>
										{{#if promotions}}
												<a class="discount mb-3 d-block calendar__modal-link">
														<span class="item-activity__ico--porcent"></span>
														<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.PROMOTION")%>
												</a>
												<div class="card-course__element typografy__four calendar__modal" id="">
														<a class="calendar__modal-close">
																x
														</a>
														<div>
																<span class="item-activity__ico--porcent"></span>
																<span>
																<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.PROMOTION.PACK")%>
																</span>
														</div>
														{{#each promotions}}
																<p id="{{id}}" class="circular-Std-Book color-grayMedium circular-Std-Bold">
																		{{name}}
																</p>
														{{/each}}
												</div>
										{{/if}}
								</div>
								<a class="more-info link__blue calendar__modal-link">
								<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.MORE.INFO")%>
								</a>
								<div class="card-course__element calendar__modal" id="">
										<a class="calendar__modal-close">
												x
										</a>
										<div class="col-lg-12 p-0">
												{{#if imageUrl}}
														<div class="card-course__img">
																<a href="{{friendlyUrl}}">
																		<img alt="" class="image" src="{{imageUrl}}" />
																</a>
														</div>
												{{/if}}
												<div>
														<div class="d-flex mb-1 typografy__five justify-content-between">
																<span class="color-educaixa-secundary session-time">
																<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.ACTIVITY")%>
																		<span class="circular-Std-Bold">
																		<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.GUIDED.VISIT")%>
																		</span>
																</span>
														</div>
														<a class="link__black link--no-underline" href="{{friendlyUrl}}">
																<h3 class="card-course__title">
																		{{title}}
																</h3>
														</a>
														<p class="card-course__summary">
																{{description}}
														</p>
												</div>
												<div class="card-course__description">
														<p class="circular-Std-Bold">
																{{product.centerName}}
														</p>
												</div>
										</div>
								</div>
						</div>
				</div>
				<!-- HIDE/SHOW LINK -->
				<a id="toggle-{{activityPlanId}}" class="toggle-link link__blue link--underline down-arrow" onclick="toggleSessions('{{activityPlanId}}')">
				<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.SHOW.SESSIONS")%>
				</a>
				<!-- SESSIONS CONTAINER -->
				<div class="sessions-mobile">
						<div id="sessions-{{activityPlanId}}" style="display: none">
								{{#each sessions}}
										{{#if startDatetimeString}}
												<div class="calendar__item large calendar__border--light-gray">
														<div>
																<p class="color-grayLight">
																		{{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
																</p>
																<p class="mb-3 color-gray">
																		<span class="item-activity__ico--alert"></span>
																		{{maxCapacity}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
																</p>
																<a href="#" class="link__black">
																		<span class="item-activity__ico--plus"></span>
																		<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.ADD.WAITLIST")%>
																</a>
														</div>
												</div>
										{{else}}
												<div class="calendar__item large calendar__border--gray">
														<div>
																<p class="color-educaixa-secundary">
																		{{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
																</p>
																<p class="color-gray session-places">
																		{{maxCapacity}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
																</p>
																<select name="form-class" class="form-select form-control class-selector class-selector">
																		<option value="">
																		<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.CHOOSE.GROUP")%>
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
		<div class="activity-container">
				<div id="sessions-{{activityPlanId}}" style="position: relative;">
						{{#each sessions}}
								{{#if (lte availability 0)}}
										<div class="calendar__item large calendar__border--light-gray" style="position: absolute; margin-top: {{
														convertOffset startDatetimeString
												}}; height: {{
														convertHeight startDatetimeString endDatetimeString
												}};"
										>
												<div>
														<p class="color-grayLight">
																{{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
														</p>
														<p class="mb-3 color-gray">
																<span class="item-activity__ico--alert"></span>
																Sense places disponibles
																<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.NO.AVAILABILITY")%>
														</p>
														<a href="#" class="link__black">
																<span class="item-activity__ico--plus"></span>
																<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.ADD.WAITLIST")%>
														</a>
												</div>
										</div>
								{{else}}
										<div
												class="calendar__item large calendar__border--gray"
												style="position: absolute; margin-top: {{
														convertOffset startDatetimeString
												}}; height: {{
														convertHeight startDatetimeString endDatetimeString
												}};"
										>
												<div>
														<p class="color-educaixa-secundary session-time">
																{{convertTime startDatetimeString}} - {{convertTime
																		endDatetimeString
																}} h
														</p>
														<p class="color-gray session-places">
																{{availability}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
														</p>
														<select name="form-class" class="form-select form-control class-selector">
																<option value="">
																<%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.CHOOSE.GROUP")%>
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
var data = {
  date: "2021-01-13",
  week: false,
  center: "CaixaForum Barcelona",
  groups: [
    {
      id: 10002,
      name: "Grupo 2 test",
    },
  ],
  activities: [
    {
      fblcActivityId: "AE-1819",
      eventId: 274,
      title: "DNIT Concerts",
      description: null,
      imageUrl: null,
      activityPlanId: 0,
      friendlyUrl: null,
      product: {
        centerName: "",
        date: null,
        capacity: "80",
        price: "30.0",
        locationId: null,
      },
      matched: true,
      promotions: null,
      sessions: [
        {
          availability: 28,
          maxCapacity: 80,
          startDatetimeString: "2021-01-12T09:00:00Z",
          endDatetimeString: "2021-01-12T12:00:00Z",
        },
        {
          availability: 28,
          maxCapacity: 80,
          startDatetimeString: "2021-01-12T15:00:00Z",
          endDatetimeString: "2021-01-12T17:00:00Z",
        },
      ],
      dateSessionString: "2021-01-12",
    },
    {
      fblcActivityId: "AE-1813",
      eventId: 6013,
      title: "Escucha nuestra musica",
      description: null,
      imageUrl: null,
      activityPlanId: 0,
      friendlyUrl: null,
      product: {
        centerName: "",
        date: null,
        capacity: "150",
        price: "20.0",
        locationId: null,
      },
      matched: true,
      promotions: null,
      sessions: [
        {
          availability: 50,
          maxCapacity: 150,
          startDatetimeString: "2021-01-13T14:00:00Z",
          endDatetimeString: "2021-01-13T17:00:00Z",
        },
      ],
      dateSessionString: "2021-01-13",
    },
    {
      fblcActivityId: "AE-1813",
      eventId: 6013,
      title: "Escucha nuestra musica 2",
      description: null,
      imageUrl: null,
      activityPlanId: 0,
      friendlyUrl: null,
      product: {
        centerName: "",
        date: null,
        capacity: "150",
        price: "20.0",
        locationId: null,
      },
      matched: true,
      promotions: null,
      sessions: [
        {
          availability: -50,
          maxCapacity: 150,
          startDatetimeString: "2021-01-13T09:00:00Z",
          endDatetimeString: "2021-01-13T12:00:00Z",
        },
      ],
      dateSessionString: "2021-01-13",
    },
    {
      fblcActivityId: null,
      eventId: 5,
      title: "Toca la luz",
      description: "Descubre la importancia de la fotónica",
      imageUrl:
        "https://educaixa.org/documents/10180/58938061/toca+la+luz/0bc710fd-07ef-fc2d-4676-e518b2a3016a?t=1613736196363",
      activityPlanId: 0,
      friendlyUrl: null,
      product: {
        centerName: "CaixaForum Barcelona",
        date: null,
        capacity: "Grupo m&aacute;ximo, 35 alumnos",
        price:
          "35 &euro; / grupo (No incluye entrada al Museo) 42 &euro; / grupo entrada al Museo",
        locationId: null,
      },
      matched: false,
      promotions: [
        {
          id: 1938,
          name: "LKXA 50%",
          status: "ACTIVE",
          type: "PROMOTION",
          startDate: 1612875745366,
          endDate: 1617973345366,
        },
      ],
      sessions: null,
      dateSessionString: "2021-01-06",
    },
    {
      fblcActivityId: null,
      eventId: 6,
      title: "Deep Sky",
      description:
        "Descubre qu&aecute; se esconde en el espacio m&aacute;s lejano",
      imageUrl:
        "https://educaixa.org/documents/10180/59119551/deep+sky+2/754efc3e-c8c7-c871-db9b-2d92cb95b707?t=1614096122920",
      activityPlanId: 0,
      friendlyUrl: null,
      product: {
        centerName: "CaixaForum Barcelona",
        date: null,
        capacity: "Grupo m&aacute;ximo, 35 alumnos",
        price:
          "60 &euro; / grupo (No incluye entrada al Museo) 42 &euro; / grupo entrada al Museo",
        locationId: null,
      },
      matched: false,
      promotions: [
        {
          id: 1938,
          name: "LKXA 50%",
          status: "ACTIVE",
          type: "PROMOTION",
          startDate: 1612875745367,
          endDate: 1617973345367,
        },
      ],
      sessions: null,
      dateSessionString: "2021-01-07",
    },
  ],
};
var currentDate = data.date;

// Handlebars template pipes
Handlebars.registerHelper({
  eq: (v1, v2) => v1 === v2,
  ne: (v1, v2) => v1 !== v2,
  lt: (v1, v2) => v1 < v2,
  gt: (v1, v2) => v1 > v2,
  lte: (v1, v2) => v1 <= v2,
  gte: (v1, v2) => v1 >= v2,
  and() {
    return Array.prototype.every.call(arguments, Boolean);
  },
  or() {
    return Array.prototype.slice.call(arguments, 0, -1).some(Boolean);
  },
});
Handlebars.registerHelper("convertTime", function (time) {
  const date = new Date(time);
  const currentHours = ("0" + date.getHours()).substr(-2);
  const currentMinutes = ("0" + date.getMinutes()).substr(-2);
  return currentHours + ":" + currentMinutes;
});
Handlebars.registerHelper("convertDaily", function (date) {
  const dateObject = new Date(date);
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };
  return dateObject.toLocaleDateString("es-ES", options);
});
Handlebars.registerHelper("convertOffset", function (start) {
  const date = new Date(start);
  const startValue = parseInt(date.getHours() * 100 + date.getMinutes());
  return (
    (((startValue - START_TIME * 100) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS +
    "rem"
  );
});
Handlebars.registerHelper("convertHeight", function (start, end) {
  const startDate = new Date(start);
  const endDate = new Date(end);
  const startValue = parseInt(
    startDate.getHours() * 100 + startDate.getMinutes()
  );
  const endValue = parseInt(endDate.getHours() * 100 + endDate.getMinutes());
  return (
    (((endValue - startValue) / 100) * CALENDAR_HEIGHT) / TIME_SLOTS + "rem"
  );
});

function renderElements(dataInfo) {
  // Rendering handlebars template
  const templateFromHtml = $("#handlebars-daily-calendar").html();
  const templateScript = Handlebars.compile(TEMPLATE_FROM_JS);
  const renderedTemplate = templateScript(dataInfo);
  $("#daily-calendar").empty();
  $("#daily-calendar").append(renderedTemplate);

  // Set height scheduling grid
  document.getElementById("calendar-events").style.height = CALENDAR_HEIGHT + "rem";

		// Add group options in dropdowns
		const optionsTemplate = `{{#each groups}}<option id="option-{{id}}" value="{{id}}">{{name}}</option>{{/each}}`;
		const templateScriptOptions = Handlebars.compile(optionsTemplate);
  const renderedTemplateOptions = templateScriptOptions(data);
		console.log(renderedTemplateOptions);
		$( ".class-selector" ).append(renderedTemplateOptions);

  // Create events for the popups discover and more info
  $(".calendar__modal-link").on("click", function () {
    $(this).toggleClass("open");
  });
  $(".calendar__modal-close").on("click", function () {
    $(".calendar__modal-link").removeClass("open");
  });
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

function updateData(position) {
  if (position != typeof Number) {
    const res = JSON.parse(JSON.stringify(data));
    renderElements(res[position]);
  } else {
    renderElements({});
  }
}

function datesAreOnSameDay(first, second) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function pullNewData(newDate) {
  console.log("UPDATE DATA WITH -> ", newDate);
  var basePortletURL = "<%=getSessionsByDateURL%>";
  // var actionURL = Liferay.Util.PortletURL.createActionURL(basePortletURL, {
  //   date: "10/07/2024",
  //   weekOrDay: "day",
  // });
}

var weekendCounter = 0;
function changeDay(increment) {
  const currentDay = new Date(currentDate);
  const dayName = currentDay.toLocaleDateString("es-ES", { weekday: "long" });
  const weekendMultiplier = (dayName === "viernes" && increment > 0) || (dayName === "lunes" && increment < 0) ? 3 : 1;
  const n = currentDay.getTime() + weekendMultiplier * increment * 86400000;
  const nextDay = new Date(n);
  currentDate = nextDay.getFullYear() + "-" + (nextDay.getMonth() + 1) + "-" + nextDay.getDate();

  //Check if we have to update data from local json or pull new info
  if (weekendMultiplier === 3) weekendCounter++; //
  if ((increment < 0 && weekendMultiplier === 3) || (increment > 0 && weekendMultiplier === 3 && weekendCounter >= NUM_RANGE_WEEKS_RECEIVED)) {
    const currentDateFormatted = nextDay.getDate() + "/" + (nextDay.getMonth() + 1) + "/" + nextDay.getFullYear();
    pullNewData(currentDateFormatted);
    weekendCounter = 0;
  } else {
    renderElements(selectActivities(currentDate));
  }
}

function selectActivities(date) {
  const filtered = {
    date: date,
    center: data.center,
    activities: [],
  };
  data.activities.forEach((activity) => {
    const d1 = new Date(date);
    const d2 = new Date(activity.dateSessionString);
    if (datesAreOnSameDay(d1, d2)) {
      filtered.activities.push(activity);
    }
  });
  return filtered;
}

renderElements(selectActivities(currentDate));
