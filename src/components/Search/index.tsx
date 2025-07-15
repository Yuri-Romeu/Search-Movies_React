import { input as StyledInput, button as StyledButton } from './styles';
import { Center } from '../../GlobalStyles';

interface SearchProps {
     movieName: string;
     setMovieName: (name: string) => void;
     fetchMovies: () => void;
}

const Search = ({ movieName, setMovieName, fetchMovies }: SearchProps) => {
     return (
          <Center>
               <StyledInput
                    type="text"
                    placeholder="Search for a movie"
                    value={movieName}
                    onChange={e => setMovieName(e.target.value)}
               />
               <StyledButton onClick={fetchMovies}>Search</StyledButton>
          </Center>
     );
};

export default Search;
