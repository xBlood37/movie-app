import { Card } from 'antd';
import { Rate } from 'antd';
import { Descriptions } from 'antd';
import React from 'react';

const { Meta } = Card;

import './cardItem.css';

import cutText from '../../services/catText';

const CardItem = ({ items }) => {
  return (
    <>
      {items.map((obj, i) => {
        return (
          <li className="list-group-item" key={i}>
            <Card aria-label={obj.title} cover={<img alt="" src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`} />} hoverable>
              <Meta title={obj.title} description={cutText(obj.overview, 100)} />
              <Descriptions>
                <Descriptions.Item label="Genres">жанр</Descriptions.Item>
                <Descriptions.Item label="Year">{obj.release_date}</Descriptions.Item>
              </Descriptions>
              <div className="rating-block">
                <Rate />
                <div className="rating-cycle">
                  <span aria-label={obj.vote_average} className="vote-average">
                    {obj.vote_average}
                  </span>
                </div>
              </div>
            </Card>
          </li>
        );
      })}
    </>
  );
};

export default CardItem;
