<template>
  <v-footer id="dashboard-footer" class="d-flex justify-center">
    <v-card-text class="py-2 white--text text-center">
      {{ new Date().getFullYear() }} — <strong>Waleed Farraj</strong>
    </v-card-text>
  </v-footer>
</template>

<script>
export default {
  name: "DashboardFooter"
};
</script>

<style lang="scss">
#dashboard-footer {
  background-color: grey;
  height: 70px;
}
</style>
