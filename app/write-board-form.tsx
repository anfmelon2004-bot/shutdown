"use client";

// 자유게시판, 장터게시판, 족보경매장, 강의평게시판의 글쓰기 화면을 하나의 폼 컴포넌트로 처리합니다.
// 게시판마다 필요한 추가 입력값이 다르기 때문에 boardType 값에 따라 필드를 조건부로 보여줍니다.
import Link from "next/link";
import { FormEvent, useState } from "react";

type WriteBoardType = "free" | "market" | "examAuction" | "reviews";

type WriteBoardFormProps = {
  // 어떤 게시판의 글쓰기 화면인지 구분하는 값입니다.
  boardType: WriteBoardType;
};

const boardSettings = {
  free: {
    backHref: "/free",
    boardName: "자유게시판",
    description: "자유롭게 이야기를 나눌 게시글을 작성합니다.",
    submitLabel: "자유게시판에 올리기",
    title: "자유게시판 글쓰기",
  },
  market: {
    backHref: "/market",
    boardName: "장터게시판",
    description: "판매할 물건의 정보와 가격을 함께 작성합니다.",
    submitLabel: "장터게시판에 올리기",
    title: "장터게시판 글쓰기",
  },
  examAuction: {
    backHref: "/exam-auction",
    boardName: "족보경매장",
    description: "강의 정보와 경매 조건을 함께 작성합니다.",
    submitLabel: "족보경매장에 올리기",
    title: "족보경매장 글쓰기",
  },
  reviews: {
    backHref: "/reviews",
    boardName: "강의평게시판",
    description: "강의와 교수를 고른 뒤 수강 경험과 평점을 작성합니다.",
    submitLabel: "강의평게시판에 올리기",
    title: "강의평 글쓰기",
  },
} satisfies Record<
  WriteBoardType,
  {
    backHref: string;
    boardName: string;
    description: string;
    submitLabel: string;
    title: string;
  }
>;

const defaultNickname = "컴공새내기";

const courseOptions = [
  "웹프로그래밍",
  "자료구조",
  "현대사회와윤리",
  "운영체제",
  "컴퓨터네트워크",
];

const professorOptions = [
  "김도현 교수",
  "박서진 교수",
  "이수민 교수",
  "정하늘 교수",
  "최민재 교수",
];

const ratingOptions = Array.from({ length: 11 }, (_, index) =>
  String(index * 0.5),
);

