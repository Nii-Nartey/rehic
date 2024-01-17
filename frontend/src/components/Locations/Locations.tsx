import { useEffect, useState } from 'react';
import './Location.css';
import axios from 'axios';
import LocationdData from './LocationData/LocationdData.tsx';
import LoadingSpinner from '../Utils/Spinner/LoadingSpinner.tsx';
import RedError from '../Utils/errorsAlert/RedError.tsx';

/* ========== COMPONENT ======== */
const Locations = () => {
  /* ============= OBJECT SCHEMAS ================ */
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

  interface EventSchema {
    target: { value?: string };
  }

  /* ==========STATES =================== */
  const [gifsData, setGifsData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userInput, setUserInput] = useState('');

  /* ============== GIF REQUEST FUNCTION  =============== */
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
      setTimeout(() => {
        setIsError(false);
      }, 5000);
    }
  };

  /* ============== RENDERING CUSTOM FUNCTIONS ==================== */
  const isErrorHandler = () => {
    return isError ? <RedError theMsg={'Network Error'} /> : '';
  };

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
  /* ==================    USE EFFECTS    ========================= */
  useEffect(() => {
    getGifs();
  }, []);

  /* =========Search gifs Handler ============ */
  const searchGifHandler = async (e: EventSchema) => {
    try {
      setIsLoading(true);
      const theInput = e.target.value?.toString() || userInput;
      console.log(theInput);
      setUserInput(theInput);
      const response = await axios.get('https://api.giphy.com/v1/gifs/search', {
        params: {
          api_key: 'nAcqeqTWW7AuP8ILRRZs7MKRPU133gKT',
          limit: 5,
          q: theInput,
        },
      });
      if (response.data.data[0]) {
        setGifsData(response.data.data);
        setIsLoading(false);
      } else {
        throw new Error('No gifs by this name');
      }
    } catch (error) {
      setIsLoading(true);
      setIsError(true);
      console.log(error);
    }
  };

  const clickSearchHandler = () => {
    /* searchGifHandler(e); */
    console.log(
      'does nothing atm, you can uncomment the code above for it to work'
    );
  };

  return (
    <section className='location__container'>
      <h2>Locations</h2>

      <div className='input-group input-outline-primary'>
        <input
          onChange={(e) => searchGifHandler(e)}
          value={userInput}
          type='text'
          className='form-control'
          placeholder='Search for Gifs'
        />
        <div className='input-group-append'>
          <button
            onClick={() => clickSearchHandler()}
            className='btn btn-primary'
            type='button'
          >
            Search
          </button>
        </div>
      </div>

      <div className='location__div'>{renderGifHandler()}</div>
    </section>
  );
};

export default Locations;
