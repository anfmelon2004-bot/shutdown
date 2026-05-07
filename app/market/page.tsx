import CommunityBoard from "../community-board";
import { marketPosts } from "../community-data";

const marketText = {
  description:
    "장터게시판의 판매글을 최신순으로 보여줍니다.",
  eyebrow: "최신순",
  title: "장터게시판",
};

export default function MarketBoardPage() {
  return (
    <CommunityBoard
      activeBoard="market"
      description={marketText.description}
      eyebrow={marketText.eyebrow}
      posts={marketPosts}
      title={marketText.title}
    />
  );
}
