const LocationdData = (props: {
  keys: string;
  src: string;
  alt: string;
  title: string;
  text: string;
}) => {
  return (
    <article key={props.keys} className='location__article'>
      <img src={props.src} alt={props.alt} />
      <h3 className='location__name'>{props.title}</h3>
      <div className='location__info'>
        <div className='days'>{props.text}</div>
        <div className='road'>{props.text}.</div>
      </div>
      <div className='more__info-btn btn-more'>Learn More</div>
    </article>
  );
};

export default LocationdData;
