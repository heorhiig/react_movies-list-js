import './MovieCard.scss';

export const MovieCard = ({ movie }) => (
  <div className="movies">
    <div className="card" data-cy="Movie">
      <div className="card-image">
        <figure className="image is-4by3">
          <img
            data-cy="MovieImage"
            src={movie.imdbUrl}
            alt="Film logo"
          />
        </figure>
      </div>

      <div className="card-content">
        <div className="media">
          <div className="media-left">
            <figure className="image is-48x48">
              <img src="images/imdb-logo.jpeg" alt="imdb" />
            </figure>
          </div>

          <div className="media-content">
            <p
              className="title is-8"
              data-cy="MovieTitle"
            >
              {movie.title}
            </p>
          </div>
        </div>

        <div className="content">
          <p data-cy="MovieDescription">
            Follows the lives of eight very different couples in dealing with
            their love lives in various loosely interrelated tales all set
            during a frantic month before Christmas in London, England.
          </p>

          <a
            href={movie.imdbUrl}
            data-cy="MovieLink"
          >
            IMDB
          </a>
        </div>
      </div>
    </div>
  </div>
);
