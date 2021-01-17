const notification = {
  methods: {

  },
  mounted(){

  },
  props: ['username'],
  template: `
  <div class="container alert alert-light" role="alert">
  {{ username }} vient de nous rejoindre !
  </div>
  `,
};

export default notification;
