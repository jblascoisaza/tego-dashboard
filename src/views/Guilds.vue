<template>
  <div class="guilds">
    <b-card no-body>
      <b-tabs small card>
        <b-tab title="Standard">
          <GuildsContainer :guildsList="canManageGuilds" />
        </b-tab>
        <b-tab title="Premium Plan">
          <p v-if="!premiumGuilds.length">No premium guilds.</p>
          <GuildsContainer v-else :guildsList="premiumGuilds" />
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GuildsContainer from '@/components/Guilds/GuildsContainer.vue';

export default {
  name: 'guilds',
  components: {
    GuildsContainer
  },
  computed: mapState('oAuth', ['canManageGuilds', 'premiumGuilds'])
};
</script>

<style scoped>
.guilds {
  padding: 4rem 2rem;
  background-color: #e9ecef;
}
</style>
