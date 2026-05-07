import CommunityBoard from "../community-board";
import { examAuctionPosts } from "../community-data";

const examAuctionText = {
  description:
    "족보경매장의 경매 게시글을 최신순으로 보여줍니다.",
  eyebrow: "경매중",
  title: "족보경매장",
};

export default function ExamAuctionPage() {
  return (
    <CommunityBoard
      activeBoard="examAuction"
      description={examAuctionText.description}
      eyebrow={examAuctionText.eyebrow}
      posts={examAuctionPosts}
      title={examAuctionText.title}
    />
  );
}
