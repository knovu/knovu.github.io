export interface Config {
  github: {
    token: string;
  };
}

export const config: Config = {
  github: {
    token: import.meta.env.VITE_GITHUB_TOKEN,
  },
};
