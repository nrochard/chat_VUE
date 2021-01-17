import chat from "./components/chat.js";
import notification from "./components/notification.js";


Vue.createApp({
  data(){
    return {
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
      },3000)

    }, 7000);
  },
}).mount("#app");

