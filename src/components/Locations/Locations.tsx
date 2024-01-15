import { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';
import LocationdData from './LocationData/LocationdData.tsx';
import LoadingSpinner from '../Utils/LoadingSpinner.tsx';

const Locations = () => {
  interface GifDataSchema {
    id: string;
    images: {
      fixed_height: {
        url: string;
      };
    };
    title: string;
    type: string;
  }

  const [gifsData, setGifsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getGifs = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        'https://api.giphy.com/v1/gifs/trending',
        {
          params: {
            api_key: 'nAcqeqTWW7AuP8ILRRZs7MKRPU133gKT',
            limit: 5,
          },
        }
      );
      setGifsData(response.data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getGifs();
  }, []);

  const renderGifHandler = () => {
    if (isLoading) {
      return <LoadingSpinner />;
    }
    return gifsData.map((el: GifDataSchema) => (
      <LocationdData
        key={el.id}
        src={el.images.fixed_height.url}
        alt='alter'
        title={el.title}
        text={el.id}
      />
    ));
  };

  return (
    <section className='location__container'>
      <h2>Locations</h2>
      <div className='location__div'>{renderGifHandler()}</div>
    </section>
  );
};

export default Locations;
