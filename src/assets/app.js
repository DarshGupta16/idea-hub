import SubmitIdea from "../SubmitIdea.vue";
const axios = require("axios");

export default {
  components: { SubmitIdea },
  created() {
    axios.get(this.ideasDatabase).then((response) => {
      let idea = response.data[~~(Math.random() * response.data.length)];
      this.idea = idea.idea;
      this.ideaLevel = idea.level;
      this.ideaBy = idea.by;
    });
  },
  data() {
    return {
      idea: "idea",
      ideaLevel: "beginner",
      ideaBy: "someone",
      ideasDatabase: "http://localhost:3000/ideas",
      showSubmitModal: false,
    };
  },
  methods: {
    regenerate() {
      axios.get(this.ideasDatabase).then((response) => {
        const idea = response.data[~~(Math.random() * response.data.length)];
        this.idea = idea.idea;
        this.ideaLevel = idea.level;
        this.ideaBy = idea.by;
      });
    },
    submitIdea() {
      this.showSubmitModal = true;
    },
    closeModal() {
      this.showSubmitModal = false;
    },
  },
};
