import chat from "./components/chat.js";
import notification from "./components/notification.js";


Vue.createApp({
  data(){
    return {
      newUser : "",
      users : {}
    }
  },
  components: {
    chat,
    notification
  },
  methods: {
    startChat(){
      // var names = [];
      // document.querySelector(".middle_center").style.display = "block";
      // document.querySelector(".container").style.display = "none";
    //   setInterval(function()
    //   {
    //     this.newUser = faker.name.findName();
    //     console.log(this.newUser);

    //     const user = {
    //       id: Date.now(),
    //       username: this.newUser,
    //     }

    //     names.push(user);
    //     this.users = names;
    //     console.log(this.users);

    //     let notification = document.querySelector('#notification');
    //     notification.style.display = "block";

    //     setTimeout(function(){
    //       notification.style.display = "none";
    //     },3000)

    //   }, 6000);
    }
  },
}).mount("#app");

