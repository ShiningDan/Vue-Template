import Vue from 'vue'

import {
  Container,
  Menu,
  Submenu,
  MenuItem,
  Header,
  Main,
  Footer,
  Aside,
  Form,
  FormItem,
  Input,
  Button,
  Tag,
  Notification,
} from 'element-ui'

Vue.use(Container)
Vue.use(Menu)
Vue.use(Submenu)
Vue.use(Header)
Vue.use(Main)
Vue.use(Footer)
Vue.use(Aside)
Vue.use(MenuItem)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Button)
Vue.use(Tag)

Vue.prototype.$notify = Notification
