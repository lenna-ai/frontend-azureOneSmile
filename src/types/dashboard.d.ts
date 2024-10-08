export type DateParams = {
  from_date: string;
  to_date: string;
};

export type RES_countUserPerDay = {
  Day: string;
  TotalAccesses: number;
};

export type RES_top5User = {
  Username: string;
  CountUsernameEnter: number;
};

export type RES_countUserPerHour = {
  Hour: number;
  ResultCountHour: number;
  LatestCreatedAt: string;
};

export type RES_totalUser = {
  TotalUser: number;
};

export type PageParams = {
  page: number;
};

export type RES_dataUser = {
  ID: number;
  UserId: number;
  Username: string;
  CreatedAt: string;
  UpdatedAt: string;
};