export default function WriteBoardForm({ boardType }: WriteBoardFormProps) {
  const settings = boardSettings[boardType];
  const usesAnonymous = boardType === "free" || boardType === "market";
  const isMarket = boardType === "market";
  const isExamAuction = boardType === "examAuction";
  const isReview = boardType === "reviews";

  // 제출 후에는 실제 DB 저장 대신 화면 아래 미리보기 카드에 작성 결과를 보여줍니다.
  const [isSubmitted, setIsSubmitted] = useState(false);

  // 익명 체크 여부에 따라 작성자 표시 이름이 달라집니다.
  const [isAnonymous, setIsAnonymous] = useState(false);

  // 입력값을 state로 관리해서 제출 후 미리보기에서도 같은 값을 바로 사용할 수 있게 합니다.
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [price, setPrice] = useState("");
  const [courseName, setCourseName] = useState("");
  const [professorName, setProfessorName] = useState("");
  const [startPrice, setStartPrice] = useState("");
  const [auctionEndTime, setAuctionEndTime] = useState("");
  const [rating, setRating] = useState("5");

  // 사진은 파일 자체를 업로드하지 않고, 현재 선택된 파일 이름을 미리보기용으로 보여줍니다.
  const [photoNames, setPhotoNames] = useState<string[]>([]);

  const authorName = usesAnonymous && isAnonymous ? "익명" : defaultNickname;

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 text-[#222222]">
      <section className="mx-auto max-w-3xl">
        {/* 상단 영역에서는 현재 어떤 게시판에 글을 쓰는지와 돌아가기 링크를 보여줍니다. */}
        <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm font-bold text-[#c62917]">
              {settings.boardName}
            </p>
            <h1 className="mt-1 text-2xl font-black">{settings.title}</h1>
            <p className="mt-2 text-sm text-[#777777]">
              {settings.description}
            </p>
          </div>
          <Link
            className="rounded-md border border-[#dedede] bg-white px-4 py-2 text-sm font-bold text-[#555555] hover:bg-[#fafafa]"
            href={settings.backHref}
          >
            목록으로
          </Link>
        </div>

        {/* 게시글 작성 폼입니다. 게시판 종류에 따라 아래쪽 추가 필드가 달라집니다. */}
        <form
          className="rounded-md border border-[#dedede] bg-white p-5 shadow-sm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-5">
            {/* 모든 게시판에서 공통으로 받는 제목 입력칸입니다. */}
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#333333]">
                제목
              </span>
              <input
                className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                name="title"
                onChange={(event) => setTitle(event.target.value)}
                placeholder="제목을 입력하세요"
                required
                type="text"
                value={title}
              />
            </label>

            {/* 모든 게시판에서 공통으로 받는 본문 입력칸입니다. */}
            <label className="block">
              <span className="mb-2 block text-sm font-bold text-[#333333]">
                내용
              </span>
              <textarea
                className="min-h-40 w-full resize-y rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm leading-6 outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                name="content"
                onChange={(event) => setContent(event.target.value)}
                placeholder="내용을 입력하세요"
                required
                value={content}
              />
            </label>

            {/* 강의평게시판은 강의명과 교수명을 검색 후보에서 고르고, 평점은 0.5점 단위로 선택합니다. */}
            {isReview ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    강의명
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    list="course-options"
                    name="courseName"
                    onChange={(event) => setCourseName(event.target.value)}
                    placeholder="강의명을 검색해서 고르세요"
                    required
                    type="text"
                    value={courseName}
                  />
                  <datalist id="course-options">
                    {courseOptions.map((course) => (
                      <option key={course} value={course} />
                    ))}
                  </datalist>
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    교수명
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    list="professor-options"
                    name="professorName"
                    onChange={(event) => setProfessorName(event.target.value)}
                    placeholder="교수명을 검색해서 고르세요"
                    required
                    type="text"
                    value={professorName}
                  />
                  <datalist id="professor-options">
                    {professorOptions.map((professor) => (
                      <option key={professor} value={professor} />
                    ))}
                  </datalist>
                </label>

                <label className="block sm:col-span-2">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    평점
                  </span>
                  <select
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="rating"
                    onChange={(event) => setRating(event.target.value)}
                    required
                    value={rating}
                  >
                    {ratingOptions.map((ratingOption) => (
                      <option key={ratingOption} value={ratingOption}>
                        {ratingOption}점
                      </option>
                    ))}
                  </select>
                </label>
              </div>
            ) : null}

            {/* 자유게시판과 장터게시판은 익명 작성이 가능하므로 체크박스를 보여줍니다. */}
            {usesAnonymous ? (
              <label className="flex items-center gap-3 rounded-md border border-[#eeeeee] bg-[#fafafa] px-3 py-3 text-sm font-semibold text-[#333333]">
                <input
                  checked={isAnonymous}
                  className="h-4 w-4 accent-[#c62917]"
                  name="anonymous"
                  onChange={(event) => setIsAnonymous(event.target.checked)}
                  type="checkbox"
                />
                익명으로 올리기
              </label>
            ) : null}

            {/* 장터게시판은 판매 가격 입력이 필요합니다. */}
            {isMarket ? (
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#333333]">
                  판매 가격
                </span>
                <input
                  className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                  inputMode="numeric"
                  name="price"
                  onChange={(event) => setPrice(event.target.value)}
                  placeholder="예: 42,000원"
                  required
                  type="text"
                  value={price}
                />
              </label>
            ) : null}

            {/* 족보경매장은 강의명, 교수명, 시작가, 마감 시간을 추가로 받습니다. */}
            {isExamAuction ? (
              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    강의명
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="courseName"
                    onChange={(event) => setCourseName(event.target.value)}
                    placeholder="예: 자료구조"
                    required
                    type="text"
                    value={courseName}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    교수명
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="professorName"
                    onChange={(event) => setProfessorName(event.target.value)}
                    placeholder="예: 김도현 교수"
                    required
                    type="text"
                    value={professorName}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    입찰 시작가격
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    inputMode="numeric"
                    name="startPrice"
                    onChange={(event) => setStartPrice(event.target.value)}
                    placeholder="예: 10,000원"
                    required
                    type="text"
                    value={startPrice}
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-bold text-[#333333]">
                    경매 마감 시간
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="auctionEndTime"
                    onChange={(event) => setAuctionEndTime(event.target.value)}
                    required
                    type="datetime-local"
                    value={auctionEndTime}
                  />
                </label>
              </div>
            ) : null}

            {/* 자유/장터/족보 글쓰기에서는 사진을 여러 장 선택할 수 있게 합니다. */}
            {!isReview ? (
              <label className="block">
                <span className="mb-2 block text-sm font-bold text-[#333333]">
                  사진
                </span>
                <input
                  accept="image/*"
                  className="block w-full rounded-md border border-[#d9d9d9] bg-white px-3 py-3 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-[#fff5f3] file:px-3 file:py-2 file:text-sm file:font-bold file:text-[#c62917]"
                  multiple
                  name="photos"
                  onChange={(event) =>
                    setPhotoNames(
                      Array.from(event.target.files ?? []).map(
                        (file) => file.name,
                      ),
                    )
                  }
                  type="file"
                />
                <p className="mt-2 text-xs text-[#888888]">
                  이미지 파일을 여러 장 선택할 수 있습니다.
                </p>
              </label>
            ) : null}
          </div>

          <button
            className="mt-6 h-12 w-full rounded-md bg-[#c62917] text-sm font-bold !text-white transition hover:bg-[#ae2112]"
            type="submit"
          >
            {settings.submitLabel}
          </button>
        </form>

        {/* 제출 후에는 작성자명이 익명/닉네임 중 무엇으로 올라가는지 확인할 수 있게 보여줍니다. */}
        {isSubmitted ? (
          <section className="mt-5 rounded-md border border-[#dedede] bg-white p-5">
            <p className="text-sm font-bold text-[#c62917]">
              게시글 미리보기
            </p>
            <h2 className="mt-2 text-xl font-black">
              {title || "제목 없음"}
            </h2>
            <div className="mt-3 flex flex-wrap gap-3 text-sm font-semibold text-[#777777]">
              <span>{settings.boardName}</span>
              <span>작성자 {authorName}</span>
              {price ? <span>판매 가격 {price}</span> : null}
              {courseName ? <span>강의명 {courseName}</span> : null}
              {professorName ? <span>교수명 {professorName}</span> : null}
              {isReview ? <span>평점 {rating}점</span> : null}
              {startPrice ? <span>시작가 {startPrice}</span> : null}
              {auctionEndTime ? <span>마감 {auctionEndTime}</span> : null}
            </div>
            <p className="mt-4 whitespace-pre-line text-sm leading-7 text-[#333333]">
              {content || "내용 없음"}
            </p>
            {photoNames.length > 0 ? (
              <div className="mt-4 rounded-md bg-[#fafafa] p-3">
                <p className="text-xs font-bold text-[#777777]">
                  첨부 사진
                </p>
                <ul className="mt-2 space-y-1 text-sm text-[#555555]">
                  {photoNames.map((photoName) => (
                    <li key={photoName}>{photoName}</li>
                  ))}
                </ul>
              </div>
            ) : null}
          </section>
        ) : null}
      </section>
    </main>
  );
}
