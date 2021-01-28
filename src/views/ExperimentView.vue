<template>
  <div>
    <router-link :to="'/experiments'"> Back to Experiments </router-link>
    <div class="experiment">
      Name: {{ name }} <br />
      Description: {{ description }} <br />
      Experiment Type: {{ type }} <br />
      By: {{ creator }} <br />

      Tags: {{ tags }} <br />
      Variants: {{ variants }} <br />
      Split Percentages: {{ split_percentages }} <br />

      <!-- <div class="created_date"><i>Created: </i> {{ experiment.created }}</div>
      <div class="id">ID: {{ experiment.experiment_id }}</div> -->
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "ExperimentView",
  data() {
    return {
      experimentId: "",
      name: "",
      description: "",
      creation_date: "",
      type: "",
      tags: "",
      variants: [],
      split_percentages: [],
      creator: "",
    };
  },
  async mounted() {
    if (!localStorage.phone) {
      this.$router.push({ path: "/login/" + this.$route.params.id + "/view-experiment" });
    }

    // show the nav bar
    document.getElementById("nav").style.display = "block";

    this.experimentId = this.$route.params.id;

    // load plio details
    await this.fetchData();
  },
  methods: {
    fetchData() {
      axios
        .get(
          process.env.VUE_APP_BACKEND +
            process.env.VUE_APP_BACKEND_EXPERIMENT_DETAILS +
            "?experimentId=" +
            this.experimentId
        )
        .then((res) => {
          console.log(res.data);
          this.creation_date = res.data.creation_date;
          this.type = res.data.type;
          this.name = res.data.details.name;
          this.description = res.data.details.description;
          this.tags = res.data.details.tags;
          this.variants = res.data.details.links;
          this.split_percentages = res.data.details["split-percentages"];
          this.creator = res.data.details.creator;
        });
    },
  },
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
