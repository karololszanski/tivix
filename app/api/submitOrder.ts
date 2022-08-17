import axios from "axios";
import { API_ENDPOINT_FAKE } from "constants/projectConstants";
import { toast } from "react-toastify";

export const submitOrder = (
  data: any,
  onSuccess: (response: any) => void,
  onError?: (error: any) => void
) => {
  axios
    .post(`${API_ENDPOINT_FAKE}/posts`, data)
    .then((response) => {
      onSuccess(response);
    })
    .catch((error) => {
      console.log("Error occured while submiting order: ", {
        error,
      });
      toast.error("Error occured while submiting order", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: "Lego2Error",
      });
      onError && onError(error);
    });
};
