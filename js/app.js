import chat from "./components/chat.js";
import notification from "./components/notification.js";


Vue.createApp({
  data(){
    return {
    }
  },
  components: {
    chat,
    notification
  },
  methods: {
  
  },
  mounted() {
    var randomName = faker.name.findName();
    console.log(randomName)
      setInterval(function()
      {
        let notification = document.querySelector('#notification');
        notification.style.display = "block";
        setTimeout(function(){
          notification.style.display = "none";
        },3000)
  
      }, 6000);
  }
}).mount("#app");
