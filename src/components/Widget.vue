<template>
  <div class="container ">
    <!-- title -->
    <h3 v-if="currentPriority > item.priority && item.title">
      {{ item.title }}
    </h3>
    <!-- table -->
    <v-data-table
      v-if="currentPriority >= item.priority && item.type === 'table'"
      :headers="item.options.headers"
      :items="item.options.items"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <!-- chart -->
    <apexchart
      v-if="
        chartOptions &&
          currentPriority >= item.priority &&
          item.type !== 'table'
      "
      width="100%"
      :type="item.type"
      :options="chartOptions"
      :series="series"
      class="chart"
    >
    </apexchart>

    <v-card-title
      id="html"
      v-if="currentPriority > item.priority && item.type === 'html'"
    >
      <span class="mr-3"> {{ item.data.name }}: {{ item.data.value }} </span>
      <v-icon>{{ this.svgpath }} </v-icon>
    </v-card-title>
    <!-- spinner  -->
    <div id="spinner" v-if="currentPriority < item.priority">
      <v-progress-circular
        indeterminate
        color="deep-orange"
        width="7"
        size="70"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
import { mdiAccount } from "@mdi/js";
export default {
  data: () => {
    return {
      chartOptions: null,
      series: [],
      svgpath: mdiAccount
    };
  },
  name: "ChartLoader",
  props: ["item", "goNextPriority", "currentPriority"],
  mounted() {
    this.chartOptions = this.item.options;
    this.series = this.item.series;
  },
  updated() {
    if (this.currentPriority === this.item.priority) {
      setTimeout(() => {
        this.goNextPriority();
      }, 500);
    }
  }
};
</script>
<style scoped lang="scss">
.container {
  #spinner,
  #html {
    display: flex;
    justify-items: center;
    justify-content: center;
  }
}
</style>
