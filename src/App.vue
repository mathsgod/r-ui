<template>
  <div id="app">
    <r-form
      action="https://postman-echo.com/post"
      method="POST"
      :data="{
        cb1: true,
        input1: 'hello',
        date1: '2020-12-01',
        date2: '2020-12-01',
      }"
    >
      <template slot-scope="scope">
        <el-form-item label="date2" prop="date2">
          <r-date
            name="date2"
            v-model="scope.form.date2"
            value-format="yyyy-MM-dd"
          ></r-date>
        </el-form-item>

        <el-form-item label="cb1" prop="cb1">
          <el-checkbox v-model="scope.form.cb1"></el-checkbox>
          <input type="hidden" name="cb1" :value="scope.form.cb1 ? 1 : 0" />
        </el-form-item>

        <el-form-item label="input1" prop="input1">
          <el-input name="input1" v-model="scope.form.input1"></el-input>
        </el-form-item>

        <el-form-item label="select1" prop="select1" required>
          <el-select v-model="scope.form.select1">
            <el-option :value="1" label="test1"></el-option>
            <el-option :value="2" label="test2"></el-option>
          </el-select>
          <input type="hidden" name="select1" v-model="scope.form.select1" />
        </el-form-item>

        <el-form-item label="date1" prop="date1">
          <el-date-picker
            name="date1"
            v-model="scope.form.date1"
            value-format="yyyy-MM-dd"
          ></el-date-picker>
        </el-form-item>
      </template>
    </r-form>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
  data() {
    return {
      tableData: [
        {
          date: "2016-05-03",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-02",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-04",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
        {
          date: "2016-05-01",
          name: "Tom",
          address: "No. 189, Grove St, Los Angeles",
        },
      ],
    };
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

