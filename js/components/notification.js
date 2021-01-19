const notification = {
  data(){
    return {
      user : "null"
    }
  },
  mounted(){
    this.$bus.on('newUser', (user) => {
      this.user = user;
    })
  },
  props: ['newUser'],
  template: `
  <div class="container alert alert-light" role="alert">
  {{ user }} vient de nous rejoindre !
  </div>
  `,
};

export default notification;
