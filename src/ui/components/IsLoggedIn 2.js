import { IS_LOGGED_IN } from "../../api/queries";
import { useQuery } from "@apollo/react-hooks";

export const IsLoggedIn = props => {
  const { data } = useQuery(IS_LOGGED_IN);
  return data.isLoggedIn ? props.true : props.children;
};
