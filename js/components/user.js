const user = {
    data() {
      return {
      };
    },
    template: `
    <li class="active">
      <div class="d-flex bd-highlight">
        <div class="img_cont">
          <img src="img/account.png" class="rounded-circle user_img">
          <span class="online_icon"></span>
        </div>
        <div class="user_info">
          <span>Emma</span>
          <p>Emma est en ligne</p>
        </div>
      </div>
    </li>
    `,
  };
  
  export default user;
  