import './Header.css';

/* =====HEADER COMPONENT======= */
const Header = () => {
  return (
    <nav className='header__component'>
      <div className='  header__logo'>
        {/*  <img src='../../assets/images/images.jpeg' alt='church logo' /> */}
        <i className="fa-solid fa-snowflake fa-spin"></i>
        <h4>REHIC</h4>
      </div>
      <ul className='header__nav'>
        <li className='nav__links'>
          <a href='#'>Home</a>
        </li>
        <li className='nav__links'>
          <a href='#'>About</a>
        </li>
        <li className='nav__links'>
          <a href='#'>Location</a>
        </li>
        <li className='nav__links'>
          <a href='#'>Get Involved</a>
        </li>
        <li className='nav__links'>
          <a href='#'>Events</a>
        </li>
        <li className='nav__links'>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
