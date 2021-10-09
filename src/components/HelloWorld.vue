<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <filter-component :filter-fields="filterFields" @filter-change="filterChanged" />
  </div>
</template>

<script>
import FilterComponent from './FilterBuilder.vue'
export default {
  name: 'HelloWorld',
  components: { FilterComponent },
  props: {
    msg: String
  },
  data() {
    return {
      filterFields: [
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
              items: [{ title: 'edw', name: 'poly '}, 2],
              itemValue: 'id',
              prependIcon: 'mdi-domain'
          }
      ],
    }
  },
  methods: {
    filterChanged(e) {
      console.log(e)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
