import { Stack, Text } from "@chakra-ui/react";
import BoxLeright from "@components/box-leright";

const InfoProduct = () => {
  return (
    <Stack
      width={"100%"}
      height={"fit-content"}
      direction={"column"}
      position={"relative"}
      maxW={"140rem"}
      margin={"2rem auto"}
      px={"2rem"}
      gap={0}
    >
      <Text
        py={"2rem"}
        width={"100%"}
        textAlign={"center"}
        fontSize={"4rem"}
        fontFamily={"tinos"}
        fontWeight={700}
      >
        Descriptions
      </Text>
      <BoxLeright
        image="https://handdn.com/wp-content/uploads/2024/03/SHARK-050224002-1024x1024.jpg"
        content="Indulge in Luxury with the Alligator Leather Collection Crafted from the finest alligator leather from renowned tanning companies like Amtan, Henglong, and HCP, our collection offers the ultimate in luxury and style. Alligator leather has a timeless appeal and has been the preferred choice for luxury watch brands throughout history. <br/><p class='underline cursor-pointer hover:underline-solid hover:text-[#339999]'>Read more about Shark Leather</p> <br/><br/><strong>It's time for a strap upgrade with a Shark leather watch band !</strong>"
        title="Shark Leather"
      />
      <BoxLeright
        image="https://handdn.com/wp-content/uploads/2022/08/20_1-1024x1024.jpg"
        content="Our watch strap features a water-resistant and soft Zermatt lining for comfort. The inner part is reinforced with Velodon SH-220 material for added stability. The included stainless steel buckle is designed for both durability and style, and the Quick Release Spring Bars allow for easy band changes in seconds. Enjoy a secure fit for all activities with our high-quality leather watch strap."
        title="Watch Band Structure"
        isLeft
      />
      <BoxLeright
        content="Our watch bands are meticulously crafted by a professional watch strap maker at every stage. The art of handmade watch band-making demands skill and experience, with multiple challenging steps from pattern cutting to edge painting and stitching. Each band is a unique masterpiece, showcasing the maker's dedication and attention to detail. Upgrade your watch with the timeless beauty of a handmade watch band."
        image="https://handdn.com/wp-content/uploads/2024/12/Process.webp"
        title="Our Crafting Process"
      />

      <BoxLeright
      isLeft
        title="Handdn Strap Packaging To Protect Your Strap"
        image="https://handdn.com/wp-content/uploads/2024/05/Handdn-box-1024x1024.jpg"
        content="Every order of 1 to 3 watch straps is carefully packaged in a premium HANDDN envelope to ensure perfect condition upon arrival. Orders of 4 or more straps are delivered in a blue Slider Box. Each strap is securely wrapped in a shockproof paper bag and sealed in a transparent zip cover to protect against moisture, dust, and scratches during shipping."
      />
    </Stack>
  );
};

export default InfoProduct;
