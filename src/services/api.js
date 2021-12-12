const BASE_URL = 'https://cirosantilli-realworld-next.herokuapp.com/api';

const getResource = async (url) => {
  try {
    const res = await fetch(`${BASE_URL}${url}`);

    if(!res.ok) {
      throw new Error(`Could not fetch ${url}, received ${res.status}`)
    }

    const body = await res.json();
    return body;
  } catch (error) {
    console.error(`Could not fetch `, error.message);
    return false;
  }
}

export const getArticlesList = (page = 1) => {
  const offset = (page - 1) * 5;
  return getResource(`/articles?limit=5&offset=${offset}`)
}

export const getArticle = (slug) => getResource(`/articles/${slug}`);

export default getResource;