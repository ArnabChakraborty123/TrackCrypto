// import React from 'react';
// import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
// import moment from 'moment';  

// import { cryptoNewsApi, useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

// const {Text, Title }= Typography;
// const { Option } = Select;

// const News=({ simplified })=>{

//   const count = simplified ? 5 : 12 ;
//   const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count });

// if (!cryptoNews?.value) return 'Loading...';
// console.log(cryptoNews);
// return (
//   <div>
//     <Row gutter={[24, 24]}>
//       {cryptoNews.value.map((news, i) => (
//         <Col xs={24} sm={12} lg={8} key={i}>
//           <Card hoverable className='news-card'>
//             <a href={news.link} target='_blank' rel='noreferrer'>
//               <div className='news-image-container'>
//                 <Title className='news-title' level={4}>{news.title}</Title>
//               </div>
//             </a>
//           </Card>
//         </Col>
//       ))}
//     </Row>
//   </div>
// );
// };

// export default News;

import React from 'react';
import { Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment';  

import { cryptoNewsApi, useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text, Title }= Typography;
const { Option } = Select;
const demoImage = 'https://www.bing.com/th?id=OVFT.mpzuVZnv8dwIMRfQGPbOPC&pid=News'
const News=({ simplified })=>{

  const count = simplified ? 6 : 12 ;
  const { data: cryptoNews } = useGetCryptoNewsQuery({ newsCategory: 'Cryptocurrencies', count });

if (!cryptoNews?.value) return 'Loading...';
console.log(cryptoNews);
return (
  <>
      <Row gutter={[24, 24]}>
          {cryptoNews.value.map((news, i) => (
              <Col xs={24} sm={12} lg={8} key={i}>
                  <Card hoverable className='news-card'>
                      <a href={news.url} target='_blank' rel="noreferrer">
                          {/* This line of code creates a clickable link using the URL provided by the news.url value. When the link is clicked, it will open the linked page in a new tab or window for improved security. */}
                          <div className='news-image-container'>
                              <Title className='news-title' level={4}>{news.name}</Title>
                          <img style={{ maxWidth: '200px' , maxHeight: '100px'}} src={news?.image?.thumbnail?.contentUrl || demoImage} alt='news'/> 
                          </div>
                         <p> 
                         {news.description > 100
                            ? `${news.description.substring(0 , 100)}...`
                         : news.description
                         }
                         </p>

                     <div className='provider-container'>
                        <div>
                            <Avatar src={news.provider[0]?.image.thumbnail?.contentUrl || demoImage} alt='' />
                            <Text className='provider-name'>{news.provider[0]?.name}</Text>
                        </div>
                     </div>
                      </a>
                  </Card>
              </Col>
          ))}
      </Row>
  </>
);
}
export default News