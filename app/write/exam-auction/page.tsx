import { Suspense } from "react";
import WriteBoardForm from "../../write-board-form";

// /write/exam-auction 경로에서 족보경매장 글쓰기 폼을 보여줍니다.
export default function ExamAuctionWritePage() {
  return (
    <Suspense>
      <WriteBoardForm boardType="examAuction" />
    </Suspense>
  );
}
