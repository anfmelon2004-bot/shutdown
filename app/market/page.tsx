import CommunityBoard from "../community-board";
import { marketPosts } from "../community-data";

const marketText = {
  description:
    "\uC7A5\uD130\uAC8C\uC2DC\uD310\uC758 \uD310\uB9E4\uAE00\uC744 \uCD5C\uC2E0\uC21C\uC73C\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  eyebrow: "\uCD5C\uC2E0\uC21C",
  title: "\uC7A5\uD130\uAC8C\uC2DC\uD310",
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
