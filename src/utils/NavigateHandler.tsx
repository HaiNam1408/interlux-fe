import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { setNavigate, setLocation } from "@utils/navigateService";

const NavigateHandler = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    setNavigate(navigate);
    setLocation(location);
  }, [navigate, location]);

  return null;
};

export default NavigateHandler;
