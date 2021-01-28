<template>
  <router-link
    :to="'/view-experiment/' + experiment.experiment_id"
    tag="div"
    class="experiment"
  >
    <h3>
      {{ experiment.details.name }}
    </h3>

    <div class="created_date"><i>Created: </i> {{ experiment.created }}</div>
    <div class="id">ID: {{ experiment.experiment_id }}</div>

    By: {{ experiment.details.creator }}
  </router-link>
</template>

<script>
export default {
  name: "ExperimentThumbnail",
  props: ["experiment"],
};
</script>

<style scoped>
.experiment {
  color: white;
  border: 1px solid #ccc;
  background: #cc593d;
  padding: 2rem;
  border-radius: 5px;
  text-align: center;
  position: relative;
  cursor: pointer;
  text-decoration: none;
}
</style>
