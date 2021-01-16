import message from "./message.js";
import users from "./users.js";

const chat = {
  data() {
    return {
 
    };
  },
  components: {
    users,
    message
  },
  template: `
  <div class="container-fluid middle_center">
    <div class="row justify-content-center h-100">
      <div class="col-md-4 col-xl-3 chat">
        <users></users>
      </div>
      <div class="col-md-8 col-xl-6 chat">
        <message></message>
      </div>
    </div>
  </div>
  `,
};

export default chat;
