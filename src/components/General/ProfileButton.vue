<template>
  <b-navbar-nav class="ml-auto">
    <b-button v-if="!isAuthenticated && !loading" variant="primary" :href="oauthURL"
      >Login with Discord</b-button
    >
    <b-nav-item-dropdown v-else :text="userData.tag" right>
      <b-dropdown-item>Profile</b-dropdown-item>
      <b-dropdown-item>Sign Out</b-dropdown-item>
    </b-nav-item-dropdown>
  </b-navbar-nav>
</template>

<script>
import { mapState, mapActions, mapGetters } from 'vuex';

export default {
  created() {
    const code = this.$route.query.code;
    if (code) {
      this.fetchToken(code);
      this.$router.push('/guilds');
    }
  },
  methods: mapActions('oAuth', ['fetchToken']),
  computed: {
    ...mapState('oAuth', ['loading', 'oauthURL', 'userData']),
    ...mapGetters('oAuth', ['isAuthenticated'])
  }
};
</script>
