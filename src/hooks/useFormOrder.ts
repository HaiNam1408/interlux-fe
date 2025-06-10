/* eslint-disable @typescript-eslint/no-explicit-any */
// hooks/useFormOrder.ts
import { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { IOrder, IAddress } from "@interfaces/IOrder.interface";
import { emptyOrder } from "@constants/initalOrder";
import { setNotification } from "@redux/reducer/auth.reducer";
import { createOrder } from "@apis/order.api";
import { ICart } from "@interfaces/ICart.interface";
import { RootState } from "@redux/store";
import { useNavigate } from "react-router-dom";
import { createPaymentURL } from "@apis/payment.api";

export interface IOrderHelper {
  shippingAddress: Partial<Record<keyof IAddress, string>>;
  paymentMethod: string;
  note: string;
}

const defaultHelper: IOrderHelper = {
  shippingAddress: {},
  paymentMethod: "",
  note: "",
};

export const useFormOrder = (listCart?: ICart, onSuccess?: () => void) => {
  const dispatch = useDispatch();
  const navigator = useNavigate();
  const [form, setForm] = useState<IOrder>(emptyOrder);
  const [helper, setHelper] = useState<IOrderHelper>({ ...defaultHelper });
  const [loading, setLoading] = useState(false);
  const couponCode = useSelector((state: RootState) => state.cart.coupon);

  const setFormValue = useCallback(
    <K extends keyof IOrder>(key: K, value: IOrder[K]) => {
      setForm((prev) => ({ ...prev, [key]: value }));
      setHelper((prev) => ({ ...prev, [key]: "" }));
    },
    []
  );

  const setAddressValue = useCallback(
    (section: "shippingAddress", key: keyof IAddress, value: string) => {
      setForm((prev) => ({
        ...prev,
        [section]: { ...prev[section], [key]: value },
      }));

      setHelper((prev) => ({
        ...prev,
        [section]: { ...prev[section], [key]: "" },
      }));
    },
    []
  );

  const resetForm = useCallback(() => {
    setForm(emptyOrder);
    setHelper(defaultHelper);
  }, []);

  const validateForm = (): boolean => {
    let hasError = false;

    const nextHelper: IOrderHelper = {
      shippingAddress: {},
      paymentMethod: "",
      note: "",
    };

    const requiredFields: (keyof IAddress)[] = [
      "fullName",
      "phone",
      "email",
      "address",
      "district",
      "province",
    ];

    for (const field of requiredFields) {
      if (!form.shippingAddress[field]) {
        nextHelper.shippingAddress[field] = `Please enter ${field}`;
        hasError = true;
      }
    }

    setHelper(nextHelper);
    return !hasError;
  };

  const handleSubmit = useCallback(async () => {
    if (!validateForm()) return;
    if (!listCart) return;

    try {
      setLoading(true);
      const orderRes = await createOrder({
        ...form,
        shippingId: listCart.id,
        couponCode: couponCode?.coupon.code || "",
      });

      dispatch(
        setNotification({
          status: "success",
          title: "Order placed successfully!",
        })
      );

      if (form.paymentMethod === "COD") {
        resetForm();
        navigator("/checkout/complete");
      } else {
        const paymentRes = await createPaymentURL(
          orderRes.data.data.order.id,
          form.paymentMethod
        );
        resetForm();
        window.location.href = paymentRes.data.data.paymentUrl;
      }

      onSuccess?.();
    } catch (err: any) {
      console.log(err)
      dispatch(
        setNotification({
          status: "error",
          title: err?.message || "Order failed",
        })
      );
    } finally {
      setLoading(false);
    }
  }, [form, dispatch, onSuccess, resetForm]);

  return {
    form,
    helper,
    loading,
    setFormValue,
    setAddressValue,
    handleSubmit,
    resetForm,
  };
};
