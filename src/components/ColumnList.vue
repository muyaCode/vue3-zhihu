<template>
  <div class="row">
    <div v-for="column in columnList" :key="column.id" class="col-4 mb-3">
      <div class="card">
        <div class="card-body text-center">
          <img :src="column.avatar" :alt="column.title" class="card-img-top" />
          <h5 class="card-title">{{ column.title }}</h5>
          <p class="card-text">{{ column.description }}</p>
          <a href="#" class="btn btn-primary">进入专栏</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, PropType } from "vue";
import { defineComponent } from "vue";

export interface ColumnProps {
    id: number;
    title: string;
    avatar: string;
    description: string;
}

export default defineComponent({
  name: "ColumnList",
  props: {
    list: {
        type: Array as PropType<ColumnProps[]>,
        required: true
    }
  },
  setup(props) {
    const columnList = computed(() => {
      return props.list.map( column => {
        // 设置默认的图片
        if(!column.avatar) {
          column.avatar = 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/github.46c47564.png'
        }
        return column;
      })
    })

    return {
      columnList
    }
  },
});
</script>

<style scoped lang="less"></style>
