import CommunityBoard from "../community-board";
import { reviewPosts } from "../community-data";

const reviewText = {
  description:
    "강의평게시판의 최신 강의평을 순서대로 보여줍니다.",
  eyebrow: "최신순",
  title: "강의평게시판",
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
