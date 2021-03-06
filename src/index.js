import Vue from 'vue';
import ElementUI from 'element-ui';
Vue.use(ElementUI);

import RForm from './r-form';
import RFormTable from './r-form-table';
import RA from './r-a';
import RDate from './r-date';
import RSelect from './r-select';

const install = function (Vue) {

    Vue.component("r-form", RForm);
    Vue.component("r-form-table", RFormTable);
    Vue.component("r-a", RA);
    Vue.component("r-date", RDate);
    Vue.component("r-select", RSelect);
};

export default {
    install
}