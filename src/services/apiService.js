import React from 'react';

class ApiService extends React.Component {
  baseUrl = 'https://cirosantilli-realworld-next.herokuapp.com/api';

  async getRequest(url) {
    const response = await fetch(`${this.baseUrl}${url}`)
      .then((res) => {
        if(!res.ok) {
          throw new Error(`Could not fetch ${url}, received ${res.status}`)
        }
        return res.json();
      })
      .catch((error) => console.error(`Could not fetch `, error.message));
    return response;
  }

  async getArticlesList(page = 1) {
    const offset = (page - 1) * 5;
    const response = await this.getRequest(`/articles?limit=5&offset=${offset}`);
    return response;
  }

  async getArticle(slug) {
    const response = await this.getRequest(`/articles/${slug}`);
    return response;
  }

  async registerUser(data) {
    const response = await fetch(`${this.baseUrl}/users`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({ user: data })
      }
    )
    return response.json();
  }

  async loginUser(data) {
    const response = await fetch(`${this.baseUrl}/users/login`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({ user: data })
    }
  )
  return response.json();
  }

  async updateUser(data, token) {
    const response = await fetch(`${this.baseUrl}/user`,
    {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
        'Authorization': `Token ${token}`
      },
      body: JSON.stringify({ user: data })
    }
  )
  return response.json();
  }
}

export default ApiService;