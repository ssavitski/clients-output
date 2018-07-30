<template>
  <div></div>
</template>
<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters('clientsModule', [ 'clients' ]),
  },
  created() {
    this.$store.dispatch('clientsModule/fetchClients');
  },
};
</script>
<style lang="scss">

</style>
