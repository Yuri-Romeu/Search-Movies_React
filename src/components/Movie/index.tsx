import { Center } from '../../GlobalStyles';
import { Info, Meta, MovieContainer, Text } from './style';

interface MovieProps {
     movie: {
          Title: string;
          Year: string;
          imdbRating: string;
          Plot: string;
          Poster: string;
     };
}

const Movie = ({ movie }: MovieProps) => {
     return (
          <Center>
               <MovieContainer>
                    <img src={movie.Poster} alt={movie.Title} />
                    <Info>
                         <h3>{movie.Title}</h3>
                         <Meta>
                              <span>{movie.Year}</span>
                              <span>{movie.imdbRating}</span>
                         </Meta>
                         <Text>{movie.Plot}</Text>
                    </Info>
               </MovieContainer>
          </Center>
     );
};

export default Movie;
