const CALENDAR_HEIGHT = 44; //in  rem
const START_TIME = 9; // can only be oclock time in order to get integer slot
const END_TIME = 20; // can only be oclock time in order to get integer slot
const TIME_SLOTS = END_TIME - START_TIME;
const NUM_RANGE_WEEKS_RECEIVED = 2;
const DAILY_TEMPLATE_FROM_JS = `
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
    <h5 class="no-activities-warning">
      <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.NO.ACTIVITIES")%>
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
                {{{title}}}
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
                    {{{title}}}
                  </h3>
                </a>
                <p class="card-course__summary">
                  {{{description}}}
                </p>
              </div>
              <div class="card-course__description">
                <p class="circular-Std-Bold">
                  {{{product.centerName}}}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- HIDE/SHOW LINK -->
      <a id="toggle-{{activityPlanId}}" style="overflow: hidden;" class="toggle-link link__blue link--underline down-arrow" onclick="toggleSessions('{{activityPlanId}}')">
      <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.SHOW.SESSIONS")%>
      </a>
      <!-- SESSIONS CONTAINER -->
      <div class="sessions-mobile">
        <div id="mobile-sessions-{{activityPlanId}}" data-activity-plan="{{activityPlanId}}" style="display: none">
          {{#each sessions}}
          {{#if (lte availability 0)}}
              <div id="session-mobile-{{id}}" class="calendar__item large calendar__border--light-gray">
                <div style="width: 100%;">
                  <p class="color-grayLight">
                    {{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
                  </p>
                  <p class="mb-3 color-gray">
                    <span class="item-activity__ico--alert"></span>
                    {{maxCapacity}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
                  </p>
                  <a data-session-id="{{id}}" class="add-waitlist link__black">
                    <span class="item-activity__ico--plus"></span>
                    <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.ADD.WAITLIST")%>
                  </a>
                </div>
              </div>
            {{else}}
              <div id="session-mobile-{{id}}" class="calendar__item large calendar__border--gray">
                <div style="width: 100%;">
                  <p class="color-educaixa-secundary">
                    {{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
                  </p>
                  <p class="color-gray session-places">
                    {{maxCapacity}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
                  </p>
                  <select data-session-id="{{id}}" name="form-class" class="form-select form-control class-selector session-form-mobile">
                    <option value=" ">
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
      <div data-activity-plan="{{activityPlanId}}" style="position: relative;">
        {{#each sessions}}
          {{#if (lte availability 0)}}
            <div id="session-{{id}}" class="calendar__item large calendar__border--light-gray" style="position: absolute; margin-top: {{
                convertOffset startDatetimeString
              }}; height: {{
                convertHeight startDatetimeString endDatetimeString
              }};"
            >
              <div style="width: 100%;">
                <p class="color-grayLight">
                  {{convertTime startDatetimeString}} - {{convertTime endDatetimeString}} h
                </p>
                <p class="mb-3 color-gray session-text-wrap">
                  <span class="item-activity__ico--alert"></span>
                  Sense places disponibles
                  <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.NO.AVAILABILITY")%>
                </p>
                <a data-session-id="{{id}}" href="#" class="add-waitlist link__black session-text-wrap">
                  <span class="item-activity__ico--plus"></span>
                  <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "COM.EDUCAIXA.PLANNER.CHOOSESESSION.ADD.WAITLIST")%>
                </a>
              </div>
            </div>
          {{else}}
            <div
              id="session-{{id}}"
              class="calendar__item large calendar__border--gray"
              style="position: absolute; margin-top: {{
                convertOffset startDatetimeString
              }}; height: {{
                convertHeight startDatetimeString endDatetimeString
              }};"
            >
              <div class="session-container">
                <p class="color-educaixa-secundary session-time">
                  {{convertTime startDatetimeString}} - {{convertTime
                    endDatetimeString
                  }} h
                </p>
                <p class="color-gray session-places">
                  {{availability}} <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(),       "COM.EDUCAIXA.PLANNER.CHOOSESESSION.AVAILABILITY")%>
                </p>
                <select data-session-id="{{id}}" data-activity-object='{"activityPlanId":"{{activityPlanId}}", "articleId":"{{articleId}}", "fblcActivityId":"{{fblcActivityId}}", "eventId":"{{eventId}}" }' data-session-object='{{{json this}}}' name="form-class" class="form-select form-control class-selector session-form-desktop">
                  <option value=" ">
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
const RESUME_TEMPLATE_FROM_JS = `
{{#if this}}
<div class="calendar__summary">
  <p class="mb-2">
    Has
    <strong>
      seleccionat
    </strong>
    les següents sessions:
  </p>
  <div class="calendar__summary-item">
        {{#each this}}
        <div class="col-lg-6 calendar__summary-class">
          <div class="d-flex align-items-center">
            <div class="calendar__notification one me-2 mr-2">
              {{inc @index}}
            </div>
            <strong>
              {{schoolName}}
            </strong>
          </div>
          {{#each sessions}}
            <p class="color-gray">
              <a class="color-educaixa-secundary">
                {{name}} |</a> {{overviewTime startTime }}
            </p>
          {{/each}}
        </div>
        {{/each}}
      </div>
    </div>
{{else}}
  <div class="calendar__summary">
    <p class="mb-2">
      <%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "com.educaixa.planner.choosesession.here.it.will.be.shown") %>
      <strong><%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "com.educaixa.planner.choosesession.summary.sessions") %></strong>
    </p>
    <p><%=LiteralsToolsServiceUtil.getLiteral(themeDisplay.getScopeGroupId(), locale.toString(), "com.educaixa.planner.choosesession.no.sessions.selected") %></p>
  </div>
{{/if}}
`;

var data = {
  date: "2021-01-12",
  week: false,
  center: "CaixaForum Barcelona",
  groups: [
    {
      id: 10002,
      name: "1er batxillerat",
    },
    {
      id: 10006,
      name: "2on batxillerat",
    },
  ],
  activities: [
    {
      articleId: "1111",
      fblcActivityId: "AE-2392",
      eventId: 274,
      title: "EDU REFLEXIONES Espejos 1",
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
      dateSession: 1610409600000,
      promotions: null,
      sessions: [
        {
          id: 2381,
          eventId: 274,
          name: "EDU REFLEXIONES Espejos 1",
          fblcActivityId: "AE-2392",
          availability: 28,
          maxCapacity: 80,
          price: 30.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610467200000,
          endDatetime: 1610474400000,
          title: "EDU REFLEXIONES Espejos 1",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "80",
          productPrice: "30.0",
          categrories: null,
          startDatetimeString: "2021-01-12T16:00:00Z",
          startDateString: "2021-01-12",
          endDatetimeString: "2021-01-12T18:00:00Z",
          endDateString: "2021-01-12",
        },
      ],
      dateSessionString: "2021-01-12",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2734",
      eventId: 6013,
      title: "Viaje topógico al centro de papel",
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
      dateSession: 1610496000000,
      promotions: null,
      sessions: [
        {
          id: 241579,
          eventId: 6013,
          name: "Viaje topógico al centro de papel",
          fblcActivityId: "AE-2734",
          availability: -50,
          maxCapacity: 150,
          price: 20.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610557200000,
          endDatetime: 1610564400000,
          title: "Viaje topógico al centro de papel",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "150",
          productPrice: "20.0",
          categrories: null,
          startDatetimeString: "2021-01-13T17:00:00Z",
          startDateString: "2021-01-13",
          endDatetimeString: "2021-01-13T19:00:00Z",
          endDateString: "2021-01-13",
        },
      ],
      dateSessionString: "2021-01-13",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2392",
      eventId: 274,
      title: "EDU REFLEXIONES Espejos 1",
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
      dateSession: 1610236800000,
      promotions: null,
      sessions: [
        {
          id: 2379,
          eventId: 274,
          name: "EDU REFLEXIONES Espejos 1",
          fblcActivityId: "AE-2392",
          availability: 44,
          maxCapacity: 80,
          price: 30.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610287200000,
          endDatetime: 1610294400000,
          title: "EDU REFLEXIONES Espejos 1",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "80",
          productPrice: "30.0",
          categrories: null,
          startDatetimeString: "2021-01-10T14:00:00Z",
          startDateString: "2021-01-10",
          endDatetimeString: "2021-01-10T16:00:00Z",
          endDateString: "2021-01-10",
        },
      ],
      dateSessionString: "2021-01-10",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2392",
      eventId: 274,
      title: "EDU REFLEXIONES Espejos 1",
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
      dateSession: 1609718400000,
      promotions: null,
      sessions: [
        {
          id: 2373,
          eventId: 274,
          name: "EDU REFLEXIONES Espejos 1",
          fblcActivityId: "AE-2392",
          availability: 92,
          maxCapacity: 80,
          price: 30.0,
          typeOfPrice: "GROUP",
          startDatetime: 1609747200000,
          endDatetime: 1609754400000,
          title: "EDU REFLEXIONES Espejos 1",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "80",
          productPrice: "30.0",
          categrories: null,
          startDatetimeString: "2021-01-04T08:00:00Z",
          startDateString: "2021-01-04",
          endDatetimeString: "2021-01-04T10:00:00Z",
          endDateString: "2021-01-04",
        },
      ],
      dateSessionString: "2021-01-04",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2734",
      eventId: 6013,
      title: "Viaje topógico al centro de papel",
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
      dateSession: 1610323200000,
      promotions: null,
      sessions: [
        {
          id: 241577,
          eventId: 6013,
          name: "Viaje topógico al centro de papel",
          fblcActivityId: "AE-2734",
          availability: -20,
          maxCapacity: 150,
          price: 20.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610377200000,
          endDatetime: 1610384400000,
          title: "Viaje topógico al centro de papel",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "150",
          productPrice: "20.0",
          categrories: null,
          startDatetimeString: "2021-01-11T15:00:00Z",
          startDateString: "2021-01-11",
          endDatetimeString: "2021-01-11T17:00:00Z",
          endDateString: "2021-01-11",
        },
      ],
      dateSessionString: "2021-01-11",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2734",
      eventId: 6013,
      title: "Viaje topógico al centro de papel",
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
      dateSession: 1610150400000,
      promotions: null,
      sessions: [
        {
          id: 241575,
          eventId: 6013,
          name: "Viaje topógico al centro de papel",
          fblcActivityId: "AE-2734",
          availability: 10,
          maxCapacity: 150,
          price: 20.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610197200000,
          endDatetime: 1610204400000,
          title: "Viaje topógico al centro de papel",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "150",
          productPrice: "20.0",
          categrories: null,
          startDatetimeString: "2021-01-09T13:00:00Z",
          startDateString: "2021-01-09",
          endDatetimeString: "2021-01-09T15:00:00Z",
          endDateString: "2021-01-09",
        },
      ],
      dateSessionString: "2021-01-09",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2392",
      eventId: 274,
      title: "EDU REFLEXIONES Espejos 1",
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
      dateSession: 1609891200000,
      promotions: null,
      sessions: [
        {
          id: 2375,
          eventId: 274,
          name: "EDU REFLEXIONES Espejos 1",
          fblcActivityId: "AE-2392",
          availability: 76,
          maxCapacity: 80,
          price: 30.0,
          typeOfPrice: "GROUP",
          startDatetime: 1609927200000,
          endDatetime: 1609934400000,
          title: "EDU REFLEXIONES Espejos 1",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "80",
          productPrice: "30.0",
          categrories: null,
          startDatetimeString: "2021-01-06T10:00:00Z",
          startDateString: "2021-01-06",
          endDatetimeString: "2021-01-06T12:00:00Z",
          endDateString: "2021-01-06",
        },
      ],
      dateSessionString: "2021-01-06",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2734",
      eventId: 6013,
      title: "Viaje topógico al centro de papel",
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
      dateSession: 1609804800000,
      promotions: null,
      sessions: [
        {
          id: 241571,
          eventId: 6013,
          name: "Viaje topógico al centro de papel",
          fblcActivityId: "AE-2734",
          availability: 70,
          maxCapacity: 150,
          price: 20.0,
          typeOfPrice: "GROUP",
          startDatetime: 1609837200000,
          endDatetime: 1609844400000,
          title: "Viaje topógico al centro de papel",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "150",
          productPrice: "20.0",
          categrories: null,
          startDatetimeString: "2021-01-05T09:00:00Z",
          startDateString: "2021-01-05",
          endDatetimeString: "2021-01-05T11:00:00Z",
          endDateString: "2021-01-05",
        },
      ],
      dateSessionString: "2021-01-05",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2392",
      eventId: 274,
      title: "EDU REFLEXIONES Espejos 1",
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
      dateSession: 1610064000000,
      promotions: null,
      sessions: [
        {
          id: 2377,
          eventId: 274,
          name: "EDU REFLEXIONES Espejos 1",
          fblcActivityId: "AE-2392",
          availability: 60,
          maxCapacity: 80,
          price: 30.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610107200000,
          endDatetime: 1610114400000,
          title: "EDU REFLEXIONES Espejos 1",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "80",
          productPrice: "30.0",
          categrories: null,
          startDatetimeString: "2021-01-08T12:00:00Z",
          startDateString: "2021-01-08",
          endDatetimeString: "2021-01-08T14:00:00Z",
          endDateString: "2021-01-08",
        },
      ],
      dateSessionString: "2021-01-08",
    },
    {
      articleId: "22222",
      fblcActivityId: "AE-2734",
      eventId: 6013,
      title: "Viaje topógico al centro de papel",
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
      dateSession: 1609977600000,
      promotions: null,
      sessions: [
        {
          id: 241573,
          eventId: 6013,
          name: "Viaje topógico al centro de papel",
          fblcActivityId: "AE-2734",
          availability: 40,
          maxCapacity: 150,
          price: 20.0,
          typeOfPrice: "GROUP",
          startDatetime: 1610017200000,
          endDatetime: 1610024400000,
          title: "Viaje topógico al centro de papel",
          description: null,
          imageUrl: null,
          activityPlanId: 0,
          schoolGroupSessionId: 0,
          friendlyUrl: null,
          productCenterName: "",
          productCapacity: "150",
          productPrice: "20.0",
          categrories: null,
          startDatetimeString: "2021-01-07T11:00:00Z",
          startDateString: "2021-01-07",
          endDatetimeString: "2021-01-07T13:00:00Z",
          endDateString: "2021-01-07",
        },
      ],
      dateSessionString: "2021-01-07",
    },
    {
      articleId: "22222",
      fblcActivityId: null,
      eventId: 5,
      title: "Toca la luz",
      description: "Descubre la importancia de la fotÃ¯Â¿Â½nica",
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
      dateSession: 1609891200000,
      promotions: [
        {
          id: 1938,
          name: "LKXA 50%",
          status: "ACTIVE",
          type: "PROMOTION",
          startDate: 1613394104868,
          endDate: 1618491704868,
        },
      ],
      sessions: null,
      dateSessionString: "2021-01-06",
    },
    {
      articleId: "22222",
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
      dateSession: 1609977600000,
      promotions: [
        {
          id: 1938,
          name: "LKXA 50%",
          status: "ACTIVE",
          type: "PROMOTION",
          startDate: 1613394104868,
          endDate: 1618491704868,
        },
      ],
      sessions: null,
      dateSessionString: "2021-01-07",
    },
  ],
};
var currentDate = data.date;
var savedData = [];

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
  const dateFormatted = date.toLocaleDateString().split("/").join(".");
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
Handlebars.registerHelper("json", function (context) {
  return JSON.stringify(context);
});
Handlebars.registerHelper("inc", function (value) {
  return parseInt(value) + 1;
});

function renderElements(dataInfo) {
  // Rendering handlebars template
  const templateFromHtml = $("#handlebars-daily-calendar").html();
  const templateScript = Handlebars.compile(DAILY_TEMPLATE_FROM_JS);
  const renderedTemplate = templateScript(dataInfo);
  $("#daily-calendar").empty();
  $("#daily-calendar").append(renderedTemplate);

  // Set height scheduling grid
  document.getElementById("calendar-events").style.height =
    CALENDAR_HEIGHT + "rem";

  // Add group options in dropdowns
  const optionsTemplate = `{{#each groups}}<option id="option-{{id}}" value="{{id}}">{{name}}</option>{{/each}}`;
  const templateScriptOptions = Handlebars.compile(optionsTemplate);
  const renderedTemplateOptions = templateScriptOptions(data);
  $(".class-selector").append(renderedTemplateOptions);

  // Load group sessions
  loadFromLocalStorage();

  updateSelectedEvents();

  updateDropdownEvents();

  updateOverview();
}

function updateDropdownEvents() {
  // Toggle event mobile version
  $(".calendar__modal-link")
    .off(".calendar__modal-link")
    .on("click", function () {
      $(this).toggleClass("open");
    });
  $(".calendar__modal-close")
    .off(".calendar__modal-close")
    .on("click", function () {
      $(".calendar__modal-link").removeClass("open");
    });

  // Click event add to waitlist
  $(".add-waitlist")
    .off("click")
    .on("click", function () {
      console.log(
        "TODO: Add to waitlist with ID:" + $(this).attr("data-session-id")
      );
    });

  // Change event dropdown sessions
  $(".session-form-mobile")
    .off("change")
    .on("change", function () {
      const groupId = parseInt($(this).find("option:selected").attr("value"));
      const groupName = $(this).find("option:selected").html();
      const jsonGroup = {
        id: groupId,
        name: groupName,
      };
      const jsonSession = JSON.parse(
        e.target.getAttribute("data-session-object")
      );
      const jsonActivity = JSON.parse(
        e.target.getAttribute("data-activity-object")
      );
      if (jsonGroup.id !== " " && jsonGroup.id) {
        addToLocal(jsonGroup, jsonSession, jsonActivity);
      } else {
        console.log("DEBUG: DELETE TO LOCAL");
        checkExistSessionAndDelete(jsonSession.id);
      }
      renderElements(selectActivities(currentDate));
    });
  $(".session-form-desktop")
    .off("change")
    .on("change", function (e) {
      const groupId = parseInt($(this).find("option:selected").attr("value"));
      const groupName = $(this).find("option:selected").html();
      const jsonGroup = {
        id: groupId,
        name: groupName,
      };
      const jsonSession = JSON.parse(
        e.target.getAttribute("data-session-object")
      );
      const jsonActivity = JSON.parse(
        e.target.getAttribute("data-activity-object")
      );
      if (jsonGroup.id !== " " && jsonGroup.id) {
        addToLocal(jsonGroup, jsonSession, jsonActivity);
      } else {
        console.log("DEBUG: DELETE TO LOCAL");
        checkExistSessionAndDelete(jsonSession.id);
      }
      renderElements(selectActivities(currentDate));
    });
}

function checkExistAndAdd(jsonGroup, jsonSession, jsonActivity) {
  var temp = savedData;
  var foundGroupIndex;
  var isNew = true;
  temp.forEach((group, groupIndex) => {
    if (group.schoolId == jsonGroup.id) {
      isNew = false;
      foundGroupIndex = groupIndex;
    }
  });

  //no group found case
  if (isNew) {
    var newGroup = {
      schoolId: jsonGroup.id,
      schoolName: jsonGroup.name,
      sessions: [
        {
          activityPlanId: jsonActivity.activityPlanId,
          articleId: jsonActivity.articleId,
          fblcActivityId: jsonActivity.fblcActivityId,
          eventId: jsonActivity.eventId,
          id: jsonSession.id,
          eventId: jsonSession.eventId,
          name: jsonSession.name,
          fblcActivityId: jsonSession.fblcActivityId,
          availability: jsonSession.availability,
          maxCapacity: jsonSession.maxCapacity,
          price: jsonSession.price,
          startTime: jsonSession.startDatetimeString,
        },
      ],
    };
    temp.push(newGroup);
  } else {
    var tempSession = {
      activityPlanId: jsonActivity.activityPlanId,
      articleId: jsonActivity.articleId,
      fblcActivityId: jsonActivity.fblcActivityId,
      eventId: jsonActivity.eventId,
      id: jsonSession.id,
      eventId: jsonSession.eventId,
      name: jsonSession.name,
      fblcActivityId: jsonSession.fblcActivityId,
      availability: jsonSession.availability,
      maxCapacity: jsonSession.maxCapacity,
      price: jsonSession.price,
      startTime: jsonSession.startDatetimeString,
    };
    if (temp[foundGroupIndex].sessions.length <= 1) {
      temp[foundGroupIndex].sessions.push(tempSession);
    } else {
      console.log("DEBUG: TODO: POPUP!!!!");
    }
  }
  savedData = temp;
  localStorage.setItem("daily_data", JSON.stringify(savedData));
}

function checkExistSessionAndDelete(sessionId) {
  var tempSavedData = savedData;
  tempSavedData.forEach((group, groupIndex) => {
    group.sessions.forEach((session, sessionIndex) => {
      if (session.id === sessionId) {
        if (group.sessions.length == 1) {
          tempSavedData.splice(groupIndex, 1);
        }
        if (group.sessions.length == 2) {
          group.sessions.splice(sessionIndex, 1);
        }
      }
    });
  });
  savedData = tempSavedData;
  localStorage.setItem("daily_data", JSON.stringify(savedData));
}

function addToLocal(jsonGroup, jsonSession, jsonActivity) {
  if (savedData.length <= 0) {
    checkExistAndAdd(jsonGroup, jsonSession, jsonActivity);
  } else {
    checkExistSessionAndDelete(jsonSession.id);
    checkExistAndAdd(jsonGroup, jsonSession, jsonActivity);
  }
}

function updateSelectedEvents() {
  var sessionID, sessionMobileID, element, mobileElement;
  savedData.forEach((group) => {
    group.sessions.forEach((session) => {
      sessionID = "session-" + session.id;
      element = document.getElementById(sessionID);
      if (element) {
        var temp = element.children[0].children[2];
        for (let i = 0; i < temp.children.length; i++) {
          //matches group
          const g1 = parseInt(temp.children[i].getAttribute("value"));
          const g2 = group.schoolId;
          //matches session
          const s1 = parseInt(temp.getAttribute("data-session-id"));
          const s2 = session.id;
          if (g1 === g2 && s1 === s2) {
            temp.children[i].setAttribute("selected", "selected");
          }
        }
        element.classList.remove("calendar__border--gray");
        element.classList.add("calendar__border--blue");
      }
      sessionMobileID = "session-mobile-" + session.sessionId;
      mobileElement = document.getElementById(sessionMobileID);
      if (mobileElement) {
        var temp = mobileElement.children[0].children[2];
        for (let i = 0; i < temp.children.length; i++) {
          //matches group
          const v1 = parseInt(temp.children[i].getAttribute("value"));
          const v2 = group.groupSchoolId;
          //martches session
          const s1 = parseInt(temp.getAttribute("data-session-id"));
          const s2 = session.sessionId;
          if (v1 === v2 && s1 === s2) {
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

function deleteLocalstorage() {
  localStorage.removeItem("daily_data");
  savedData = [];
  renderElements(selectActivities(currentDate));
  console.log("DEBUG: deleted localstorage");
}

function loadFromLocalStorage() {
  var retrievedObject = localStorage.getItem("daily_data");
  if (retrievedObject) {
    savedData = JSON.parse(retrievedObject);
  } else {
    console.log("DEBUG: no local storage info");
  }
}

function updateOverview() {
  const templateFromHtml = $("#handlebars-resume-calendar").html();
  const templateScript = Handlebars.compile(templateFromHtml);
  // const templateScript = Handlebars.compile(RESUME_TEMPLATE_FROM_JS);
  const renderedTemplate = templateScript(savedData);
  $("#resume-activities").empty();
  $("#resume-activities").append(renderedTemplate);
}

//Initial render daily calendar
renderElements(selectActivities(currentDate));
