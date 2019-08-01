const { RESTDataSource } = require('apollo-datasource-rest');

const hashString = (str) => {
  let hash = 5381;
  let i = str.length;

  while(i) {
    hash = (hash * 33) ^ str.charCodeAt(--i);
  }

  return hash >>> 0;
}

class JokesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.chucknorris.io/jokes/';
  }

  categoryReducer(category) {
    const hashedValue = hashString(category);
    return {
      id: hashedValue,
      cursor: `${hashedValue}`,
      name: category,
    }
  }

  jokeReducer(joke) {
    return {
      categories: joke.categories.map(category => this.categoryReducer(category)),
      created_at: joke.created_at,
      icon_url: joke.icon_url,
      id: joke.id,
      updated_at: joke.updated_at,
      url: joke.url,
      value: joke.value,
    }
  }

  async getAllCategories() {
    const response = await this.get('categories');

    return Array.isArray(response)
      ? response.map(category => this.categoryReducer(category)) : [];
  }

  async getJokeByCategory({ categoryName }) {
    const response = await this.get('random', { category: categoryName });

    return this.jokeReducer(response);
  }
}

module.exports = JokesAPI;
