const setHeaders = () => {
  return {
    "Client-ID": process.env.TWITCH_CLIENT_ID,
    Authorization: `Bearer ${process.env.TOKEN}`,
  };
};

export default setHeaders;
