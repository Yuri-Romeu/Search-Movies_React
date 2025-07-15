import { input as StyledInput, button as StyledButton } from './styles';
import { Center } from '../../GlobalStyles';
const Search = () => {
     return (
          <Center>
               <StyledInput type="text" placeholder="Search for a movie" />
               <StyledButton>Search</StyledButton>
          </Center>
     );
};

export default Search;
