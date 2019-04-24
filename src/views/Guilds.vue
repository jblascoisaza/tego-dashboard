<template>
  <div class="guilds">
    <b-card no-body>
      <b-tabs small card>
        <b-tab title="Standard">
          <b-container class="bv-example-row" align="center">
            <b-row>
              <b-col v-for="(guild, index) in paginatedItems" :key="index">
                <GuildCard
                  :name="guild.name"
                  :iconURL="
                    guild.iconURL
                      ? guild.iconURL
                      : 'https://cdn.discordapp.com/icons/467300599885594624/1aede8acaf8cac9f70a51eb905b1fe4c.png'
                  "
                  :guildID="guild.id"
                />
              </b-col>
            </b-row>
            <b-pagination
              @change="onPageChanged"
              v-model="currentPage"
              :per-page="perPage"
              :total-rows="rows"
              align="center"
            ></b-pagination>
          </b-container>
        </b-tab>
        <b-tab title="Premium Plan">
          <p v-if="!premiumGuilds.length">No premium guilds.</p>
          <b-container v-else class="bv-example-row" align="center">
            <b-row>
              <b-col v-for="(guild, index) in premiumGuilds" :key="index">
                <GuildCard
                  :name="guild.name"
                  :iconURL="
                    guild.iconURL
                      ? guild.iconURL
                      : 'https://cdn.discordapp.com/icons/467300599885594624/1aede8acaf8cac9f70a51eb905b1fe4c.png'
                  "
                  :guildID="guild.id"
                />
              </b-col>
            </b-row>
          </b-container>
        </b-tab>
      </b-tabs>
    </b-card>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import GuildCard from '@/components/Guilds/GuildCard.vue';

export default {
  name: 'guilds',
  components: {
    GuildCard
  },
  data() {
    return {
      perPage: 3,
      currentPage: 1,
      paginatedItems: {}
    };
  },
  methods: {
    paginate(page_size, page_number) {
      this.paginatedItems = this.canManageGuilds.slice(
        page_number * page_size,
        (page_number + 1) * page_size
      );
    },
    onPageChanged(page) {
      this.paginate(this.perPage, page - 1);
    }
  },
  computed: {
    rows() {
      return this.canManageGuilds.length;
    },
    pageCount() {
      const l = this.canManageGuilds.length;
      const s = this.perPage;
      return Math.floor(l / s);
    },
    ...mapState('oAuth', ['canManageGuilds', 'premiumGuilds'])
  },
  mounted() {
    this.paginate(this.perPage, 0);
  }
};
</script>

<style scoped>
.guilds {
  padding: 4rem 2rem;
}
</style>
