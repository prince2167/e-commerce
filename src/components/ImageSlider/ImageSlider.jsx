import { AiOutlineArrowLeft, AiOutlineArrowRight } from "../../assets/icon";
import { imageNotAvailable } from "../../assets/images";
import { useProducts } from "../../contexts/product-contex";
import classes from "./ImageSlider.module.css";

const ImageSlider = ({ images }) => {
  const { state, dispatch } = useProducts();
  const { currentIndex } = state;

  return (
    <div className={classes.images}>
      <img src={images[currentIndex]?.url} alt={imageNotAvailable} />
      <AiOutlineArrowLeft
        size="40"
        className={
          currentIndex === 0 ? classes.disabledLeftArrow : classes.leftArrow
        }
        onClick={() => dispatch({ type: "PREVIOUS_CURRENT_INDEX" })}
      />
      <AiOutlineArrowRight
        size="40"
        className={
          currentIndex === images.length - 1
            ? classes.disableRigthArrow
            : classes.rigthArrow
        }
        onClick={() => dispatch({ type: "NEXT_CURRENT_INDEX" })}
      />
    </div>
  );
};

export default ImageSlider;
