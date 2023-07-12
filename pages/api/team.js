import { boxes } from "../../data";

export default function handler(req, res) {
  const teamName = req.query.team;

  const box = boxes.find((item) => item.path == teamName);

  res.status(200).json(box);
}
