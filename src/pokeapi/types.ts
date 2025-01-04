export type ShallowLocations = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Array<Location>;
};

export type Location = {
  name: string;
  url: string;
};
