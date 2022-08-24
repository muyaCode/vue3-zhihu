<template>
  <div class="dropdown" ref="dropdownRef">
        <a href="#" class="btn btn-outline-light my-2 dropdown-toggle" @click.prevent="toggleOpen">
            {{title}}
        </a>
        <ul class="dropdown-menu" :style="{display: 'block'}" v-if="isOpen">
            <slot></slot>
        </ul>
    </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from 'vue'
import useClickOutside  from '../hooks/useClickOutside'

export default defineComponent({
  name: 'Dropdown',
  props: {
    title: String
  },
  setup() {
    const isOpen = ref(false);
    const toggleOpen = () => {
        isOpen.value = !isOpen.value
    }

    // 点击元素外部隐藏
    const dropdownRef = ref<null | HTMLElement>(null)
    const isClickOutside = useClickOutside(dropdownRef)
    // 实时监听是否点击元素外部
    watch(isClickOutside,() => {
        if (isOpen.value && isClickOutside.value) isOpen.value = false
    })
    
    return {
        isOpen,
        toggleOpen,
        dropdownRef
    }
  }
});
</script>

<style scoped lang="less">
  
</style>
