import React from 'react';
import moment from 'moment';

export const NewsSummaryCard = ({article}) => {
  return (
    article !== undefined && (
    <div>
    <h3>{article.title}</h3>
    <p>{article.description}</p>
    <p>Author: {article.source.name}</p>
    <p>Published: {moment(article.publishedAt).format('DD-MM-YYYY')}</p>
    </div>
  ))
}
