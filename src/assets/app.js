const axios = require("axios");

export default {
  created() {
    axios.get(this.ideasDatabase).then((response) => {
      let idea = response.data[~~(Math.random() * response.data.length)];
      this.idea = idea.idea;
      this.ideaLevel = idea.level;
    });
  },
  data() {
    return {
      idea: "idea",
      ideaLevel: "beginner",
      ideasDatabase: "http://localhost:3000/ideas",
    };
  },
};
