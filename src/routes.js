import Article from '../src/components/Article';
import Home from '../src/components/Home';
import fetchArticle from './api/fetchArticle';

const Routes = [
  {
    path: "/",
    component: Home,
    exact: true
  },
  {
    path: "/article",
    component: Article,
    exact: true,
    loadData: () => fetchArticle()
  }
];

export default Routes;