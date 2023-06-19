import { Card } from 'antd';
import { Rate } from 'antd';
import { Descriptions } from 'antd';
import React from 'react';
import { animated, useSpring } from 'react-spring';

const { Meta } = Card;

import './cardItem.css';

import { Tooltip } from 'antd';

import cutText from '../../services/catText';

const CardItem = ({ items }) => {
  const fade = useSpring({
    to: { opacity: 1 },
    from: { opacity: 0 },
  });

  return (
    <>
      {items.map((obj, i) => {
        const releaseDate = obj.release_date.slice().split('-').reverse().join('.');
        const voteAverage = obj.vote_average.toString().slice(0, -1);

        return (
          <animated.li style={fade} className="list-group-item" key={i}>
            <Card aria-label={obj.title} cover={<img alt="" src={`https://image.tmdb.org/t/p/w500/${obj.poster_path}`} />} hoverable>
              <Meta title={obj.title} description={cutText(obj.overview, 130)} />
              <Descriptions>
                <Descriptions.Item label="Жанр">жанр</Descriptions.Item>
                <Descriptions.Item label="Год выпуска">{releaseDate}</Descriptions.Item>
              </Descriptions>
              <div className="rating-block">
                <Rate />
                <div className="rating-cycle">
                  <Tooltip title="Рейтинг">
                    <span aria-label={voteAverage} className="vote-average">
                      {voteAverage}/10
                    </span>
                  </Tooltip>
                </div>
              </div>
            </Card>
          </animated.li>
        );
      })}
    </>
  );
};

export default CardItem;
