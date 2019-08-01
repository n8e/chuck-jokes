const { paginateResults } = require('./utils');

module.exports = {
  Query: {
    categories: async(_, { pageSize = 20, after }, { dataSources }) => {
      const allCategories = await dataSources.jokesAPI.getAllCategories();

      const categories = paginateResults({
        after,
        pageSize,
        results: allCategories,
      });

      return {
        categories,
        cursor: categories.length ? categories[categories.length - 1].cursor : null,
        hasMore: categories.length
          ? categories[categories.length - 1].cursor !==
            allCategories[allCategories.length - 1].cursor
          : false,
      }
    },
    joke: async(_, { category = 'dev' }, { dataSources }) => 
      await dataSources.jokesAPI.getJokeByCategory({ categoryName: category }),
  },
};
