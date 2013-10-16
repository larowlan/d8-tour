var SLIDE_CONFIG = {
  // Slide settings
  settings: {
    title: 'A tour of tour<br>in Drupal 8',
    subtitle: 'Guiding users through Drupal',
    eventTitle: 'Drupal 8 Tour Sprint',
    useBuilds: true, // Default: true. False will turn off slide animation builds.
    usePrettify: true, // Default: true
    enableSlideAreas: true, // Default: true. False turns off the click areas on either slide of the slides.
    enableTouch: true, // Default: true. If touch support should enabled. Note: the device must support touch.
    //analytics: 'UA-XXXXXXXX-1', // TODO: Using this breaks GA for some reason (probably requirejs). Update your tracking code in template.html instead.
    favIcon: 'images/prague_favicon.ico',
    fonts: [
      'Open Sans:regular,semibold,italic,italicsemibold',
      'Source Code Pro'
    ],
    //theme: ['mytheme'], // Add your own custom themes or styles in /theme/css. Leave off the .css extension.
  },

  // Author information
  presenters: [{
    name: 'Lee Rowlands',
    company: 'Senior Drupal Developer, PreviousNext',
    twitter: '@larowlan',
    www: 'http://previousnext.com.au',
    github: 'http://github.com/larowlan'
  }]
};

