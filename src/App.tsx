import { useState } from 'react';
import Search from './components/Search';
import Title from './components/Title';
import Movie from './components/Movie';
import GlobalStyle, { Container } from './GlobalStyles';

interface MovieType {
     Title: string;
     Year: string;
     imdbRating: string;
     Plot: string;
     Poster: string;
}

function App() {
     const [movieName, setMovieName] = useState('');
     const [movieList, setMovieList] = useState<MovieType[]>([]);

     const fetchMovies = async () => {
          try {
               const response = await fetch(
                    `https://www.omdbapi.com/?t=${movieName}&apikey=ad3b3981`,
               );
               const data = await response.json();

               if (data.Response === 'True') {
                    setMovieList(prev => [data, ...prev]);
               } else {
                    alert('Filme não encontrado!');
               }
          } catch (error) {
               console.error('Erro ao buscar o filme:', error);
          }
     };

     return (
          <Container>
               <GlobalStyle />
               <Title>Search for a movie</Title>
               <Search
                    movieName={movieName}
                    setMovieName={setMovieName}
                    fetchMovies={fetchMovies}
               />

               {/* Lista todos os filmes já buscados */}
               {movieList.map((movie, index) => (
                    <Movie key={index} movie={movie} />
               ))}
          </Container>
     );
}

export default App;
