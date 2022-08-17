import axios from "axios";
import { API_ENDPOINT } from "constants/projectConstants";
import { toast } from "react-toastify";
import { LegoMinifig } from "utils/interfaces";

export const getMinifigParts = (
  minifig: LegoMinifig,
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  axios
    .get(`${API_ENDPOINT}/minifigs/${minifig?.set_num}/parts/`)
    .then((response) => {
      onSuccess(response.data?.results);
    })
    .catch((error) => {
      console.log("Error occured while fetching Lego Minifig parts: ", {
        error,
      });
      toast.error("Error occured while fetching Lego Minifig parts", {
        position: "bottom-center",
        autoClose: 3000,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        toastId: "LegoError",
      });
      onError(error);
    });
};
