import CommunityBoard from "../community-board";
import { freePosts } from "../community-data";

const freeText = {
  description:
    "자유게시판의 최신 게시글을 순서대로 보여줍니다.",
  eyebrow: "최신순",
  title: "자유게시판",
};

export default function FreeBoardPage() {
  return (
    <CommunityBoard
      activeBoard="free"
      description={freeText.description}
      eyebrow={freeText.eyebrow}
      posts={freePosts}
      title={freeText.title}
    />
  );
}
