import Vue from 'vue'
import VueAwesomeSwiper from 'vue-awesome-swiper'
import VueResource from 'vue-resource'
import FastClick from 'fastclick'
import Vuex from 'vuex';

import AMap from 'vue-amap'
import VueLazyload from 'vue-lazyload';
import VuePaginate from 'vue-paginate'

Vue.config.productionTip = false

Vue.use(VueAwesomeSwiper);
Vue.use(VueResource);
Vue.use(Vuex);
Vue.use(AMap);
Vue.use(VuePaginate)

Vue.use(VueLazyload, {
  preLoad: 1.3,
  loading: 'http://s.qunarzz.com/piao_topic/image/common/default/288x288.png',
  attempt: 1
})

AMap.initAMapApiLoader({
  key: '2ff2e5535cd7ae698e7af431e6558948',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor']
});

FastClick.attach(document.body);

export default {}
