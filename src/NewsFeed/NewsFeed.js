// @flow
import React from 'react';

type State = {
  isLoaded: boolean,
  error: ?string,
  articles: ?any[]
};

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
    return (
      <div>
      <h1>News Feed</h1>
      </div>
    );
  }
}
