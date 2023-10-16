<template>
  <div class="sub-heading">
    <h2>{{ heading }}</h2>
    <p>{{ subHeading }}</p>
  </div>
</template>

<script>
export default {
  name: "SubHeader",
  props: {
    heading: String,
    subHeading: String,
  },
};
</script>

<style scoped>
.sub-heading {
  background: linear-gradient(90deg, rgba(1,76,41,1) 0%, rgba(35,240,11,1) 100%);
  color: white;
  height: 20vh;
  display: grid;
  place-content: center;
  text-align: center;
  margin-bottom: 2.5rem;
}

.sub-heading p {
  font-size: 1.9rem;
  color: var(--grey);
}
</style>