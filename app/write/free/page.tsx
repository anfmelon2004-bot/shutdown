import { Suspense } from "react";
import WriteBoardForm from "../../write-board-form";

// /write/free 경로에서 자유게시판 글쓰기 폼을 보여줍니다.
export default function FreeWritePage() {
  return (
    <Suspense>
      <WriteBoardForm boardType="free" />
    </Suspense>
  );
}
