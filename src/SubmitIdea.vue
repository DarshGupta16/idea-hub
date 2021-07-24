<template>
  <center>
    <h1>Submit your own idea!!</h1>
    <form @submit="preventDefault()">
      <input
        type="text"
        placeholder="Who do you want to be called?"
        v-model="name"
        class="form-control"
        required
      />
      <br />
      <input
        type="text"
        placeholder="What is your idea?"
        v-model="idea"
        class="form-control"
        required
      />
      <br />

      <label for="level">What level of coders can program this? </label>
      <select class="form-control" id="level" v-model="level" required>
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
      <br />
      <button class="btn btn-primary" @click="submit">Submit for review</button>
    </form>
    <br />
    <button class="btn btn-primary" @click="closeModal()">Go Back</button>
  </center>
</template>

<script>
const axios = require("axios");
export default {
  data() {
    return {
      name: "",
      idea: "",
      level: "",
    };
  },
  methods: {
    closeModal() {
      this.$emit("closeModal");
    },
    submit(e) {
      e.preventDefault();
      axios
        .post("http://localhost:4000/ideas-for-review", {
          by: this.name,
          idea: this.idea,
          level: this.level,
        })
        .then(() => {
          alert("Your idea has been submitted!!");
          this.$emit("closeModal");
        })
        .catch((error) => console.log(error));
    },
  },
};
</script>

<style></style>
