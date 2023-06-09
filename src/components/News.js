import React from 'react';

const newsData = [
  {
    id: 1,
    title: 'New Album Release',
    band: 'Electra ',
    date: 'June 1, 2023',
    content:
      ' Electra has just released their highly anticipated new album. Check it out now!',
  },
  {
    id: 2,
    title: 'Exclusive Interview with Noel',
    band: 'Noel ',
    date: 'May 25, 2023',
    content:
      'Read our exclusive interview with Noel as they discuss their musical journey and upcoming projects.',
  },
  {
    id: 3,
    title: 'World Tour Coming',
    band: 'Nijana',
    date: 'June 12, 2023',
    content:
      'Nijana has just announced their upcoming tour. Check out the tour cities here!',
  },
  {
    id: 4,
    title: 'Partnership with Adidas',
    band: 'Mosi Mosi ',
    date: 'May 29, 2023',
    content:
      'Mosi Mosi is partnering with adidas in their new sneaker relsease!',
  },
  {
    id: 5,
    title: 'Suit Incoming!!',
    band: 'Joyners ',
    date: 'May 31, 2023',
    content:
      'We might see Joyners members behind bars soon. Click to find out why',
  },
  {
    id: 1,
    title: 'New Album Release',
    band: 'Electra ',
    date: 'June 1, 2023',
    content:
      'Band A has just released their highly anticipated new album. Check it out now!',
  },
  // Add more news entries as desired
];

const News = () => {
  return (
    <div className="news-section">
    <h2 className="news-heading">News and Blogs</h2>
    {newsData.map((news) => (
      <div className="news-card" key={news.id}>
        <h3 className="news-title">{news.title}</h3>
        <p className="news-meta">
          <strong className="news-band">{news.band}</strong> |{' '}
          <span className="news-date">{news.date}</span>
        </p>
        <p className="news-content">{news.content}</p>
      </div>
    ))}
  </div>
  );
};

export default News;
