/* eslint-disable @typescript-eslint/no-explicit-any */
import { register } from "@apis/auth.api";
import { Box, Button, Grid, GridItem, Stack, Text } from "@chakra-ui/react";
import InputCustom from "@components/input-custom";
import { setNotification } from "@redux/reducer/auth.reducer";
import { Dispatch, SetStateAction, useState } from "react";
import { LuEye, LuEyeClosed } from "react-icons/lu";
import { useDispatch } from "react-redux";

interface IFormRegister {
  setIsLoading: Dispatch<SetStateAction<boolean>>;
}

const FormRegister = ({ setIsLoading }: IFormRegister) => {
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
      newErrors.errEmail = "Email không hợp lệ.";
      isValid = false;
    }

    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
    if (!passwordRegex.test(password)) {
      newErrors.errPassword =
        "Mật khẩu phải chứa ít nhất một chữ thường, một chữ hoa và một chữ số.";
      isValid = false;
    }

    if (password !== confirmPassword) {
      newErrors.errConfirm = "Mật khẩu và xác nhận mật khẩu không khớp.";
      isValid = false;
    }

    if (!phone) {
      newErrors.errPhone = "Số điện thoại là bắt buộc.";
      isValid = false;
    }

    const usernameRegex = /^[a-zA-Z0-9_]+$/;
    if (!usernameRegex.test(userName)) {
      newErrors.errUsername =
        "Tên đăng nhập chỉ được chứa chữ cái, số và dấu gạch dưới (_).";
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
            "Đăng ký thành công! Bạn hãy xác nhận email để tiếp tục đăng nhập.",
        })
      );
      window.open("/my-account");
    } catch (error:any) {
      dispatch(
        setNotification({
          status: "error",
          title: `Đăng ký thất bại: ${error.response.data.message}`,
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
            colorLabel="#fff"
            setValue={setEmail}
            value={email}
            helperText={helperText.errEmail}
          />
        </GridItem>
        <GridItem colSpan={7}>
          <InputCustom
            label="Username *"
            colorLabel="#fff"
            setValue={setUserName}
            value={userName}
            helperText={helperText.errUsername}
          />
        </GridItem>
        <GridItem colSpan={5}>
          <InputCustom
            label="Phone *"
            colorLabel="#fff"
            setValue={setPhone}
            value={phone}
            helperText={helperText.errPhone}
          />
        </GridItem>
        <GridItem colSpan={12}>
          <InputCustom
            label="Password *"
            colorLabel="#fff"
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
            colorLabel="#fff"
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
        colorScheme="#fff"
        maxW={"9rem"}
        fontWeight={"600"}
        color={"#000"}
        height={"4rem"}
        onClick={handleRegister}
      >
        Register
      </Button>
    </Stack>
  );
};

export default FormRegister;
