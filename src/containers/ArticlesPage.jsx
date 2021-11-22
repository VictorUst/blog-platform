import { connect } from "react-redux";
import ArticleList from '../components/ArticleList/ArticleList';

const mapStateToProps = (state) => ({
    articles: state.articlesData.articles
})

export default connect(mapStateToProps)(ArticleList);