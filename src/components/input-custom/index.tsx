import {
  Box,
  FormControl,
  FormHelperText,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useBoolean,
} from "@chakra-ui/react";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  useEffect,
  useState,
} from "react";

interface IInputCustom {
  placeholder?: string;
  icon?: JSX.Element;
  height?: string;
  width?: string;
  isRequest?: boolean;
  helperText?: string;
  value?: string | number;
  setValue?: Dispatch<SetStateAction<string>>;

  label?: ReactNode;
  require?: boolean;
  colorLabel?: string;
  bgInput?: string;
  isPassword?: boolean;
  isDisabled?: boolean;
  inputRef?: React.RefObject<HTMLInputElement>;
  type?: string;
}

const InputCustom = ({
  placeholder,
  icon,
  height,
  width,
  isRequest,
  helperText,
  setValue,
  label,
  require,
  colorLabel,
  bgInput = "unset",
  isPassword,
  value,
  isDisabled = false,
  inputRef,
  type,
}: IInputCustom) => {
  const [focused, isFocused] = useBoolean(false);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  return (
    <Box w={width || "100%"} className="h-fit">
      <FormControl className=" w-full h-full">
        {label && (
          <FormLabel
            sx={{ color: colorLabel }}
            fontWeight={500}
            fontSize="1.6rem"
            mb={".6rem"}
          >
            {label}
            {require && <span style={{ color: "red" }}> *</span>}
          </FormLabel>
        )}
        <InputGroup
          h={height || "4rem"}
          w="100%"
          zIndex={1}
          onFocus={isFocused.on}
          onBlur={isFocused.off}
          rounded={".8rem"}
          className="relative"
        >
          <Input
            ref={inputRef}
            height="100%"
            fontSize="15px"
            fontFamily="body"
            color="#fff"
            rounded=".8rem"
            disabled={isDisabled}
            type={isPassword ? "password" : type ? type : "text"}
            sx={{
              "input:-webkit-autofill": {
                boxShadow: `0 0 0px 1000px ${
                  text === "" || text === undefined ? bgInput : "bg.white"
                } inset !important`,
                WebkitTextFillColor: "black",
                transition: "background-color 5000s ease-in-out 0s",
              },
              bg: text === "" || text === undefined ? bgInput : "bg.white",
            }}
            onChange={
              setValue
                ? (event) => {
                    setValue(event.target.value);
                    setText(event.target.value);
                  }
                : (event) => {
                    setText(event.target.value);
                  }
            }
            value={value}
          />
          <InputRightElement paddingRight="16px" height="100%" width="30px">
            {icon}
          </InputRightElement>
          {placeholder && !focused && !text && (
            <Box className="w-fit h-full absolute top-0 left-[1rem] flex items-center z-0 pointer-events-none overflow-hidden">
              <Text
                className="w-fit"
                fontSize="1.6rem"
                color="#fff"
                fontFamily="body"
              >
                {placeholder}
              </Text>

              {isRequest && (
                <Text className="w-fit" fontSize="1.6rem" color="red">
                  {" "}
                  *
                </Text>
              )}
            </Box>
          )}
        </InputGroup>

        {helperText && (
          <FormHelperText color="rgba(255, 0, 0, 1)" fontSize="1.2rem">
            {helperText}
          </FormHelperText>
        )}
      </FormControl>
    </Box>
  );
};

export default InputCustom;
