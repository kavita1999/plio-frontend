<template>
  <div>
    <h3>Experiments</h3>
    <div class="experiments">
      <div
        v-for="experiment in allExperiments"
        :key="experiment.experiment_id"
        class="experiments"
      >
        <ExperimentThumbnail v-bind:experiment="experiment" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import ExperimentThumbnail from "../components/ExperimentThumbnail.vue";

export default {
  name: "ExperimentList",
  components: {
    ExperimentThumbnail,
  },
  computed: mapGetters(["allExperiments"]),
  methods: {
    ...mapActions(["fetchExperiments"]),
  },
  mounted() {
    if (!localStorage.phone) {
      this.$router.push({ path: "/login/experiments" });
    }

    document.getElementById("nav").style.display = "block";
  },
  created() {
    this.fetchExperiments();
  },
};
</script>

<style scoped>
.experiments {
  display: grid;
  margin: auto;
  grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
  grid-gap: 0.5rem;
}

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

.experiment a {
  text-decoration: none;
  color: white;
}

.experiment a:visited {
  text-decoration: none;
  color: white;
}
</style>
