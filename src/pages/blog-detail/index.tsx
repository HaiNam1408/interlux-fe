import { Box, Grid, GridItem, Image, Stack, Text } from "@chakra-ui/react";
import LoadingScreen from "@components/loading-screen";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Content from "./components/content";
import { getBlogBySlug } from "@apis/blog.api";
import { IBlogPost } from "@interfaces/IBlog.interface";

const BlogDetail = () => {
  const { slug } = useParams();
  const navigator = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);
  const [blog, setBlog] = useState<{
    image: string;
    description: string;
    title: string;
    listPost: IBlogPost[];
  }>();

  useEffect(() => {
    if (slug) {
      setLoading(true);
      getBlogBySlug(slug)
        .then((res) => {
          setBlog({
            description: res.data.data.content,
            image: res.data.data.thumbnail.filePath,
            title: res.data.data.title,
            listPost: res.data.data.relatedPosts,
          });
        })
        .finally(() => setLoading(false));
    } else {
      navigator("");
    }
  }, [slug]);

  return (
    <Grid
      minH={"100dvh"}
      position={"relative"}
      px={"2rem"}
      width="100%"
      height="fit-content"
      templateColumns="repeat(12, 1fr)"
      gap={"4rem"}
    >
      <LoadingScreen isLoading={loading} />
      <GridItem colSpan={3}></GridItem>
      <Content
        description={blog?.description || ""}
        imageSrc={blog?.image || ""}
        title={blog?.title || ""}
      />
      <GridItem colSpan={3}>
        <Box width={"100%"} height={"100%"} position={"relative"}>
          <Stack
            width={"100%"}
            h={"fit-content"}
            position={"sticky"}
            top={0}
            gap={"2rem"}
          >
            <Text fontSize={"2.4rem"} fontWeight={"bold"}>
              Related Posts:
            </Text>
            {blog?.listPost.map((item, index) => (
              <Stack
                width={"100%"}
                height={"fit-content"}
                key={index}
                gap={"1rem"}
                cursor={"pointer"}
                onClick={() => navigator(`/blog/${item.slug}`)}
              >
                <Image
                  width={"100%"}
                  maxH={"18rem"}
                  objectFit={"cover"}
                  src={item.thumbnail.filePath}
                ></Image>
                <Text
                  fontSize="1.6rem"
                  fontWeight={600}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "4.44rem",
                  }}
                >
                  {item.title}
                </Text>
                <Text
                  fontSize={"1rem"}
                  fontWeight={500}
                  sx={{
                    display: "-webkit-box",
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: "vertical",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    height: "3.44rem",
                  }}
                >
                  {item.description}
                </Text>
              </Stack>
            ))}
          </Stack>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default BlogDetail;
