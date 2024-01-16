import { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';
import LocationdData from './LocationData/LocationdData.tsx';
import LoadingSpinner from '../Utils/Spinner/LoadingSpinner.tsx';
import RedError from '../Utils/errorsAlert/RedError.tsx';

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
  const [isError, setIsError] = useState(false);

  const getGifs = async () => {
    try {
      setIsLoading(true);
      setIsError(false);
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
      setIsError(true);
    }
  };

  const isErrorHandler = () => {
    return isError ? <RedError theMsg={'Network Error'} /> : '';
  };

  useEffect(() => {
    getGifs();
  }, []);

  const renderGifHandler = () => {
    if (isLoading) {
      return (
        <div className='spin-container'>
          {isErrorHandler()}
          <LoadingSpinner />
        </div>
      );
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
