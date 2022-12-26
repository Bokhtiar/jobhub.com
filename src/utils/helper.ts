import { Toastify } from "components/toastify";
import { NetworkErrorType } from "types/error.types";

/* Set token */
export const setToken = async (token: string): Promise<boolean> => {
  localStorage.setItem("token", token);
  return true;
};

/* Get token */
export const getToken = () => {
  return localStorage.getItem("token");
};

/* Remove token */
export const removeToken = () => {
  localStorage.removeItem("token");
  return true;
};

/* Phone number valid check */
export const isValidPhone = () => {
  const regex = /^(?:\+88|88)?(01[3-9]\d{8})$/i;
  return regex;
};

/* E-mail valid check */
export const isValidEmail = () => {
  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  return regex;
};

/* Global network error handeller */
export const networkErrorHandeller = (error: any) => {
  if (
    error &&
    error.response &&
    error.response.data &&
    error.response.data.errors
  ) {
    error.response.data.errors.map((item: NetworkErrorType) => {
      return Toastify.Error(item.message);
    });
  } else {
    return Toastify.Error("Something going wrong, Try again.");
  }
};

/* Generate array from integer number */
export const arrayFromNumber = (data: number) => {
  const array = [];
  for (let i = 0; i < data; i++) array.push(i);
  return array;
};

/* Gender data */
export const genderList = [
  {
    label: "Male",
    value: "Male",
  },
  {
    label: "Female",
    value: "Female",
  },
  {
    label: "Other",
    value: "Other",
  },
];

/* Date parse conversion */
export const dateparse = (date: any) => {
  const zeroFill = (i: any) => {
    return i < 9 ? `0${i}` : i;
  };

  const newDate = new Date(date);

  const day = newDate.getDate();
  const month = newDate.getMonth() + 1;
  const year = newDate.getFullYear();
  return `${zeroFill(day)}-${zeroFill(month)}-${zeroFill(year)}`;
};