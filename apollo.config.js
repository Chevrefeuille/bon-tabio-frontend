module.exports = {
  client: {
    service: {
      name: "my-app",
      // URL to the GraphQL API
      url: import.meta.env.VITE_GRAPHQL_URL,
    },
    // Files processed by the extension
    includes: ["src/**/*.vue", "src/**/*.ts"],
  },
};