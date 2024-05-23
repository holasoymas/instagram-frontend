export interface UserProfile {
  firstName: string;
  lastName: string;
  username: string;
  email: string;
  gender: string;
  birthday: string;
  profilePic: string;
  bio?: string;
  password: string;
  repeatPassword: string;
}

export interface SignupForm {
  formData: UserProfile;
  handleChange?: (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

export interface ProfilePageProp extends Omit<SignupForm, "formData"> {
  handleProfilePictureName: (profilePicName: string) => void;
}

export type BackendUser = Omit<UserProfile, "password" | "repeatPassword"> & {
  posts: postData[];
  createdAt: string;
  _v: number;
  _id: string;
  followers: string[];
  following: string[];
};

export interface OAuthSeperatorProps {
  text: string;
}

export interface ProfileNameAndSettingProps {
  username: string;
  owner: boolean;
}

export interface ProfileImageProp {
  img: string;
}

type SeverityMsg = "error" | "success" | "warning" | "info";

export interface NotificationProps {
  open: boolean;
  message: string;
  severity: SeverityMsg;
  handleClose: () => void;
}

export interface postData {
  image: string;
  caption: string;
  userId: string;
}

export interface PostsProp {
  posts: postData[];
}

export interface ProfileStatsProps {
  posts: number;
  followers: number;
  following: number;
}

export interface CreatePostProp {
  username: string;
}
