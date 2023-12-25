// ╔╗ ╔═╗╔╗╔╔╦╗╔═╗
// ╠╩╗║╣ ║║║ ║ ║ ║
// ╚═╝╚═╝╝╚╝ ╩ ╚═╝
// ┌─┐┌─┐┌┐┌┌─┐┬┌─┐┬ ┬┬─┐┌─┐┌┬┐┬┌─┐┌┐┌
// │  │ ││││├┤ ││ ┬│ │├┬┘├─┤ │ ││ ││││
// └─┘└─┘┘└┘└  ┴└─┘└─┘┴└─┴ ┴ ┴ ┴└─┘┘└┘

const CONFIG = {
  // ┌┐ ┌─┐┌─┐┬┌─┐┌─┐
  // ├┴┐├─┤└─┐││  └─┐
  // └─┘┴ ┴└─┘┴└─┘└─┘

  // General
  name: "Joe",
  imageBackground: false,
  openInNewTab: true,
  twelveHourFormat: true,

  // Greetings
  greetingMorning: "Good morning!",
  greetingAfternoon: "Good afternoon,",
  greetingEvening: "Good evening,",
  greetingNight: "Go to Sleep!",

  // Layout
  bentoLayout: "lists", // 'bento', 'lists', 'buttons'

  // // Weather
  // weatherKey: 'InsertYourAPIKeyHere123456', // Write here your API Key
  // weatherIcons: 'OneDark', // 'Onedark', 'Nord', 'Dark', 'White'
  // weatherUnit: 'C', // 'F', 'C'
  // language: 'en', // More languages in https://openweathermap.org/current#multi

  // trackLocation: true, // If false or an error occurs, the app will use the lat/lon below
  // defaultLatitude: '37.775',
  // defaultLongitude: '-122.419',

  // // Autochange
  // autoChangeTheme: true,

  // // Autochange by OS
  // changeThemeByOS: true,

  // // Autochange by hour options (24hrs format, string must be in: hh:mm)
  // changeThemeByHour: false,
  // hourDarkThemeActive: '18:30',
  // hourDarkThemeInactive: '07:00',

  // ┌┐ ┬ ┬┌┬┐┌┬┐┌─┐┌┐┌┌─┐
  // ├┴┐│ │ │  │ │ ││││└─┐
  // └─┘└─┘ ┴  ┴ └─┘┘└┘└─┘

  firstButtonsContainer: [
    {
      id: "1",
      name: "Github",
      icon: "github",
      link: "https://github.com/",
    },
    {
      id: "2",
      name: "Mail",
      icon: "mail",
      link: "https://mail.google.com/mail/u/0/#inbox",
    },
    {
      id: "3",
      name: "Uni Mail",
      icon: "school",
      link: "https://mail.google.com/mail/u/1/#inbox",
    },
    {
      id: "4",
      name: "Uni LMS",
      icon: "calendar",
      link: "https://calendar.google.com/calendar/r",
    },
    {
      id: "5",
      name: "Reddit",
      icon: "glasses",
      link: "https://reddit.com",
    },
    {
      id: "6",
      name: "Odysee",
      icon: "youtube",
      link: "https://odysee.com/",
    },
  ],

  secondButtonsContainer: [
    {
      id: "1",
      name: "Music",
      icon: "headphones",
      link: "https://open.spotify.com",
    },
    {
      id: "2",
      name: "twitter",
      icon: "twitter",
      link: "https://twitter.com/",
    },
    {
      id: "3",
      name: "bot",
      icon: "bot",
      link: "https://discord.com/app",
    },
    {
      id: "4",
      name: "Amazon",
      icon: "shopping-bag",
      link: "https://amazon.com/",
    },
    {
      id: "5",
      name: "Hashnode",
      icon: "pen-tool",
      link: "https://hashnode.com/",
    },
    {
      id: "6",
      name: "Figma",
      icon: "figma",
      link: "https://figma.com/",
    },
  ],

  // ┬  ┬┌─┐┌┬┐┌─┐
  // │  │└─┐ │ └─┐
  // ┴─┘┴└─┘ ┴ └─┘

  // First Links Container
  firstListsContainer: [
    {
      icon: "messages-square",
      id: "1",
      links: [
        {
          name: "Personal Mail",
          link: "https://mail.google.com/mail/u/0/#inbox",
        },
        {
          name: "Uni Mail",
          link: "https://mail.google.com/mail/u/1/#inbox",
        },
        {
          name: "Official Mail",
          link: "https://mail.google.com/mail/u/2/#inbox",
        },
        {
          name: "Yahoo Mail",
          link: "https://mail.yahoo.com/d/folders/1",
        },
      ],
    },
    {
      icon: "github",
      id: "2",
      links: [
        {
          name: "Github",
          link: "https://github.com",
        },
        {
          name: "Repos",
          link: "https://github.com/joejo-joestar/",
        },
        {
          name: "Uni-Codes",
          link: "https://github.com/joejo-joestar/uni-codes",
        },
        {
          name: "idk",
          link: "",
        },
      ],
    },
  ],

  // Second Links Container
  secondListsContainer: [
    {
      icon: "school-2",
      id: "1",
      links: [
        {
          name: "Uni LMS",
          link: "https://lms.bitspilanidubai.ae/my/",
        },
        {
          name: "Google Classroom",
          link: "https://classroom.google.com/u/1/",
        },
        {
          name: "EDA playground",
          link: "https://edaplayground.com/",
        },
        {
          name: "logic bs",
          link: "https://proofs.openlogicproject.org",
        },
      ],
    },
    {
      icon: "popcorn",
      id: "2",
      links: [
		  {
			name: "YouTube",
			link: "https://www.youtube.com",
		  },
        {
          name: "FMoviesz",
          link: "https://fmoviesz.to/home",
        },
        {
          name: "AniWave",
          link: "https://aniwave.to/home",
        },
        {
          name: "idk",
          link: "",
        },
      ],
    },
  ],
};
