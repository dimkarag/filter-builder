<template>
  <v-container class="example">
    <h1>Filter Builder Example</h1>
    <div class="filter-builder-wrapper">
      <filter-builder :filters="filters" @filter-change="filterChanged" class="filter-builder"/>
      <v-textarea
          class="text-area"
          outlined
          name="input-7-4"
          label="Filters Created"
          :value="JSON.stringify(selectedFilters)"
          readonly
      />
    </div>
  </v-container>
</template>

<script>
import FilterBuilder from './FilterBuilder.vue'
export default {
  name: 'Example',
  components: { FilterBuilder },
  data() {
    return {
      selectedFilters: {},
      filters: [
          {
              name: 'Active',
              key: 'active',
              type: 'boolean'
          },
          {
              name: 'Partner',
              key: 'partner',
              type: 'dropdown',
              itemKey: ['title', 'name'],
              fieldSeparator: ',',
              items: [
                { id: 1, title: 'Title1', name: 'John '},
                { id: 2, title: 'Title2', name: 'Anna '}
              ],
              itemValue: 'id',
              prependIcon: 'mdi-domain'
          }
      ],
    }
  },
  methods: {
    filterChanged(filters) {
      this.selectedFilters = filters
    }
  }
}
</script>

<style scoped>
.example {
  display: flex;
  flex-direction: column;
}
.filter-builder {
  display: flex;
  justify-content: center;
  min-height: 15vh;
}
.filter-builder-wrapper {
  margin-top: 20vh;
}
.text-area {
  min-width: 50vw;
}

</style>
