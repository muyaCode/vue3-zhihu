<script lang="ts">
import { defineComponent } from 'vue';
import './assets/bootstrap.min.css';
import ColumnList, { ColumnProps } from './components/ColumnList.vue';
import GlobalHeader, { UserProps } from './components/GlobalHeader.vue';

const currentUser: UserProps = {
  isLogin: true,
  name: 'wiking',
  id: 1
}

const testData: ColumnProps[] = [
  {
    id: 1,
    title: 'test1的专栏',
    description: '这是专栏的简介',
    avatar: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg'
  },
  {
    id: 2,
    title: 'test2的专栏',
    description: '这是专栏的简介',
    avatar: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg'
  },
  {
    id: 3,
    title: 'test3的专栏',
    description: '这是专栏的简介',
    avatar: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg'
  },
  {
    id: 4,
    title: 'test4的专栏',
    description: '这是专栏的简介',
    avatar: 'https://lf-cdn-tos.bytescm.com/obj/static/xitu_extension/static/gold.981a5510.svg'
  },
]

export default defineComponent({
  name: "App",
  components: {
    ColumnList,
    GlobalHeader
  },
  setup() {
    return {
      list: testData,
      currentUser
    }
  }
})
</script>

<template>
  <global-header :user="currentUser"></global-header>
  <div class="container" style="width: 1000px;">
    <column-list :list="list"></column-list>
  </div>
</template>

<style scoped>

</style>
