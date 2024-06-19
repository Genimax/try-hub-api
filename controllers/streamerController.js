import setHeaders from "../functions/setHeaders.js";

export default async function (req, res) {
  const mainURL = "https://api.twitch.tv/helix/users";

  const nickname = req.body.nickname;

  try {
    const streamer = await fetch(mainURL + `/?login=${nickname}`, {
      method: "GET",
      headers: setHeaders(),
    }).then((response) => {
      return response.json();
    });

    const data = streamer.data;

    if (data.length > 0) {
      res.status(200).json({
        found: true,
        nickname: data[0].display_name,
        icon: data[0].profile_image_url,
      });
    } else {
      res.status(200).json({ found: false, nickname });
    }
  } catch (e) {
    console.log(e);
    res.status(200).json({
      found: false,
    });
  }
}
