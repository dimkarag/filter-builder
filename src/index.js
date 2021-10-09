import Vue from 'vue'
import FilterBuilder from '@/src/FilterBuilder'

export default {
    install(Vue, options) {
        Vue.component("filter-builder", FilterBuilder);
    }
}
