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
  mounted(){
    setInterval(function()
    {
      let notification = document.querySelector('#notification');
      notification.style.display = "block";

      setTimeout(function(){
        notification.style.display = "none";
      },2000)

    }, 5000);
  },
}).mount("#app");

