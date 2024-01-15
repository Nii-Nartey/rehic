import { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';
import LocationdData from './LocationData/LocationdData';

const Locations = () => {
  interface GifDataSchema {
    images: {
      fixed_height: { url: string };
    };
    id: string;
    title: string;
    type: string;
  }

  const [gifsData, setGifsData] = useState([]);
  const getGifs = async () => {
    try {
      const response = await axios.get(
        'https://api.giphy.com/v1/gifs/trending',
        {
          params: {
            api_key: 'nAcqeqTWW7AuP8ILRRZs7MKRPU133gKT',
            /*  limit: 5, */
          },
        }
      );
      setGifsData(response.data.data);
      console.log(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  const renderGifHandler = () =>
    gifsData.map((el: GifDataSchema) => (
      <LocationdData
        keys={el.id}
        src={el.images.fixed_height.url}
        alt='alter'
        title={el.title}
        text={el.type}
      />
    ));
  return (
    <section className='location__container'>
      <h2>Locations</h2>
      <div className='location__div'>{renderGifHandler()}</div>
    </section>
  );
};

export default Locations;
