<template>
  <center>
    <SubmitIdea
      class="submit-modal"
      v-if="showSubmitModal"
      @closeModal="closeModal"
    />
    <h1>Idea Hub</h1>
    <p>Hub of coding ideas</p>
    <h2>Your random coding idea is</h2>
    <button class="btn btn-primary" @click="regenerate">Regenerate</button>
    &nbsp;
    <button class="btn btn-primary" @click="submitIdea">
      Submit your own idea!
    </button>
    <p class="idea">{{ idea }}</p>
    <p class="idea-level">Level: {{ ideaLevel }}</p>
    <p class="idea-by">By: {{ ideaBy }}</p>
  </center>
  <br /><br /><br />
</template>

<script src="./assets/app.js"></script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap@4.6.0/dist/css/bootstrap.min.css");
@import url("./assets/styles/style.css");
</style>
