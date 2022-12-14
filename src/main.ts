import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./vue-apollo";

import App from "./App.vue";
import router from "./router";

import Markdown from "vue3-markdown-it";

import "./assets/main.css";

import "./plugins/fontawesome";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

const app = createApp(App);

app.use(router);
app.component("vue-markdown", Markdown);
app.provide(DefaultApolloClient, apolloClient);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
