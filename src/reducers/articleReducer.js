import { SET_ARTICLES } from "../actions/actions";

const initialState = {
  articles: [
    {
      slug: "testsw-czys75",
      title: 'Hello',
      description: "join the community by creating a new implementation",
      body: "Share your knowledge and enpower the community by creating a new implementation",
      tagList: [
        "codebaseShow",
        "implementations"
        ]
    },
    {
      slug: "testswsfse75",
      title: 'Story my',
      description: "Exemplary fullstack Medium.com clone powered by React, Angular, Node, Django, and many more",
      body: "See how the exact same Medium.com clone (called Conduit) is built using different frontends and backends. Yes, you can mix and match them, because they all adhere to the same API spe",
      tagList: [
        "codebaseShow",
        "imtions"
        ]
    },
    {
      slug: "testsw-cz3423424",
      title: 'Friendly fire',
      description: "Explore implementations",
      body: "Over 100 implementations have been created using various languages, libraries, and frameworks. Explore them on CodebaseShow.",
      tagList: [
        "codebaseShow"
        ]
    },
  ]
}

const articleReducer = (state = initialState, { type, articles }) => {
  switch (type) {
    case SET_ARTICLES:
      return {...state, articles };
    default:
      return state;
  }
}

export default articleReducer;