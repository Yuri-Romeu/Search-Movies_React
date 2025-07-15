import Movie from './components/Movie';
import Search from './components/Search';
import Title from './components/Title';
import GlobalStyle, { Container } from './GlobalStyles';
function App() {
     return (
          <Container>
               <GlobalStyle />
               <Title>Search for a movie</Title>
               <Search />
               <Movie />
          </Container>
     );
}

export default App;
