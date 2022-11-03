import './header.css';

const Header = () => {
  return (
    <div className="header d-flex">
      <h3>
        <a href="#top">
          Star DB
        </a>
      </h3>
      <ul className="d-flex">
        <li>
          <a href="#top">People</a>
        </li>
        <li>
          <a href="#top">Planets</a>
        </li>
        <li>
          <a href="#top">Starships</a>
        </li>
      </ul>
    </div>
  );
};

export default Header;