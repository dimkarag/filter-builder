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
				options: {
					builderIcon: 'mdi-plus',
					builderIconColor: '#ac282d',
					removeIcon: 'mdi-close-circle',
					removeIconColor: '#FF0000'
				},
				filters: [
					{
						label: 'Active',
						key: 'active',
						type: 'boolean'
					},
					{
                        label: 'Name',
                        key: 'name',
                        type: 'text'
                    },
					{
						label: 'Person',
						key: 'person',
						type: 'dropdown',
						itemTextKey: ['title', 'name'],
						fieldSeparator: ',',
						items: [
							{ id: 1, title: 'Mr', name: 'John' },
							{ id: 2, title: 'Mrs', name: 'Anna' }
						],
						itemValue: 'id',
						prependIcon: 'mdi-domain'
					},
					{
						label: 'Auto',
						key: 'id',
						type: 'radio-button',
						items: [
							{ id: 1, type: 'Coupe', name: 'Car' },
							{ id: 2, type: 'Street', name: 'Motorbike' }
						],
						itemTextKey: ['type', 'name'],
						fieldSeparator: ',',
						direction: 'row',
						itemValue: 'id',
						color: 'red'
					}
				]
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
