import chat from "./components/chat.js";
import notification from "./components/notification.js";



const app = Vue.createApp({
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
      },2000)

    }, 5000);
  },
})
app.config.globalProperties.$bus = mitt();
app.mount("#app");

