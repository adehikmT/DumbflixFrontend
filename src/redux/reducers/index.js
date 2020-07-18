import { getAllfilm, postFilm, deleteFilm, getDetailfilm } from "./reducerFilm";
import { getAllcategory } from "./reducerCategory";
import { postEpisode, getEpisodefilm } from "./reducerEpisode";
import { authReducer } from "./reducerAuth";
import {
  getAlltransaction,
  patchTransaction,
  deleteTransaction,
  postTransaction,
} from "./reducerTransaction";

const reducer = {
  getDetailfilm,
  getAllfilm,
  getAllcategory,
  postFilm,
  postEpisode,
  getAlltransaction,
  patchTransaction,
  deleteTransaction,
  postTransaction,
  deleteFilm,
  getEpisodefilm,
  authReducer,
};

export default reducer;
