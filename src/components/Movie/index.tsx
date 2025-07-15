import { Center } from '../../GlobalStyles';
import { Info, Meta, MovieContainer, Text } from './style';

const Movie = () => {
     return (
          <Center>
               <MovieContainer>
                    <img src="https://placehold.co/100x150" />
                    <Info>
                         <h3>Movie Title</h3>
                         <Meta>
                              <span>2023</span>
                              <span>8.3</span>
                         </Meta>
                         <Text>
                              Lorem ipsum dolor sit amet quas ex sed, sunt ipsa iste. Dicta, ad. Id
                              odio similique quasi!
                         </Text>
                    </Info>
               </MovieContainer>
          </Center>
     );
};

export default Movie;
