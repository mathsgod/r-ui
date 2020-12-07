<template>
  <el-date-picker
    v-bind="$attrs"
    v-on="$listeners"
    :picker-options="pickerOptions"
    value-format="yyyy-MM-dd"
    format="yyyy-MM-dd"
  ></el-date-picker>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        shortcuts: [
          {
            text: "Today",
            onClick(picker) {
              picker.$emit("pick", new Date());
            },
          },
        ],
      },
    };
  },
};
</script>