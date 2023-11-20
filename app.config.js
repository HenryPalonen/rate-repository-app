import 'dotenv/config';

export default {
  expo: {
    extra: {
      apolloUri: process.env.APOLLO_URI,
    },
  },
};
