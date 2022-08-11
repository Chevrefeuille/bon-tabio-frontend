module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: import.meta.env.VUE_APP_GRAPHQL_URL,
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};