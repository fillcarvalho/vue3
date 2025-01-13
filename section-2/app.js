const App = Vue.createApp({
  data() {
    return {
      courseGoalA: "Finish the course and learn Vue",
      courseGoalB: "Master the course and learn Vue",
      vueLink: "https://athlos.gg",
      name: 'Pepeto'
    };
  },
  computed: {
    fullName() {
        return this.name + ' Carvalho'
    }
  },
  watch: {
    name(value) {
        this.fullname = value + ' Carvalho';
    }
  },
  methods: {
    outputGoal() {
        const randomNumber = Math.random();
        if (randomNumber < 0.5) {
            return this.courseGoalA;
        } else {
            return this.courseGoalB;
        }
    }
  }
});

App.mount("#user-goal");
