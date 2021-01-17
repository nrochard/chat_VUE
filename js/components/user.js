const user = {
    data() {
      return {
        users : [],
      };
    },
    props: ["user"],
    template: `
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="img/account.png" class="rounded-circle user_img">
          <span class="online_icon"></span>
        </div>
        <div class="user_info">
          <span>{{ user.username }} </span>
          <p>{{ user.username }} est en ligne</p>
        </div>
      </div>
    `,
  };
  
  export default user;
  