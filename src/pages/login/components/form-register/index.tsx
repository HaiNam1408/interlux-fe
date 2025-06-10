/* eslint-disable @typescript-eslint/no-explicit-any */
import { register } from "@apis/auth.api";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import InputCustom from "@components/input-custom";
import { useDarkModeContext } from "@hooks/useDarkModeContext";
import { setNotification } from "@redux/reducer/auth.reducer";
import { Dispatch, SetStateAction, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useDispatch } from "react-redux";

interface IFormRegister {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FormRegister = ({ setIsLoading }: IFormRegister) => {
  const { isDarkMode } = useDarkModeContext();

  const dispatch = useDispatch();
  const [userName, setUserName] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [isShowPas, setIsShowPas] = useState<boolean>(false);
  const [isShow, setIsShow] = useState<boolean>(false);
  const [helperText, setHelperText] = useState<{
    errEmail: string;
    errPassword: string;
    errConfirm: string;
    errPhone: string;
    errUsername: string;
  }>({
    errConfirm: "",
    errEmail: "",
    errPassword: "",
    errPhone: "",
    errUsername: "",
  });
  const handleRegister = async () => {
    let isValid = true;

    const newErrors = {
      errEmail: "",
      errPassword: "",
      errConfirm: "",
      errPhone: "",
      errUsername: "",
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      newErrors.errEmail = "Invalid email.";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
      newErrors.errPassword =
        "Password must contain at least one lowercase letter, one uppercase letter, and one number.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.errConfirm = "Password and confirm password do not match.";
      isValid = false;
    }

    if (!phone) {
      newErrors.errPhone = "Phone number is required.";
      isValid = false;
    }

    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(userName)) {
      newErrors.errUsername =
        "Login name can only contain letters, numbers and underscores (_).";
      isValid = false;
    }

    setHelperText((prev) => ({
      ...prev,
      ...newErrors,
    }));

    if (!isValid) return;

    try {
      setIsLoading(true);
      await register(userName, email, phone, password);
      dispatch(
        setNotification({
          status: "success",
          title:
            "Registration successful! Please confirm your email to continue logging in.",
        })
      );
      setConfirmPassword("");
      setEmail("");
      setPassword("");
      setPhone("");
      setUserName("");
    } catch (error: any) {
      dispatch(
        setNotification({
          status: "error",
          title: `Registration failed: ${error.response.data.message}`,
        })
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Stack
      width={"100%"}
      gap={0}
      maxWidth={"62rem"}
      height={"100%"}
      pl={"4rem"}
    >
      <Text
        fontSize={{ xl: "2rem", base: "1.6rem" }}
        fontFamily={"tinos"}
        fontWeight={600}
        mb={"1rem"}
      >
        REGISTER
      </Text>
      <Grid
        columnGap={"2rem"}
        rowGap={"2rem"}
        templateColumns="repeat(12, 1fr)"
      >
        <GridItem colSpan={12}>
          <InputCustom
            label="Email address *"
            setValue={setEmail}
            value={email}
            helperText={helperText.errEmail}
          />
        </GridItem>
        <GridItem colSpan={7}>
          <InputCustom
            label="Username *"
            setValue={setUserName}
            value={userName}
            helperText={helperText.errUsername}
          />
        </GridItem>
        <GridItem colSpan={5}>
          <InputCustom
            label="Phone *"
            setValue={setPhone}
            value={phone}
            helperText={helperText.errPhone}
          />
        </GridItem>
        <GridItem colSpan={12}>
          <InputCustom
            label="Password *"
            setValue={setPassword}
            value={password}
            isPassword={!isShowPas}
            helperText={helperText.errPassword}
            icon={
              <Box
                className="cursor-pointer"
                onClick={() => setIsShowPas(!isShowPas)}
              >
                {isShowPas ? (
                  <LuEye fontSize={"2.4rem"} color="#fff" />
                ) : (
                  <LuEyeClosed fontSize={"2.4rem"} color="#fff" />
                )}
              </Box>
            }
          />
        </GridItem>
        <GridItem colSpan={12}>
          <InputCustom
            label="Confirm Password *"
            setValue={setConfirmPassword}
            value={confirmPassword}
            isPassword={!isShow}
            helperText={helperText.errConfirm}
            icon={
              <Box
                className="cursor-pointer"
                onClick={() => setIsShow(!isShow)}
              >
                {isShow ? (
                  <LuEye fontSize={"2.4rem"} color="#fff" />
                ) : (
                  <LuEyeClosed fontSize={"2.4rem"} color="#fff" />
                )}
              </Box>
            }
          />
        </GridItem>
      </Grid>

      <Box height={"2rem"} />
      <Text fontSize={"1.4rem"}>
        Your personal data will be used to support your experience throughout
        this website, to manage access to your account, and for other purposes
        described in our privacy policy.
      </Text>
      <Box height={"4rem"} />
      <Button
        variant={"solid"}
        colorScheme={isDarkMode ? "#000" : "#fff"}
        maxW={"9rem"}
        fontWeight={"600"}
        color={!isDarkMode ? "#000" : "#fff"}
        height={"4rem"}
        onClick={handleRegister}
      >
        Register
      </Button>
    </Stack>
  );
};

export default FormRegister;
