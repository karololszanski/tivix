import axios from "axios";
import {
  API_ENDPOINT,
  HARRY_POTTER_THEME_ID,
} from "constants/projectConstants";
import { toast } from "react-toastify";

import { getMinifigsFromArray } from "utils/helpFunctions";

const PAGE_SIZE = 500;

export const getRandom3Minifigs = (
  onSuccess: (response: any) => void,
  onError: (error: any) => void
) => {
  axios
    .get(`${API_ENDPOINT}/minifigs/`, {
      params: {
        in_theme_id: HARRY_POTTER_THEME_ID,
        page_size: PAGE_SIZE,
      },
    })
    .then((response) => {
      const minifigsArray = getMinifigsFromArray(
        response.data?.results,
        3,
        Math.min(response.data?.count, PAGE_SIZE) - 1
      );
      onSuccess(minifigsArray);
    })
    .catch((error) => {
      console.log("Error occured while fetching Lego Minifigs: ", { error });
      toast.error("Error occured while fetching Lego Minifigs", {
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
