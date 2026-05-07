import Link from "next/link";
import { notFound } from "next/navigation";
import { allPosts } from "../../community-data";

type PostPageProps = {
  params: Promise<{
    id: string;
  }>;
};

const text = {
  back: "\uBAA9\uB85D\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",
  likes: "\uC88B\uC544\uC694",
  comments: "\uB313\uAE00",
  author: "\uC791\uC131\uC790",
  recommend: "\uCD94\uCC9C\uC218",
  price: "\uAC00\uACA9",
  status: "\uC0C1\uD0DC",
  buy: "\uAD6C\uB9E4\uD558\uAE30",
  currentBid: "\uD604\uC7AC\uAC00",
  bids: "\uC785\uCC30\uC218",
  endsIn: "\uB9C8\uAC10",
  bid: "\uC785\uCC30\uD558\uAE30",
  rating: "\uD3C9\uC810",
  professor: "\uAD50\uC218",
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
            post.board === "\uC790\uC720\uAC8C\uC2DC\uD310"
              ? "/free"
              : post.board === "\uC7A5\uD130\uAC8C\uC2DC\uD310"
                ? "/market"
                : post.board === "\uC871\uBCF4\uACBD\uB9E4\uC7A5"
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
