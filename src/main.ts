import { createApp } from "vue";
import "./styles/index.scss";
import App from "@/App.vue";

import "virtual:svg-icons-register";



import axios from 'axios'

axios({
    url: '/api/user/login',
    method: 'post',
    data: {
        username: 'admin',
        password: 123
    }
})





createApp(App).mount("#app");
