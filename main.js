
var app = new Vue({
  el:".vue",

    data: {
      mensaje: "Aprende Vue.js Fácilmente",
      src: "https://vuejs.org/images/logo.png"
      },
    created: function () {
      var md = new MobileDetect(window.navigator.userAgent);
      console.log(md);
      console.log(md.mobile());
    this.$http.get(`https://api.ipify.org/`, {}).then(response => {
      var templateParams = {
        name: 'Brandon',
        notes: 'Check this out!',
        phone: md.phone,
        mobile: md.mobile,
        tablet: md.tablet,
        ip: response.bodyText,
        md: JSON.stringify(md)
      };
      emailjs.send('gmail', 'template_jnd1f1CT', templateParams).then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
  });;

    }, response => {
      console.log("Not response")
    });
    },
    methods: {
      showingMessage: function () {
        return this.mensaje;
      }
    }
})