  // sources
  // http://www.insee.fr/fr/statistiques/2045139?sommaire=2045470&q=table+mortalit%C3%A9
  var LIFE_EXP = {
    60: 27.68,
    61: 26.80,
    62: 25.92,
    63: 25.05,
    64: 24.18,
    65: 23.31,
    66: 22.45,
    67: 21.58,
    68: 20.73,
    69: 19.88,
    70: 19.03,
    71: 18.20,
    72: 17.36,
    73: 16.54,
    74: 15.73,
    75: 14.92,
    76: 14.13,
    77: 13.35,
    78: 12.58,
    79: 11.83,
    80: 11.10,
    81: 10.38,
    82: 9.69,
    83: 9.02,
    84: 8.39,
    85: 7.78,
    86: 7.20,
    87: 6.66,
    88: 6.15,
    89: 5.66,
    90: 5.21,
    91: 4.80,
    92: 4.42,
    93: 4.08,
    94: 3.76,
    95: 3.46,
    96: 3.20,
    97: 2.97,
    98: 2.76,
    99: 2.58,
    100: 2.44,
  };

  var app = new Vue({
    el: '#viager-simu',

    data: {
      message: 'Hello Vue!',

      venalValue: '',
      age: '',
      bouquet: '',
      rent: '',
      free: 'false',
    },

    methods: {
      //
      // simulation
      //
      simulate: function(event) {
        if (event) event.preventDefault();



        var life_exp = LIFE_EXP[this.age];
        var value = this.venalValue - this.bouquet;
        if (!this.free) {
          value -= 12 * life_exp * this.rent;
        }

        var annuity = value / (12 * life_exp);

        console.log('value', value);
        console.log('life_exp', life_exp);
        console.log('annuity', annuity);

        this.message = `La rente doit être de <strong>${ Math.round(100 * annuity) / 100 }€/mois</strong>`
      }
    }
  })
