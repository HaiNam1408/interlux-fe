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
    main: "#fff",
    blueDark: "#161735",
    grey: "#f8f8f8",
  },

  text: {
    main: "#000",
    sub: "#333",
    white: "#fff",
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
