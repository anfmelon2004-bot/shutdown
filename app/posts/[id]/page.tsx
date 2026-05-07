import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "../../community-data";

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const text = {
  back: "목록으로 돌아가기",
  likes: "좋아요",
  comments: "댓글",
  author: "작성자",
  recommend: "추천수",
  price: "가격",
  status: "상태",
  buy: "구매하기",
  currentBid: "현재가",
  bids: "입찰수",
  endsIn: "마감",
  bid: "입찰하기",
  rating: "평점",
  professor: "교수",
};

export function generateStaticParams() {
  return allPosts.map((post) => ({
    id: String(post.id),
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { id } = await params;
  const post = allPosts.find((item) => item.id === Number(id));

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#f5f5f5] px-4 py-8 text-[#222222]">
      <article className="mx-auto max-w-3xl rounded-md border border-[#dedede] bg-white">
        <header className="border-b border-[#eeeeee] px-5 py-4">
          <div className="mb-3 flex flex-wrap items-center gap-2">
            <span className="rounded-sm bg-[#f1f1f1] px-2 py-1 text-xs font-semibold text-[#777777]">
              {post.board}
            </span>
            {post.rating ? (
              <span className="rounded-sm bg-[#fff5f3] px-2 py-1 text-xs font-bold text-[#c62917]">
                {text.rating} {post.rating}
              </span>
            ) : null}
            <span className="text-xs text-[#999999]">{post.time}</span>
          </div>
          <h1 className="text-2xl font-bold leading-8">{post.title}</h1>
          <div className="mt-3 flex flex-wrap gap-4 text-sm font-semibold text-[#777777]">
            <span>
              {text.author} {post.author}
            </span>
            <span>
              {text.recommend} {post.authorRecommendations}
            </span>
          </div>
        </header>

        <section className="space-y-5 px-5 py-5">
          {post.professor ? (
            <p className="text-sm font-semibold text-[#555555]">
              {text.professor} {post.professor}
            </p>
          ) : null}

          <p className="whitespace-pre-line text-base leading-8 text-[#333333]">
            {post.preview}
          </p>

          {post.price ? (
            <div className="grid gap-3 rounded-md border border-[#eeeeee] bg-[#fafafa] p-4 sm:grid-cols-[1fr_1fr_auto]">
              <div>
                <p className="text-xs text-[#888888]">{text.price}</p>
                <p className="mt-1 font-black text-[#c62917]">
                  {post.price}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#888888]">{text.status}</p>
                <p className="mt-1 font-bold">{post.status}</p>
              </div>
              <button
                className="h-11 rounded-md bg-[#c62917] px-4 text-sm font-bold text-white transition hover:bg-[#ae2112]"
                type="button"
              >
                {text.buy}
              </button>
            </div>
          ) : null}

          {post.currentBid ? (
            <div className="grid gap-3 rounded-md border border-[#eeeeee] bg-[#fafafa] p-4 sm:grid-cols-[1fr_1fr_1fr_auto]">
              <div>
                <p className="text-xs text-[#888888]">{text.currentBid}</p>
                <p className="mt-1 font-black text-[#c62917]">
                  {post.currentBid}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#888888]">{text.bids}</p>
                <p className="mt-1 font-bold">{post.bids}</p>
              </div>
              <div>
                <p className="text-xs text-[#888888]">{text.endsIn}</p>
                <p className="mt-1 font-bold text-[#c62917]">{post.endsIn}</p>
              </div>
              <button
                className="h-11 rounded-md bg-[#c62917] px-4 text-sm font-bold text-white transition hover:bg-[#ae2112]"
                type="button"
              >
                {text.bid}
              </button>
            </div>
          ) : null}

          <div className="flex flex-wrap gap-4 border-t border-[#eeeeee] pt-4 text-sm font-bold text-[#777777]">
            <span className="text-[#c62917]">
              {text.likes} {post.likes}
            </span>
            <span>
              {text.comments} {post.comments}
            </span>
          </div>
        </section>
      </article>

      <div className="mx-auto mt-5 max-w-3xl">
        <Link
          className="inline-flex rounded-md border border-[#dedede] bg-white px-4 py-2 text-sm font-bold text-[#555555] hover:bg-[#fafafa]"
          href={
            post.board === "자유게시판"
              ? "/free"
              : post.board === "장터게시판"
                ? "/market"
                : post.board === "족보경매장"
                  ? "/exam-auction"
                  : "/reviews"
          }
        >
          {text.back}
        </Link>
      </div>
    </main>
  );
}
