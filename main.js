
var app = new Vue({
  el:".vue",

    data: {
      mensaje: "Aprende Vue.js Fácilmente",
      src: "https://vuejs.org/images/logo.png"
      },
    created: function () {
     this.$http.get(`https://api.ipify.org/`, {}).then(response => {
       var templateParams = {
         name: 'Brandon',
         notes: 'Check this out!',
         ip: response.bodyText
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