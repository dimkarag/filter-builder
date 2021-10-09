<template>
    <div class="filter-wrapper ml-3">
        <span class="filter-label">Filter:</span>
        <v-menu
            :close-on-content-click="true"
            offset-x
        >
            <template v-slot:activator="{ on, attrs }">
                <v-btn
                    class="plus-button ml-1"
                    dark
                    x-small
                    fab
                    :color="options.builderIconColor"
                    v-bind="attrs"
                    v-on="on"
                >
                    <v-icon dark> {{ options.builderIcon }}</v-icon>
                </v-btn>
            </template>
            <v-card>
                <v-card-actions class="filter-choices-wrapper">
                    <div v-for="filter in filters" :key="filter.name" class="filter-choices">
                        <div @click="addFilter(filter)">{{ filter.name }}</div>
                    </div>
                </v-card-actions>
            </v-card>
        </v-menu>
        <div class="fields-wrapper">
            <div v-for="filter in selectedFilters" :key="filter.name" class="filter-fields">
                <div class="remove-filter">
                    <v-btn
                        class="remove-button"
                        dark
                        fab
                        :color="options.removeIconColor"
                        @click="removeFilter(filter)"
                    >
                        <v-icon dark> {{ options.removeIcon }}</v-icon>
                    </v-btn></div>
                <div v-if="filter.type === 'boolean'">
                    <v-checkbox
                        v-model="filter.value"
                        :label="filter.name"
                        @change="filterChange"
                    />
                </div>
                <div v-if="filter.type === 'dropdown'">
                    <v-select
                        v-model="filter.value"
                        :items="filter.items"
                        menu-props="auto"
                        :label="filter.name"
                        hide-details
                        :prepend-icon="filter.prependIcon"
                        single-line
                        clearable
                        :return-object="!filter.itemValue"
                        :item-value="filter.itemValue"
                        @change="filterChange"
                    >
                        <template slot="item" slot-scope="data">
                            {{ itemTextFieldCreator(data.item, filter) }}
                        </template>
                        <template slot="selection" slot-scope="data">
                            {{ itemTextFieldCreator(data.item, filter) }}
                        </template>
                    </v-select>
                </div>
                <div v-if="filter.type === 'text'">
                    <v-text-field
                        :id="'text-field-'+filter.name"
                        v-model="filter.value"
                        :label="filter.name"
                        clearable
                        @blur="filterChange"
                        @keyup.enter="onEnterPress('text-field-'+filter.name)"
                    />
                </div>
                <div v-if="filter.type === 'radio-button'">
                    <v-radio-group
                        v-model="filter.value"
                        :row="filter.direction"
                        @change="filterChange"
                        >
                        <v-radio
                            v-for="(item, index) in filter.items" :key="index"
                            :label="itemTextFieldCreator(item, filter)"
                            :value="filter.itemValue ? item[filter.itemValue] : item"
                        />
                    </v-radio-group>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'FilterBuilder',
        props: {
            filters: {
                type: Array,
                required: true
            },
            options: {
                type: Object,
                required: false,
                default: () => {
                  return  {
                        builderIcon: 'mdi-plus',
                        builderIconColor: '#ac282d',
                        removeIcon: 'mdi-close-circle',
                        removeIconColor: '#FF0000'
                    }
                }
            }
        },
        data() {
            return {
                selectedFilters: [],
                previousSelectedFilters: [],
                dropDownItemTypes: ['string', 'number', 'boolean', 'bigint', 'symbol']
            }
        },
        methods: {
            addFilter(newFilter) {
                const sameFilter = this.selectedFilters.find(filter => { return filter.key === newFilter.key })
                if (!sameFilter) {
                    this.selectedFilters.push(newFilter)
                }
            },
            filterChange() {
                const filters = JSON.parse(JSON.stringify(this.selectedFilters))
                if (JSON.stringify(filters) === JSON.stringify(this.previousSelectedFilters)) {
                    return
                }
                let filterObject = {}
                filters.forEach(filter => {
                    if (filter.value !== null && filter.value !== undefined) {
                        filterObject[filter.key] = filter.value
                    }
                })
                this.$emit('filter-change', filterObject)
                this.previousSelectedFilters = filters
            },
            onEnterPress(id) {
                document.getElementById(id).blur()
            },
            removeFilter(filter) {
                const filterIndex = this.selectedFilters.indexOf(filter)
                this.selectedFilters.splice(filterIndex, 1)
                this.selectedFilters = [...this.selectedFilters]
                if (filter.value || filter.value === false) {
                    this.filterChange()
                    delete filter.value
                }
            },
            itemTextFieldCreator(item, filter) {
                if (this.dropDownItemTypes.includes(typeof item)) {
                    return item
                }
                const seperator = filter.fieldSeparator || ' '
                if (Array.isArray(filter.itemTextKey)) {
                    let fieldTexts = filter.itemTextKey.map(itemTextKey => item[itemTextKey])
                    return fieldTexts.join(seperator)
                }
                if (typeof filter.itemTextKey === 'string') {
                    return item[filter.itemTextKey]
                }
            }
        }

    }
</script>

<style scoped>
.remove-button {
    position: absolute;
    top: 0;
    right: 0;
    max-width: 18px;
    max-height: 18px;
}

.filter-wrapper {
    display: flex;
    flex-wrap: wrap;
}

.filter-fields {
    position: relative;
    margin: 0.5vw;
    border: #D3D3D3 solid 1px;
    border-radius: 10px;
    padding: 1vw;
    max-width: 300px;
}
.filter-label {
    font-weight: bold;
    align-self: center;
}
.plus-button {
    align-self: center;
}
.fields-wrapper {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
}
.filter-choices-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-content: center;
}
.filter-choices {
    width: 100%;
    padding: 0.5vw;
}
.filter-choices:hover {
    background-color: #D3D3D3;
    cursor: pointer;
}
.v-text-field, .v-input--selection-controls {
    margin-top: 0 !important;
    padding-top: 0 !important;
}

.v-text-field__details,
.v-messages {
    display: none !important;
}
</style>
<style>
.v-messages {
    display: none !important;
}
.v-input__slot {
    margin-bottom: 0 !important;
}

</style>
