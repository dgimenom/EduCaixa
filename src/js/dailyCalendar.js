const CALENDAR_HEIGHT = 44; //in  rem
const START_TIME = 9; // can only be oclock time in order to get integer slot
const END_TIME = 20; // can only be oclock time in order to get integer slot
const TIME_SLOTS = END_TIME - START_TIME;
const NUM_RANGE_WEEKS_RECEIVED = 2;
const TEMPLATE_FROM_JS = ``;

var data = 
{
	"date":"2021-01-12",
	"week":false,
	"center":"CaixaForum Barcelona",
	"groups":[
		{
			"id":10002,
			"name":"Grupo 2 1er batxillerat"
		},
		{
			"id":10006,
			"name":"Grupo 1 2on batxillerat"
		}
	],
	"activities":[
		{
			"articleId":"1111",
			"fblcActivityId":"AE-2392",
			"eventId":274,
			"title":"EDU REFLEXIONES Espejos 1",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"80",
				"price":"30.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610409600000,
			"promotions":null,
			"sessions":[
				{
					"id":2381,
					"eventId":274,
					"name":"EDU REFLEXIONES Espejos 1",
					"fblcActivityId":"AE-2392",
					"availability":28,
					"maxCapacity":80,
					"price":30.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610467200000,
					"endDatetime":1610474400000,
					"title":"EDU REFLEXIONES Espejos 1",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"80",
					"productPrice":"30.0",
					"categrories":null,
					"startDatetimeString":"2021-01-12T16:00:00Z",
					"startDateString":"2021-01-12",
					"endDatetimeString":"2021-01-12T18:00:00Z",
					"endDateString":"2021-01-12"
				}
			],
			"dateSessionString":"2021-01-12"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2734",
			"eventId":6013,
			"title":"Viaje topógico al centro de papel",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"150",
				"price":"20.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610496000000,
			"promotions":null,
			"sessions":[
				{
					"id":241579,
					"eventId":6013,
					"name":"Viaje topógico al centro de papel",
					"fblcActivityId":"AE-2734",
					"availability":-50,
					"maxCapacity":150,
					"price":20.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610557200000,
					"endDatetime":1610564400000,
					"title":"Viaje topógico al centro de papel",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"150",
					"productPrice":"20.0",
					"categrories":null,
					"startDatetimeString":"2021-01-13T17:00:00Z",
					"startDateString":"2021-01-13",
					"endDatetimeString":"2021-01-13T19:00:00Z",
					"endDateString":"2021-01-13"
				}
			],
			"dateSessionString":"2021-01-13"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2392",
			"eventId":274,
			"title":"EDU REFLEXIONES Espejos 1",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"80",
				"price":"30.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610236800000,
			"promotions":null,
			"sessions":[
				{
					"id":2379,
					"eventId":274,
					"name":"EDU REFLEXIONES Espejos 1",
					"fblcActivityId":"AE-2392",
					"availability":44,
					"maxCapacity":80,
					"price":30.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610287200000,
					"endDatetime":1610294400000,
					"title":"EDU REFLEXIONES Espejos 1",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"80",
					"productPrice":"30.0",
					"categrories":null,
					"startDatetimeString":"2021-01-10T14:00:00Z",
					"startDateString":"2021-01-10",
					"endDatetimeString":"2021-01-10T16:00:00Z",
					"endDateString":"2021-01-10"
				}
			],
			"dateSessionString":"2021-01-10"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2392",
			"eventId":274,
			"title":"EDU REFLEXIONES Espejos 1",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"80",
				"price":"30.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1609718400000,
			"promotions":null,
			"sessions":[
				{
					"id":2373,
					"eventId":274,
					"name":"EDU REFLEXIONES Espejos 1",
					"fblcActivityId":"AE-2392",
					"availability":92,
					"maxCapacity":80,
					"price":30.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1609747200000,
					"endDatetime":1609754400000,
					"title":"EDU REFLEXIONES Espejos 1",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"80",
					"productPrice":"30.0",
					"categrories":null,
					"startDatetimeString":"2021-01-04T08:00:00Z",
					"startDateString":"2021-01-04",
					"endDatetimeString":"2021-01-04T10:00:00Z",
					"endDateString":"2021-01-04"
				}
			],
			"dateSessionString":"2021-01-04"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2734",
			"eventId":6013,
			"title":"Viaje topógico al centro de papel",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"150",
				"price":"20.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610323200000,
			"promotions":null,
			"sessions":[
				{
					"id":241577,
					"eventId":6013,
					"name":"Viaje topógico al centro de papel",
					"fblcActivityId":"AE-2734",
					"availability":-20,
					"maxCapacity":150,
					"price":20.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610377200000,
					"endDatetime":1610384400000,
					"title":"Viaje topógico al centro de papel",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"150",
					"productPrice":"20.0",
					"categrories":null,
					"startDatetimeString":"2021-01-11T15:00:00Z",
					"startDateString":"2021-01-11",
					"endDatetimeString":"2021-01-11T17:00:00Z",
					"endDateString":"2021-01-11"
				}
			],
			"dateSessionString":"2021-01-11"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2734",
			"eventId":6013,
			"title":"Viaje topógico al centro de papel",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"150",
				"price":"20.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610150400000,
			"promotions":null,
			"sessions":[
				{
					"id":241575,
					"eventId":6013,
					"name":"Viaje topógico al centro de papel",
					"fblcActivityId":"AE-2734",
					"availability":10,
					"maxCapacity":150,
					"price":20.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610197200000,
					"endDatetime":1610204400000,
					"title":"Viaje topógico al centro de papel",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"150",
					"productPrice":"20.0",
					"categrories":null,
					"startDatetimeString":"2021-01-09T13:00:00Z",
					"startDateString":"2021-01-09",
					"endDatetimeString":"2021-01-09T15:00:00Z",
					"endDateString":"2021-01-09"
				}
			],
			"dateSessionString":"2021-01-09"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2392",
			"eventId":274,
			"title":"EDU REFLEXIONES Espejos 1",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"80",
				"price":"30.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1609891200000,
			"promotions":null,
			"sessions":[
				{
					"id":2375,
					"eventId":274,
					"name":"EDU REFLEXIONES Espejos 1",
					"fblcActivityId":"AE-2392",
					"availability":76,
					"maxCapacity":80,
					"price":30.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1609927200000,
					"endDatetime":1609934400000,
					"title":"EDU REFLEXIONES Espejos 1",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"80",
					"productPrice":"30.0",
					"categrories":null,
					"startDatetimeString":"2021-01-06T10:00:00Z",
					"startDateString":"2021-01-06",
					"endDatetimeString":"2021-01-06T12:00:00Z",
					"endDateString":"2021-01-06"
				}
			],
			"dateSessionString":"2021-01-06"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2734",
			"eventId":6013,
			"title":"Viaje topógico al centro de papel",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"150",
				"price":"20.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1609804800000,
			"promotions":null,
			"sessions":[
				{
					"id":241571,
					"eventId":6013,
					"name":"Viaje topógico al centro de papel",
					"fblcActivityId":"AE-2734",
					"availability":70,
					"maxCapacity":150,
					"price":20.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1609837200000,
					"endDatetime":1609844400000,
					"title":"Viaje topógico al centro de papel",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"150",
					"productPrice":"20.0",
					"categrories":null,
					"startDatetimeString":"2021-01-05T09:00:00Z",
					"startDateString":"2021-01-05",
					"endDatetimeString":"2021-01-05T11:00:00Z",
					"endDateString":"2021-01-05"
				}
			],
			"dateSessionString":"2021-01-05"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2392",
			"eventId":274,
			"title":"EDU REFLEXIONES Espejos 1",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"80",
				"price":"30.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1610064000000,
			"promotions":null,
			"sessions":[
				{
					"id":2377,
					"eventId":274,
					"name":"EDU REFLEXIONES Espejos 1",
					"fblcActivityId":"AE-2392",
					"availability":60,
					"maxCapacity":80,
					"price":30.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610107200000,
					"endDatetime":1610114400000,
					"title":"EDU REFLEXIONES Espejos 1",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"80",
					"productPrice":"30.0",
					"categrories":null,
					"startDatetimeString":"2021-01-08T12:00:00Z",
					"startDateString":"2021-01-08",
					"endDatetimeString":"2021-01-08T14:00:00Z",
					"endDateString":"2021-01-08"
				}
			],
			"dateSessionString":"2021-01-08"
		},
		{
			"articleId":null,
			"fblcActivityId":"AE-2734",
			"eventId":6013,
			"title":"Viaje topógico al centro de papel",
			"description":null,
			"imageUrl":null,
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"",
				"date":null,
				"capacity":"150",
				"price":"20.0",
				"locationId":null
			},
			"matched":true,
			"dateSession":1609977600000,
			"promotions":null,
			"sessions":[
				{
					"id":241573,
					"eventId":6013,
					"name":"Viaje topógico al centro de papel",
					"fblcActivityId":"AE-2734",
					"availability":40,
					"maxCapacity":150,
					"price":20.0,
					"typeOfPrice":"GROUP",
					"startDatetime":1610017200000,
					"endDatetime":1610024400000,
					"title":"Viaje topógico al centro de papel",
					"description":null,
					"imageUrl":null,
					"activityPlanId":0,
					"schoolGroupSessionId":0,
					"friendlyUrl":null,
					"productCenterName":"",
					"productCapacity":"150",
					"productPrice":"20.0",
					"categrories":null,
					"startDatetimeString":"2021-01-07T11:00:00Z",
					"startDateString":"2021-01-07",
					"endDatetimeString":"2021-01-07T13:00:00Z",
					"endDateString":"2021-01-07"
				}
			],
			"dateSessionString":"2021-01-07"
		},
		{
			"articleId":null,
			"fblcActivityId":null,
			"eventId":5,
			"title":"Toca la luz",
			"description":"Descubre la importancia de la fotÃ¯Â¿Â½nica",
			"imageUrl":"https://educaixa.org/documents/10180/58938061/toca+la+luz/0bc710fd-07ef-fc2d-4676-e518b2a3016a?t=1613736196363",
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"CaixaForum Barcelona",
				"date":null,
				"capacity":"Grupo m&aacute;ximo, 35 alumnos",
				"price":"35 &euro; / grupo (No incluye entrada al Museo) 42 &euro; / grupo entrada al Museo",
				"locationId":null
			},
			"matched":false,
			"dateSession":1609891200000,
			"promotions":[
				{
					"id":1938,
					"name":"LKXA 50%",
					"status":"ACTIVE",
					"type":"PROMOTION",
					"startDate":1613394104868,
					"endDate":1618491704868
				}
			],
			"sessions":null,
			"dateSessionString":"2021-01-06"
		},
		{
			"articleId":null,
			"fblcActivityId":null,
			"eventId":6,
			"title":"Deep Sky",
			"description":"Descubre qu&aecute; se esconde en el espacio m&aacute;s lejano",
			"imageUrl":"https://educaixa.org/documents/10180/59119551/deep+sky+2/754efc3e-c8c7-c871-db9b-2d92cb95b707?t=1614096122920",
			"activityPlanId":0,
			"friendlyUrl":null,
			"product":{
				"centerName":"CaixaForum Barcelona",
				"date":null,
				"capacity":"Grupo m&aacute;ximo, 35 alumnos",
				"price":"60 &euro; / grupo (No incluye entrada al Museo) 42 &euro; / grupo entrada al Museo",
				"locationId":null
			},
			"matched":false,
			"dateSession":1609977600000,
			"promotions":[
				{
					"id":1938,
					"name":"LKXA 50%",
					"status":"ACTIVE",
					"type":"PROMOTION",
					"startDate":1613394104868,
					"endDate":1618491704868
				}
			],
			"sessions":null,
			"dateSessionString":"2021-01-07"
		}
	]
};
var currentDate = data.date;
var savedData = [];
var localStorageMock = 
[//max 2 groups
  {
    groupSchoolId: 10002,
    sessions:[ //max 2 sessions

      {
        sessionId: 2381,
        articleId: 111111,
        startDate: "2021-01-12T09:00:00Z",
      },
    ]
  },
  {
    groupSchoolId: 10006,
    sessions:[ //max 2 sessions

      {
        sessionId: 222,
        articleId: 111111,
        startDate: "2021-01-12T09:00:00Z",
      },
    ]
  }
];

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
Handlebars.registerHelper("overviewTime", function (time) {
  const date = new Date(time);
  const currentHours = ("0" + date.getHours()).substr(-2);
  const currentMinutes = ("0" + date.getMinutes()).substr(-2);
  const hourFormatted = currentHours + ":" + currentMinutes + "h"; 
  const dateFormatted = date.toLocaleDateString().split("/").join(".");;
  return dateFormatted + " - " + hourFormatted;
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
Handlebars.registerHelper('json', function(context) {
  return JSON.stringify(context);
});

function renderElements(dataInfo) {
  // Rendering handlebars template
  const templateFromHtml = $("#handlebars-daily-calendar").html();
  const templateScript = Handlebars.compile(templateFromHtml);
  const renderedTemplate = templateScript(dataInfo);
  $("#daily-calendar").empty();
  $("#daily-calendar").append(renderedTemplate);

  // Set height scheduling grid
  document.getElementById("calendar-events").style.height = CALENDAR_HEIGHT + "rem";

  // Add group options in dropdowns
  const optionsTemplate = `{{#each groups}}<option id="option-{{id}}" value="{{id}}">{{name}}</option>{{/each}}`;
  const templateScriptOptions = Handlebars.compile(optionsTemplate);
  const renderedTemplateOptions = templateScriptOptions(data);
  $(".class-selector").append(renderedTemplateOptions);

  // Load group sessions
  loadFromLocalStorage();

  updateSelectedEvents()

  updateDropdownEvents();

  updateOverview();
}

function updateDropdownEvents(){
  // Toggle event mobile version
  $(".calendar__modal-link").off(".calendar__modal-link").on("click", function () {
    $(this).toggleClass("open");
  });
  $(".calendar__modal-close").off(".calendar__modal-close").on("click", function () {
    $(".calendar__modal-link").removeClass("open");
  });

  // Click event add to waitlist
  $(".add-waitlist").off("click").on("click", function () {
    console.log("TODO: Add to waitlist with ID:" + $(this).attr("data-session-id"));
  });

  // Change event dropdown sessions
  $(".session-form-mobile").off("change").on("change", function () {
    console.log('mobile do same');
  });
  $(".session-form-desktop").off("change").on("change", function (e) {
    const groupId = parseInt($(this).find("option:selected").attr("value"));
    const sessionId = $(this).attr("data-session-id");
    var jsonSession = JSON.parse(e.target.getAttribute('data-session-object'));
    if(groupId && groupId !== " "){
      addToLocal(groupId, jsonSession);
    }else{
      console.log("delete to local");
    }
    //1. Check if local has same group
    //2. Save into local storage
    //3. Rerender?
    renderElements(selectActivities(currentDate));
  });
}

function addToLocal(groupId, jsonSession){
  // CASE 1: Nothing saved in local storage
  if(localStorage.length <= 0){
    var temp = [];
    var newActivity = {
      schoolId: groupId,
      schoolName: groupId,
      sessions: [
        {
          articleId: groupId,
          fblcActivityId: groupId,
          eventId: groupId,

          id: jsonSession.id,
          eventId: jsonSession.eventId,
          name: jsonSession.name,
          fblcActivityId: jsonSession.fblcActivityId,
          availability: jsonSession.availability,
          maxCapacity: jsonSession.maxCapacity,
          price: jsonSession.price,
          startTime: jsonSession.startDatetimeString
        }
      ]
    };
    temp.push(newActivity);
    savedData = temp;
    localStorage.setItem("daily_data", JSON.stringify(savedData));
    console.log("CASE1: saved from empty localstorage", temp);
  }else{
    // CASE 2: Something saved in storage
    console.log("CASE 2: storage exists");
  }
}

function updateSelectedEvents(){
  var sessionID, sessionMobileID, element, mobileElement;
  savedData.forEach(group => {
    group.sessions.forEach(session => {
      sessionID = "session-" + session.sessionId;
      element = document.getElementById(sessionID);      
      if(element){
        var temp = element.children[0].children[2];
        for (let i = 0; i < temp.children.length; i++) {
          //matches group
          const v1 = parseInt(temp.children[i].getAttribute("value"));
          const v2 = group.groupSchoolId;
          //martches session
          const s1 = parseInt(temp.getAttribute("data-session-id"));
          const s2 = session.sessionId;
          if(v1 === v2 && s1 === s2){
            temp.children[i].setAttribute("selected", "selected");
          }
        }
        element.classList.remove("calendar__border--gray");
        element.classList.add("calendar__border--blue");
      }
      sessionMobileID = "session-mobile-" + session.sessionId;
      mobileElement = document.getElementById(sessionMobileID);
      if(mobileElement){
        var temp = mobileElement.children[0].children[2];
        for (let i = 0; i < temp.children.length; i++) {
          //matches group
          const v1 = parseInt(temp.children[i].getAttribute("value"));
          const v2 = group.groupSchoolId;
          //martches session
          const s1 = parseInt(temp.getAttribute("data-session-id"));
          const s2 = session.sessionId;
          if(v1 === v2 && s1 === s2){
            temp.children[i].setAttribute("selected", "selected");
          }
        }
        mobileElement.classList.remove("calendar__border--gray");
        mobileElement.classList.add("calendar__border--blue");
      }
    });

    updateDropdownEvents();
  });
}

function toggleSessions(id) {
  const button = document.getElementById("toggle-" + id);
  const x = document.getElementById("mobile-sessions-" + id);
  if (x.style.display === "none") {
    x.style.display = "block";
    button.innerHTML = "Oculta les sessions";
  } else {
    x.style.display = "none";
    button.innerHTML = "Mostra les sessions";
  }
  button.classList.toggle("arrow-rotation");
}

function datesAreOnSameDay(first, second) {
  return (
    first.getFullYear() === second.getFullYear() &&
    first.getMonth() === second.getMonth() &&
    first.getDate() === second.getDate()
  );
}

function pullNewData(newDate) {
  var basePortletURL = "<%=getSessionsByDateURL%>";
  var actionURL = Liferay.Util.PortletURL.createActionURL(basePortletURL, {
    date: newDate,
    weekOrDay: "day",
  });
  $("#actionURLWithJS").attr("href", actionURL.toString());
  $("#actionURLWithJSButton").click();
}

var weekendCounter = 0;
function changeDay(increment) {
  const currentDay = new Date(currentDate);
  const dayName = currentDay.toLocaleDateString("es-ES", { weekday: "long" });
  const weekendMultiplier =
    (dayName === "viernes" && increment > 0) ||
    (dayName === "lunes" && increment < 0)
      ? 3
      : 1;
  const n = currentDay.getTime() + weekendMultiplier * increment * 86400000;
  const nextDay = new Date(n);
  currentDate =
    nextDay.getFullYear() +
    "-" +
    (nextDay.getMonth() + 1) +
    "-" +
    nextDay.getDate();

  //Check if we have to update data from local json or pull new info
  if (weekendMultiplier === 3) weekendCounter++; //
  if (
    (increment < 0 && weekendMultiplier === 3) ||
    (increment > 0 &&
      weekendMultiplier === 3 &&
      weekendCounter >= NUM_RANGE_WEEKS_RECEIVED)
  ) {
    const currentDateFormatted =
      nextDay.getDate() +
      "/" +
      (nextDay.getMonth() + 1) +
      "/" +
      nextDay.getFullYear();
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

function deleteLocalstorage(){
  localStorage.removeItem("daily_data");
  savedData = [];
  renderElements(selectActivities(currentDate));
  console.log("DELETED");
}

function loadFromLocalStorage() {
  var retrievedObject = localStorage.getItem("daily_data");
  if (retrievedObject) {
    console.log("retrievedObject: ", JSON.parse(retrievedObject));
    savedData = JSON.parse(retrievedObject);
  } else {
    console.log("no local storage info");
  }
}

function updateOverview(){
  const templateFromHtml = $("#handlebars-resume-calendar").html();
  const templateScript = Handlebars.compile(templateFromHtml);
  const renderedTemplate = templateScript(savedData);
  $("#resume-activities").empty();
  $("#resume-activities").append(renderedTemplate);
}

//Initial render daily calendar
renderElements(selectActivities(currentDate));