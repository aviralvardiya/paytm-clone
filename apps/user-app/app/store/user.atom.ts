import { atom } from "recoil";

interface UserType {
  name: string;
  email: string;
  id: string;
}

export const userAtom = atom<UserType>({
  key: "userAtom",
  default: {
    name: "",
    email: "",
    id: "",
  },
});
