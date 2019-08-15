// @flow
import React from 'react';
import moment from 'moment';

type State = {
  isLoaded: boolean,
  error: ?string,
  articles: ?any[]
};

// $FlowFixMe
export default class NewsFeed extends React.Component<Props, State>{
  constructor(props: any) {
    super(props);
    this.state = {
      isLoaded: false,
      error: null,
      articles: null,
    }
  }
  componentDidMount() {
    process.env.REACT_APP_NEWS_API_KEY && (
    fetch(`https://newsapi.org/v2/top-headlines?country=gb&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`)
      .then(res => res.json())
      .then(
        (result) => {
          console.log(result.articles)
           this.setState({
             isLoaded: true,
             articles: result.articles
         });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error
          });
        }
      )
    )
  }
  render() {
    const { articles } = this.state;
    console.log(articles)

    return (
      <div>
      <h1>News Feed</h1>
      {articles && articles.map((article, index) => {
      return (
        <div key={index}>
        <h3>{article.title}</h3>
        <p>{article.description}</p>
        <p>Author: {article.author}</p>
        <p>Published: {moment(article.publishedAt).format('DD-MM-YYYY')}</p>
        </div>
      )
      })
      }
      </div>
    );
  }
}
