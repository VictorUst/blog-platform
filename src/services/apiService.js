import React from 'react';

class ApiService extends React.Component {
  // baseUrl = 'https://kata.academy:8021/api';
  baseUrl = 'http://kata.academy:8022';
  // baseUrl = 'https://cirosantilli-realworld-next.herokuapp.com/api';

  // получение списка статей
  async getArticlesList(page = 1) {
    const offset = (page - 1) * 5;
    const response = await fetch(`${this.baseUrl}/articles?limit=5&offset=${offset}`);
    return response.json();
  }

  // получение полной статьи
  async getArticle(slug) {
    const response = await fetch(`${this.baseUrl}/articles/${slug}`);
    return response.json();
  }

  // регистрация пользователя
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

  // авторизация пользователя
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

  // обновление данных пользователя
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

  // добавление новой статьи
  async createArticle(data, token) {
    const response = await fetch(`${this.baseUrl}/articles`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify({ article: data })
      }
    )
    return response.json();
  }

  // обновление статьи
  async editArticle(data, token, slug) {
    const response = await fetch(`${this.baseUrl}/articles/${slug}`,
      {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Token ${token}`
        },
        body: JSON.stringify({ article: data })
      }
    )
    return response.json();
  }

  // удаление статьи
  async deleteArticle(token, slug) {
    const response = await fetch(`${this.baseUrl}/articles/${slug}`,
      {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Token ${token}`
        }
      }
    )
    return response.json();
  }

  async likeArticle(token, slug) {
    const response = await fetch(`${this.baseUrl}/articles/${slug}/favorite`,
      {
        method:  'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Token ${token}`
        }
      }
    )
    return response.json();
  }

  async dislikeArticle(token, slug) {
    const response = await fetch(`${this.baseUrl}/articles/${slug}/favorite`,
      {
        method:  'DELETE',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
          'Authorization': `Token ${token}`
        }
      }
    )
    return response.json();
  }

}

export default ApiService;