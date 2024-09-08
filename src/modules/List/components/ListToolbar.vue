<template>
    <div class="toolbar">
        <h3>list toolbar</h3>
        <button @click="isModal = true">new</button>
        <div class="dropping-list">
            <span @click="isDropList = !isDropList">drop</span>
            <BaseDropList :isOpen="isDropList">
                <ul>
                    <li>Option 1</li>
                    <li>Option 2</li>
                    <li>Option 3</li>
                </ul>
            </BaseDropList>
        </div>
        <BaseModal
            v-if="isModal"
            @closeModal="() => (isModal = false)"
        />
    </div>
</template>

<script setup lang="ts">
import { reactive, ref, computed, onMounted, onUpdated, watch } from 'vue'
//import {useRoute, useRouter} from 'vue-router'
import BaseModal from '@/shared/ui/BaseModal.vue';
import BaseDropList from '@/shared/ui/BaseDropList.vue';

defineProps<{
    msg?: string
}>()

const isModal = ref(false)
const isDropList = ref(false)
</script>

<style scoped lang="sass">
@import '@/assets/styles/constants.sass'
.toolbar
    display: flex
</style>
