<template>
  <div>
    <el-select v-model="value" v-bind="$attrs" v-on="$listeners">
      <slot></slot>
    </el-select>
    <input type="hidden" :name="name" :value="value" />
  </div>
</template>

<script>
export default {
  props: {
    value: String,
    name: String,
  },
};
</script>