import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { RiDeleteBinLine } from "react-icons/ri";

import {
  Image,
  CocktailType,
  CocktailName,
  CocktailRecipe,
  Wraper,
  ButtonSeeMore,
  ButtonDelete,
  Wrap,
  ImageWrap,
} from './DrinksItem.styled';

const DrinksItem = ({item, deleteDrink}) => {
  const { _id, drinkThumb, drink, alcoholic, description } = item;
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // const thumb = "http://res.cloudinary.com/dec1shvoo/image/upload/v1689167155/cocktails-v1/drinks/Ipamena.jpg"
  
  return (
    <Wrap>
      <ImageWrap><Image src={drinkThumb} alt="image" /></ImageWrap>
      <CocktailName>{ drink }</CocktailName>
      <CocktailType>{alcoholic}</CocktailType>
      <CocktailRecipe>{description}</CocktailRecipe>
      <Wraper>
        <ButtonSeeMore onClick={() => navigate(`/drinks/${_id}`, { replace: true })}>See more</ButtonSeeMore>
        <ButtonDelete onClick={() => dispatch(deleteDrink(_id))}>
          <RiDeleteBinLine />
        </ButtonDelete>
      </Wraper>
    </Wrap>
  );
};

export default DrinksItem;