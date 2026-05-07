import CommunityBoard from "../community-board";
import { freePosts } from "../community-data";

const freeText = {
  description:
    "\uC790\uC720\uAC8C\uC2DC\uD310\uC758 \uCD5C\uC2E0 \uAC8C\uC2DC\uAE00\uC744 \uC21C\uC11C\uB300\uB85C \uBCF4\uC5EC\uC90D\uB2C8\uB2E4.",
  eyebrow: "\uCD5C\uC2E0\uC21C",
  title: "\uC790\uC720\uAC8C\uC2DC\uD310",
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
