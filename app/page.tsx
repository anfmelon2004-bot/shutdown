import Link from "next/link";
import {
  allPosts,
  examAuctionPosts,
  freePosts,
  marketPosts,
  reviewPosts,
  type CommunityPost,
} from "./community-data";

const text = {
  siteTitle: "\uCEA0\uD37C\uC2A4 \uAC8C\uC2DC\uD310",
  siteSubtitle:
    "\uAC8C\uC2DC\uD310\uBCC4 \uCD5C\uC2E0\uAE00\uC744 \uBE60\uB974\uAC8C \uD655\uC778\uD558\uC138\uC694",
  login: "\uB85C\uADF8\uC778",
  ranking: "\uCD94\uCC9C \uB7AD\uD0B9",
  recommend: "\uCD94\uCC9C",
  boardList: "\uAC8C\uC2DC\uD310 \uBAA9\uB85D",
  free: "\uC790\uC720\uAC8C\uC2DC\uD310",
  market: "\uC7A5\uD130\uAC8C\uC2DC\uD310",
  examAuction: "\uC871\uBCF4\uACBD\uB9E4\uC7A5",
  reviews: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310",
};

const boardSections = [
  {
    title: text.free,
    href: "/free",
    posts: freePosts,
  },
  {
    title: text.market,
    href: "/market",
    posts: marketPosts,
  },
  {
    title: text.examAuction,
    href: "/exam-auction",
    posts: examAuctionPosts,
  },
  {
    title: text.reviews,
    href: "/reviews",
    posts: reviewPosts,
  },
];

const ranking = [...allPosts]
  .sort(
    (first, second) =>
      second.authorRecommendations - first.authorRecommendations,
  )
  .slice(0, 3);

function BoardPreviewCard({
  href,
  posts,
  title,
}: {
  href: string;
  posts: CommunityPost[];
  title: string;
}) {
  return (
    <section className="rounded-none border border-[#dedede] bg-white">
      <Link
        className="block border-b border-[#eeeeee] px-4 py-3 text-lg font-black text-[#ff1f10] hover:bg-[#fff8f7]"
        href={href}
      >
        {title}
      </Link>
      <ol>
        {posts.slice(0, 4).map((post) => (
          <li className="border-b border-[#eeeeee] last:border-b-0" key={post.id}>
            <Link
              className="grid grid-cols-[1fr_auto] items-center gap-3 px-4 py-3 hover:bg-[#fafafa]"
              href={`/posts/${post.id}`}
            >
              <span className="truncate text-[15px] text-[#333333]">
                {post.title}
              </span>
              <span className="shrink-0 text-sm text-[#999999]">
                {post.time}
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </section>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#222222]">
      <header className="border-b border-[#e2e2e2] bg-white">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#c62917] text-lg font-black text-white">
              L
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight">
                {text.siteTitle}
              </h1>
              <p className="text-xs text-[#777777]">{text.siteSubtitle}</p>
            </div>
          </Link>
          <Link
            className="rounded-md bg-[#c62917] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ae2112]"
            href="/login"
          >
            {text.login}
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-3 px-4 py-4 lg:grid-cols-[180px_1fr_260px]">
        <aside className="hidden lg:block">
          <nav className="border border-[#dedede] bg-white">
            <div className="border-b border-[#eeeeee] px-4 py-3 text-sm font-black text-[#c62917]">
              {text.boardList}
            </div>
            {boardSections.map((section) => (
              <Link
                className="block border-b border-[#eeeeee] px-4 py-3 text-sm font-semibold text-[#333333] last:border-b-0 hover:bg-[#fafafa]"
                href={section.href}
                key={section.href}
              >
                {section.title}
              </Link>
            ))}
          </nav>
        </aside>

        <section className="grid gap-2 md:grid-cols-2">
          {boardSections.map((section) => (
            <BoardPreviewCard
              href={section.href}
              key={section.href}
              posts={section.posts}
              title={section.title}
            />
          ))}
        </section>

        <aside>
          <section className="border border-[#dedede] bg-white">
            <div className="border-b border-[#eeeeee] px-4 py-3 text-lg font-black text-[#ff1f10]">
              {text.ranking}
            </div>
            <ol>
              {ranking.map((post, index) => (
                <li
                  className="grid grid-cols-[28px_1fr] gap-3 border-b border-[#eeeeee] px-4 py-3 last:border-b-0"
                  key={post.id}
                >
                  <span className="font-black text-[#c62917]">{index + 1}</span>
                  <div className="min-w-0">
                    <p className="truncate text-[15px] font-bold text-[#333333]">
                      {post.author}
                    </p>
                    <p className="mt-1 text-sm text-[#999999]">
                      {text.recommend} {post.authorRecommendations}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </main>
  );
}
