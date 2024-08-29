import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import '@fortawesome/fontawesome-free/css/all.css';
import '@fortawesome/fontawesome-free/js/all.js';
//
import 'ant-design-vue/dist/reset.css';

import '@ant-design/icons-svg';
import 'bootstrap/dist/css/bootstrap-grid.min.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import {
    Space,
    Input,
    Avatar,
    Image,
    List,
    Card,
    Table,
    Menu,
    Select,
    Checkbox,
    Modal,
    Drawer,
    Button,
    Badge,
    Dropdown,
    message
} from 'ant-design-vue';

const app = createApp(App)





app.use(Drawer)
    .use(Button)
    .use(List)
    .use(Menu)
    .use(Card)
    .use(Table)
    .use(Space)
    .use(Select)
    .use(Avatar)
    .use(Input)
    .use(Checkbox)
    .use(Image)
    .use(Dropdown)
    .use(Modal)
    .use(Badge)
    .mount('#app')

