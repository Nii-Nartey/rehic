interface PropsSchema {
  src: string;
  alt: string;
  title: string;
  text: string;
}

const LocationdData = (props: PropsSchema) => (
  <article className='location__article'>
    <img src={props.src} alt={props.alt} />
    <h5 className='location__name'>{props.title}</h5>
    <div className='location__info'>
      <div className='days'>{props.text}</div>
    </div>
    <div className='more__info-btn btn-more'>Learn More</div>
  </article>
);

export default LocationdData;
