import { Stack, Text } from "@chakra-ui/react";
import { useState } from "react";
import StarRatings from "react-star-ratings";

interface IRatingComponent {
  numRating: number;
  isChangeRa: boolean;
  title: string;
}

const RatingComponent = ({
  numRating,
  isChangeRa,
  title,
}: IRatingComponent) => {
  const [rating, setRating] = useState(numRating);

  const changeRating = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <Stack direction={"row"} gap={"1rem"} alignItems={"center"}>
      <StarRatings
        rating={rating}
        starRatedColor="gold"
        changeRating={isChangeRa ? changeRating : undefined}
        numberOfStars={5}
        name="rating"
        starDimension="20px"
        starSpacing="1px"
      />
      <Text color={"#fff"} fontSize={"1.4rem"}>
        {title}
      </Text>
    </Stack>
  );
};

export default RatingComponent;
