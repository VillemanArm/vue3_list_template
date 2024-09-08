<template>
    <ListToolbar />
    <List />
    <BasePagination
        :maxPage="maxPage"
        :currentPage="currentPage"
        @changePage="(pageNumber) => changePage(pageNumber)"
    />
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute} from 'vue-router'
import List from './components/List.vue'
import ListToolbar from './components/ListToolbar.vue'
import BasePagination from '@/shared/ui/BasePagination.vue'

defineProps<{
    msg?: string
}>()

const currentPage = ref(1)
const maxPage = ref(10)

const changePage = (pageNumber: number) => {
    currentPage.value = pageNumber
}
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
</style>
