export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register({strapi}) {
    const extensionService = strapi.plugin("graphql").service("extension");
    extensionService.use(({nexus}) => ({
      types: [
        nexus.extendType({
          type: "UsersPermissionsRegisterInput",
          definition(t) {
            // here define fields you need
            t.string("attribution");
          },
        }),
      ]
    }));
  },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
  },
};
