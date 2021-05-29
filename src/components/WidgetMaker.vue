<template>
  <v-container id="board" fluid tag="section">
    <v-row class="align-items-center">
      <v-col
        class="col"
        v-for="item in allWidgets"
        :key="item.id"
        :cols="12"
        :order="item.order"
        :lg="item.lg"
        :md="item.md"
      >
        <v-card height="fit-content" class="card">
          <Widget
            class="widget"
            :item="item"
            :goNextPriority="goNextPriority"
            :currentPriority="currentPriority"
          />
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import Widget from "@/components/Widget.vue";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "WidgetsMaker",
  components: {
    Widget
  },
  methods: {
    goNextPriority() {
      if (this.priorityIndex < this.priorityArr.length) {
        this.priorityIndex++;
        let temp = this.priorityArr[this.priorityIndex];
        temp ? (this.currentPriority = temp) : 0;
      }
    },
    arrangeWidgets() {
      let widgets = this.$store.state.widgetsArray.configurator;
      console.log("widgets--->", widgets);
      widgets.forEach(e => {
        this.priorityArr.push(e.priorityIndex);
      });
      console.log(this.priorityArr);
      return this.$store.state.widgetsArray.configurator;
    },
    ...mapActions(["getWidgetsArray"])
  },
  data: () => ({
    priorityIndex: 0,
    priorityArr: [],
    currentPriority: 0
  }),
  computed: mapGetters(["allWidgets"]),
  created() {
    //dispatching the get widget actions that will call the mock api to get the data
    this.getWidgetsArray();
  },
  updated() {
    let widgetArr = this.allWidgets;
    let tempArr = [];
    widgetArr.forEach(e => {
      tempArr.push(e.priority);
    });
    const removedDuplicates = [...new Set(tempArr)];
    this.priorityArr = removedDuplicates.sort((a, b) => a - b);
    const priorityArray = this.priorityArr;
    this.currentPriority = priorityArray[this.priorityIndex];
  }
};
</script>
