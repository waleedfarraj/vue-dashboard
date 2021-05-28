<template>
  <div class="container">
    <!-- title -->
    <h3 v-if="priorityIndex > item.priority && item.title">{{ item.title }}</h3>
    <!-- table -->
    <v-data-table
      v-if="priorityIndex >= item.priority && item.type === 'table'"
      :headers="item.data.headers"
      :items="item.data.desserts"
      :items-per-page="5"
      class="elevation-1"
    ></v-data-table>
    <!-- chart -->
    <apexchart
      v-if="
        chartOptions &&
          priorityIndex >= item.priority &&
          chartTypes.includes(item.type)
      "
      width="100%"
      :type="item.type"
      :options="chartOptions"
      :series="series"
      class="chart"
    >
    </apexchart>

    <v-card-title v-if="priorityIndex > item.priority && item.type === 'html'">
      {{ item.data.name }}: {{ item.data.value }}
    </v-card-title>
    <!-- spinner  -->
    <div v-if="priorityIndex < item.priority">
      <v-progress-circular
        indeterminate
        color="deep-orange"
      ></v-progress-circular>
    </div>
  </div>
</template>

<script>
export default {
  data: () => {
    return {
      chartOptions: null,
      series: [],
      chartTypes: ["pie", "bar", "area", "donut", "radialBar"]
    };
  },
  name: "ChartLoader",
  props: ["item", "increasePriorityIndex", "priorityIndex"],
  mounted() {
    if (this.item.type === "pie" || this.item.type === "donut") {
      this.chartOptions = {
        labels: this.item.data.labels
      };
      this.series = this.item.data.series;
    } else {
      this.chartOptions = {
        colors: this.item.colors,
        xaxis: {
          categories: this.item.data.labels
        }
      };
      this.series = [{ data: this.item.data.series }];
    }
  },
  updated() {
    if (this.priorityIndex === this.item.priority) {
      setTimeout(() => {
        this.increasePriorityIndex();
      }, 500);
    }
  }
};
</script>
