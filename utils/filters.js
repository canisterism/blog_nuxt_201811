import Vue from "vue"
import moment from "moment";
Vue.filter("moment", date => moment(date).format("YYYY/MM/DD HH:mm"));
