function getLanguage(name) {
  var value = '; ' + document.cookie;
  var parts = value.split('; ' + name + '=');
  if (parts.length === 2)
    return parts
      .pop()
      .split(';')
      .shift();
}

var klaroConfig = {
  // You can customize the ID of the DIV element that Klaro will create
  // when starting up. If undefined, Klaro will use 'klaro'.
  elementID: 'klaro',

  // You can customize the name of the cookie that Klaro uses for storing
  // user consent decisions. If undefined, Klaro will use 'klaro'.
  cookieName: 'socsWeb',

  // You can also set a custom expiration time for the Klaro cookie.
  // By default, it will expire after 120 days.
  cookieExpiresAfterDays: 365,

  // You can customize the name of the cookie that Klaro will use to
  // store user consent. If undefined, Klaro will use 'klaro'.

  // Put a link to your privacy policy here (relative or absolute).
  privacyPolicy: '/#privacy',

  // Defines the default state for applications (true=enabled by default).
  default: false,

  // If "mustConsent" is set to true, Klaro will directly display the consent
  // manager modal and not allow the user to close it before having actively
  // consented or declines the use of third-party apps.
  mustConsent: false,

  // You can define the UI language directly here. If undefined, Klaro will
  // use the value given in the global "lang" variable. If that does
  // not exist, it will use the value given in the "lang" attribute of your
  // HTML tag. If that also doesn't exist, it will use 'en'.
  lang: 'nl',
  // This is a list of third-party apps that Klaro will manage for you.
  apps: [
    // The apps will appear in the modal in the same order as defined here.
    {
      name: 'functional',
      title: 'Functionele cookies',
      purposes: ['functional'],
      required: true
    },
    {
      name: 'social',
      title: 'Sociale cookies',
      purposes: ['socialMedia']
    },
    {
      name: 'tracking',
      title: 'Tracking cookies',
      purposes: ['tracking'],
      cookies: [
        [/^_gid.*$/, '/'],
        [/^_ga.*$/, '/'],
        [/^_gat.*$/, '/']
      ]
    }
  ],
  translations: {
    nl: {
      purposes: {
        functional: 'Functioneel',
        socialMedia:
          "social media koppeling zoals: Facebook, Twitter en Youtube video's",
        tracking: 'O.a. Google Maps en Google Analytics'
      },
      functional: {
        description:
          'Om deze website naar behoren te laten functioneren plaatst de school functionele cookies. Deze cookies gebruiken geen persoonsgegevens en staan daarom standaard aan'
      },
      tracking: {
        description:
          'Ik wil dat mijn website bezoek gemeten mag worden: hiermee staat u het plaatsen van analytische cookies toe, op deze manier kunnen we het websitebezoek meten: bijvoorbeeld hoevaak onze site wordt bezocht en welke informatie bezoekers zoeken.'
      },
      social: {
        description:
          'Ik wil Sociale Media koppelingen: hiermee staat u het plaatsen van cookies door social medianetwerken toe, deze netwerken kunnen u volgen en uw internetgedrag gebruiken voor andere doeleinden.'
      }
    }
  }
};
