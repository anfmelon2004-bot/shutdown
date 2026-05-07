import CommunityBoard from "../community-board";
import { examAuctionPosts } from "../community-data";

const examAuctionText = {
  description:
    "\uC871\uBCF4\uACBD\uB9E4\uC7A5\uC758 \uACBD\uB9E4 \uAC8C\uC2DC\uAE00\uC744 \uCD5C\uC2E0\uC21C\uC73C\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  eyebrow: "\uACBD\uB9E4\uC911",
  title: "\uC871\uBCF4\uACBD\uB9E4\uC7A5",
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
