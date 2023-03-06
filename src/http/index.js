import Vue from 'vue';

// Axios
import axios    from 'axios';
import VueAxios from 'vue-axios';

axios.defaults.baseURL = '/api';

axios.interceptors.request.use((config) => {
    config.headers['Synpse-User-Agent'] = 'synpse-ui-client/v1'
    return config
});

Vue.use(VueAxios, axios);

export default {
    root: process.env.VUE_APP_API_URL
};