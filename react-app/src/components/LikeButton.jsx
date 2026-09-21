import { useState } from "react";

const LikeButton = () => {
  const [likes, setLikes] = useState(0);

  return (
    <button
      onClick={() => setLikes(likes + 1)}
      className="bg-blue-500 text-white px-4 py-2 rounded-2xl"
    >
      ❤️ Like {likes}
    </button>
  );
};

export default LikeButton;
