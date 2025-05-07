import { Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import { FiFacebook } from "react-icons/fi";
import { CiInstagram } from "react-icons/ci";
import { FiLinkedin } from "react-icons/fi";
import { CiYoutube } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";

const listFooter = [
  {
    title: "Living room",
    listSub: [
      {
        label: "Sofa Sets",
        link: "/",
      },
      {
        label: "Coffee Tables",
        link: "/",
      },
      {
        label: "TV Units",
        link: "/",
      },
      {
        label: "Accent Chairs",
        link: "/",
      },
    ],
  },
  {
    title: "Bedroom",
    listSub: [
      {
        label: "Beds",
        link: "/",
      },
      {
        label: "Wardrobes",
        link: "/",
      },
      {
        label: "Bedside Tables",
        link: "/",
      },
      {
        label: "Dressing Tables",
        link: "/",
      },
    ],
  },
  {
    title: "Collections",
    listSub: [
      {
        label: "Modern Luxury",
        link: "/",
      },
      {
        label: "Classic Heritage",
        link: "/",
      },
      {
        label: "Minimalist Elegance",
        link: "/",
      },
      {
        label: "Artisan Collection",
        link: "/",
      },
      {
        label: "Italian Inspired",
        link: "/",
      },
      {
        label: "Scandinavian Living",
        link: "/",
      },
    ],
  },
  {
    title: "Customer service",
    listSub: [
      {
        label: "Delivery & Shipping",
        link: "/",
      },
      {
        label: "Returns & Exchanges",
        link: "/",
      },
      {
        label: "Assembly Instructions",
        link: "/",
      },
      {
        label: "Warranty Information",
        link: "/",
      },
      {
        label: "Care & Maintenance",
        link: "/",
      },
    ],
  },
  {
    title: "Company",
    listSub: [
      {
        label: "About us",
        link: "/",
      },
      {
        label: "Our Story",
        link: "/",
      },
      {
        label: "Sustainability",
        link: "/",
      },
      {
        label: "Showrooms",
        link: "/",
      },
      {
        label: "Press",
        link: "/",
      },
      {
        label: "Careers",
        link: "/",
      },
    ],
  },
];

const Footer = () => {
  return (
    <Stack
      width={"100%"}
      bgColor={"#000"}
      direction={"column"}
      gap={"2rem"}
      padding={"4rem"}
      alignItems={"center"}
      position={"relative"}
      height={"fit-content"}
    >
      <Grid templateColumns="repeat(5, 1fr)" width={"100%"}>
        {listFooter.map((item, index) => (
          <GridItem colSpan={1} width={"100%"} key={index}>
            <Text
              width={"100%"}
              fontSize={"1.6rem"}
              color={"#fff"}
              textTransform={"uppercase"}
              fontWeight={700}
            >
              {item.title}
            </Text>

            <Stack direction={"column"} gap={".8rem"} mt={"1.4rem"}>
              {item.listSub.map((child, i) => (
                <Text
                  key={i}
                  fontSize={"1.2rem"}
                  color={"#969696"}
                  fontWeight={500}
                  cursor={"pointer"}
                  position={"relative"}
                  width={"fit-content"}
                  sx={{
                    _after: {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: 0,
                      width: 0,
                      height: "1px",
                      backgroundColor: "#fff",
                      transition: "all .3s ease",
                    },
                  }}
                  _hover={{
                    _after: {
                      width: "100%",
                    },
                  }}
                >
                  {child.label}
                </Text>
              ))}
            </Stack>
          </GridItem>
        ))}
      </Grid>
      <Stack direction={"row"} gap={"1.6rem"}>
        <FiFacebook fontSize={"2.4rem"} color={"#969696"} />
        <CiInstagram fontSize={"2.4rem"} color={"#969696"} />
        <CiTwitter fontSize={"2.4rem"} color={"#969696"} />
        <FiLinkedin fontSize={"2.4rem"} color={"#969696"} />
        <CiYoutube fontSize={"2.4rem"} color={"#969696"} />
      </Stack>
    </Stack>
  );
};

export default Footer;
