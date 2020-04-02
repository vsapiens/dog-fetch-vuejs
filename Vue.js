var app = new Vue({
  el: "#app",
  data: {
    message: "",
    seen: false,
    username: "Change Username",
    counter1: 0,
    counter2: 0,
    myImage: ""
  },
  methods: {
    changeUserEnter: function() {
      this.message = "Welcome " + this.username;
      this.username = "";
      this.counter1++;
    },
    changeUserClick: function() {
      this.message = "Welcome " + this.username;
      this.username = "";
      this.counter2++;
    },
    changeSeen: function() {
      this.seen = !this.seen;
    },
    fetchDog: function() {
      let url = "https://dog.ceo/api/breeds/image/random";
      let settings = {
        method: "GET"
      };

      fetch(url, settings)
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error(response.statusText);
        })
        .then(responseJSON => {
          this.myImage = responseJSON.message;
        });
    }
  }
});
