<template>
  <b-navbar-nav class="ml-auto">
    <b-button v-if="!isAuthenticated" variant="primary" :href="oauthURL"
      >Login with Discord</b-button
    >
  </b-navbar-nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  created() {
    const code = this.$route.query.code;

    if (code) {
      this.fetchToken(code);
      this.$router.replace('/');
    }
  },
  methods: mapActions('oAuth', ['fetchToken']),
  computed: { ...mapState('oAuth', ['oauthURL']), ...mapGetters('oAuth', ['isAuthenticated']) }
};
</script>
