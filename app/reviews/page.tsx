import CommunityBoard from "../community-board";
import { reviewPosts } from "../community-data";

const reviewText = {
  description:
    "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310\uC758 \uCD5C\uC2E0 \uAC15\uC758\uD3C9\uC744 \uC21C\uC11C\uB300\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  eyebrow: "\uCD5C\uC2E0\uC21C",
  title: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310",
};

export default function ReviewBoardPage() {
  return (
    <CommunityBoard
      activeBoard="reviews"
      description={reviewText.description}
      eyebrow={reviewText.eyebrow}
      posts={reviewPosts}
      title={reviewText.title}
    />
  );
}
