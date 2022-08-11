import { createApp } from "vue";
import { DefaultApolloClient } from "@vue/apollo-composable";
import apolloClient from "./vue-apollo";

import App from "./App.vue";
import router from "./router";

import Oruga from "@oruga-ui/oruga-next";
import { bulmaConfig } from "@oruga-ui/theme-bulma";

import "@oruga-ui/theme-bulma/dist/bulma.css";
import "./assets/main.css";

const app = createApp(App);

app.use(router);
app.provide(DefaultApolloClient, apolloClient);
app.use(Oruga, bulmaConfig);
app.mount("#app");
