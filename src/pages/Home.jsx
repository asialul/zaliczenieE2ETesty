import { Link } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="center">
        <h1>Wybierz Szyfr:</h1>
        <br />
          <ul className="lista-szyfry">
            <li>
              <Link to="/cezar" data-cy="main-home-link"><h2>Szyfr Cezara</h2></Link>
            </li>
            <br />
            <li>
              <Link to="/vigenere" data-cy="main-home-link"><h2>Szyfr Vigenère’a</h2></Link>
            </li>
          </ul>
      </div>
    </>
  );
}

export default HomePage;
