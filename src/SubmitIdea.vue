<template>
  <center>
    <h1>Submit your own idea!!</h1>
    <form>
      <input
        type="text"
        placeholder="Who do you want to be called?"
        class="form-control"
      />
      <br />
      <input
        type="text"
        placeholder="What is your idea?"
        class="form-control"
      />
      <br />

      <label for="level">What level of coders can program this? </label>
      <select class="form-control" id="level">
        <option value="Beginner">Beginner</option>
        <option value="Intermediate">Intermediate</option>
        <option value="Advanced">Advanced</option>
      </select>
    </form>
  </center>
</template>

<script>
export default {};
</script>

<style></style>
