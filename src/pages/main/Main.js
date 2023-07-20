import { Link } from "react-router-dom";
import { TypingEffect } from "../../components/TypingEffect/TypingEffect";
import { Button } from "../../components/button/Button";
import { TodoForm } from "../../components/form/Form";
import Header from "../../components/header/Header";
import SimpleSlider from "../../components/simpleslider/SimpleSlider";
import { ROOT_API } from "../../constants/api";
import { useGetMovieImg } from "../../hooks/useMovieImage";
import * as Styled from "./style";

const Main = () => {
  const { isLoading: Loading, data: postUserData } = useGetMovieImg();

  const description = `안녕하세요. 접속하신 페이지는 Siyeon - AI의 'home'입니다. 
로그인 후 main페이지에 이동해보세요 :)`;

  return (
    <>
      <Header />
      <SimpleSlider>
        {postUserData && postUserData.results && postUserData.results.length > 0 ? (
          postUserData.results.map((movie) => <img key={movie.id} src={`${ROOT_API}${movie.backdrop_path}`} alt="Movie Poster" />)
        ) : (
          <p>No movie posters available.</p>
        )}
      </SimpleSlider>
      <TodoForm>
        <Link to="/">
          <Styled.Title>
            <TypingEffect text={description} />
          </Styled.Title>
        </Link>
        <Link to="/signin">
          <Button primary>로그인</Button>
        </Link>
        <Link to="/signout">회원가입</Link>
      </TodoForm>
    </>
  );
};

export default Main;
