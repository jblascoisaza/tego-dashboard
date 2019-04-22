<template>
  <b-navbar-nav class="ml-auto">
    <b-button variant="primary" :href="oauthURL">Login with Discord</b-button>
  </b-navbar-nav>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: mapState('oAuth', ['oauthURL'])
};
</script>

<style scoped></style>
