import React from 'react';
import fetchArticle from '../api/fetchArticle';
import HTMLReactParser from 'html-react-parser';

class Article extends React.Component {
  constructor(props) {
    super(props);
    if (props.staticContext && props.staticContext.content.rendered) {
      this.state = {
        article: props.staticContext.content.rendered
      };
    } else {
      this.state = {
        article: []
      };
    }
  }
  componentDidMount() {
    setTimeout(() => {
      if (window.__ROUTE_DATA__) {
        this.setState({
          article: window.__ROUTE_DATA__
        });
        delete window.__ROUTE_DATA__;
      } else {
        fetchArticle()
          .then(data => {
            const article = data.content.rendered;
            this.setState({ article });
          });
      }
    }, 0);
  }

  render() {
    return (
      <div>{HTMLReactParser(`${this.state.article}`)}</div>
    );
  }
}

export default Article;