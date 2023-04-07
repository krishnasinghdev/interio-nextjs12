export type OwnerType = {
  name: String;
  follower: String[];
  following: String[];
  likedshot: String[];
  email: String;
  _id: String;
};

export type shotData = {
  title: String;
  category: String;
  description: String;
  tags: String[];
  images: { title: String; url: String }[];
  _id: String;
  owner: OwnerType;
};

export type shotDataArr = shotData[];

export type messageProp = {
  sender: String;
  content: String;
  readBy: String[];
  createdAt: String;
}

export type vendorType = {
  _id: String;
  name: String;
  follower: String[];
  following: String[];
  likedShot: String[];
};

export type chatType = {
  message: String;
  sender: String | any;
};