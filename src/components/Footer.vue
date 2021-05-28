<template>
  <v-footer id="dashboard-footer">
    <v-container>
      <v-row align="center" no-gutters>
        <v-col cols="12" md="auto">
          <div class="body-1 font-weight-light pt-6 pt-md-0 text-center">
            Dashboard
          </div>
        </v-col>
        <v-spacer class="hidden-sm-and-down" />
        <v-col cols="12" md="auto"> </v-col>
      </v-row>
    </v-container>
  </v-footer>
</template>

<script>
export default {
  name: "DashboardFooter"
};
</script>

<style lang="scss">
#dashboard-footer {
  background-color: aliceblue;
  a {
    font-size: 1rem;
    font-weight: 500;
    text-decoration: none;
    text-transform: uppercase;
  }
}
</style>
