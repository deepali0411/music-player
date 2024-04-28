import axios from "axios";
import { musicApiUrl } from "./services";

export const getMusicFromApi = async (id = "") => {
   const apiId = id!=="" ? id : "shreya";
    return (
  await axios
    .get(musicApiUrl(apiId))
    .then((res) => res.data)
    .catch((err) => console.error(err))
)};
