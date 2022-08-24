import { onMounted, onUnmounted, Ref, ref } from 'vue';

const useClickOutside = (elementRef: Ref<null | HTMLElement>) => {
    const isClickOutside = ref(false);

    // 点击Ref元素外部关闭 下拉选项
    const handler = (e: MouseEvent) => {
        if (elementRef.value) {
            // 获取元素外部：.contains(e.target as HTMLElement)
            if (elementRef.value.contains(e.target as HTMLElement)) {
                isClickOutside.value = false
            } else {
                isClickOutside.value = true
            }
        }
    }

    onMounted(() => {
        document.addEventListener('click', handler)
    })
    onUnmounted(() => {
        document.removeEventListener('click', handler)
    })

    return isClickOutside
}

export default useClickOutside
