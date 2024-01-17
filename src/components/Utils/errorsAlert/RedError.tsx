import './errorsAlert.css';

const RedError = (props: { theMsg: string }) => {
  return (
    <div className='alert alert-danger' role='alert'>
      {props.theMsg}!!! check your internet connection and refresh the page 
    </div>
  );
};

export default RedError;
