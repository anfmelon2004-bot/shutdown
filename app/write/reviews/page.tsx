import WriteBoardForm from "../../write-board-form";

// /write/reviews 경로에서 강의평게시판 글쓰기 폼을 보여줍니다.
export default function ReviewsWritePage() {
  return <WriteBoardForm boardType="reviews" />;
}
