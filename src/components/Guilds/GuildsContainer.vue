<template>
  <div>
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
        v-if="guildsList.length > 3"
        @change="onPageChanged"
        v-model="currentPage"
        :per-page="perPage"
        :total-rows="rows"
        align="center"
      ></b-pagination>
    </b-container>
  </div>
</template>

<script>
import GuildCard from '@/components/Guilds/GuildCard.vue';

export default {
  components: {
    GuildCard
  },
  props: {
    guildsList: Array
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
      this.paginatedItems = this.guildsList.slice(
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
      return this.guildsList.length;
    },
    pageCount() {
      const l = this.guildsList.length;
      const s = this.perPage;
      return Math.floor(l / s);
    }
  },
  mounted() {
    this.paginate(this.perPage, 0);
  }
};
</script>
