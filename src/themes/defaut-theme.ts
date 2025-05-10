import { extendTheme } from "@chakra-ui/react";

const config = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

const breakpoints = {
  base: "0px",
  sm: "480px",
  custom: "600px",
  md: "768px",
  lg: "992px",
  xl: "1280px",
  "2xl": "1536px",
};

const colors = {
  bg: {
    purple: "#583ED9",
    purple_dark: "#56167D",
    blue_dark: "#1A356C",
    yellow_orange:
      "linear-gradient(rgb(241, 191, 41) 0%, rgb(213, 97, 4) 100%)",
    red_opacity: "#bb4d5d4d",
    red_orange: "linear-gradient(180deg,#EA635D,#D4595D)",
    purpleDark_purple: "linear-gradient(180deg,#6539be,#8c49e8)",
  },
  main: {
    100: "#CCE9D7",
    200: "#79C420",
    300: "#00933A",
    warning: "rgba(255, 0, 0, 1)",
  },
  border: {
    purple: "#7B61FF",
    purple_dark: "#7627a8",
    blue_dark: "#061432",
    black: "#1c1a45",
    yellow_light: "#fff5b0",
  },
  text: {
    main: "#ffffff",
    blue_light: "#0FD7E9",
  },
};

const fonts = {
  heading: '"Montserrat", sans-serif',
  body: '"Montserrat", sans-serif',
  tinos: '"Tinos", serif',
};

const ButtonStyle = {
  width: "100%",
  height: "4.8rem",
  fontFamily: `"Outfit", sans-serif`,
  fontSize: "1.6rem",
  fontWeight: "400",
  overflow: "hidden",
  borderRadius: ".8rem",
};


const components = {
  Button: {
    variants: {
      solid: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: `${props.colorScheme}`,
        color: "white",
        border: `1px solid ${props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "#BEC2CA",
          background: "white",
          border: "1px solid #BEC2CA",
        },
      }),
      outline: (props: {
        colorScheme: string;
        width?: string;
        height?: string;
        color?: string;
        borderColor?: string;
      }) => ({
        ...ButtonStyle,
        width: props.width || ButtonStyle.width,
        height: props.height || ButtonStyle.height,
        bg: "white",
        color: props.color || props.colorScheme,
        border: `1px solid ${props.borderColor || props.colorScheme}`,
        transition: "all 0.3s ease-in-out",

        _hover: {
          color: "white",
          bg: props.colorScheme,
          border: `1px solid ${props.colorScheme}`,
        },
      }),
    },
  },
  Text: {
    baseStyle: {
      color: "text.main",
    },
  },
};

const styles = {
  // Bạn có thể định nghĩa global styles ở đây nếu cần
};

export const defaultTheme = extendTheme({
  config,
  breakpoints,
  styles,
  colors,
  fonts,
  components,
});
