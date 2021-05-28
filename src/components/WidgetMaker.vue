<template>
  <v-container id="board" fluid tag="section">
    <v-row class="align-items-center">
      <v-col
        class="col"
        v-for="item in widgets"
        :key="item.order"
        :cols="12"
        :order="item.order"
        :lg="item.lg"
        :md="item.md"
      >
        <v-card height="fit-content" class="card">
          <Widget
            class="widget"
            :item="item"
            :increasePriorityIndex="increasePriorityIndex"
            :priorityIndex="priorityIndex"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Widget from "@/components/Widget.vue";
export default {
  name: "WidgetsMaker",
  components: {
    Widget
  },
  methods: {
    increasePriorityIndex: function() {
      this.priorityIndex++;
    }
  },
  data: () => ({
    priorityIndex: 0
  }),
  computed: {
    widgets() {
      return this.$store.state.widgetsArray.configurator;
    }
  },
  mounted() {
    //dispatching the get widget actions that will call the mock api to get the data
    this.$store.dispatch("getWidgetsArray");
    setTimeout(() => {
      this.increasePriorityIndex();
    }, 400);
  }
};
</script>
