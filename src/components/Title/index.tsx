import { Title as StyledTitle } from './styles';

export type Props = {
     children: string;
};
const Title = (props: Props) => {
     return <StyledTitle>{props.children}</StyledTitle>;
};

export default Title;
