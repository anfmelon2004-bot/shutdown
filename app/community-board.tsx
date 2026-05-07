"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import {
  allPosts,
  boards,
  trending,
  type BoardKey,
  type CommunityPost,
} from "./community-data";

type CommunityBoardProps = {
  activeBoard: BoardKey;
  title: string;
  eyebrow: string;
  posts: CommunityPost[];
  description?: string;
};

const ui = {
  siteTitle: "\uCEA0\uD37C\uC2A4 \uAC8C\uC2DC\uD310",
  siteSubtitle:
    "\uC6B0\uB9AC \uD559\uAD50 \uC2E4\uC2DC\uAC04 \uCEE4\uBBA4\uB2C8\uD2F0",
  login: "\uB85C\uADF8\uC778",
  search: "\uAC80\uC0C9",
  searchLabel: "\uAC8C\uC2DC\uAE00 \uAC80\uC0C9",
  searchPlaceholder:
    "\uAD81\uAE08\uD55C \uAE00\uC744 \uCC3E\uC544\uBCF4\uC138\uC694",
  rating: "\uD3C9\uC810",
  price: "\uAC00\uACA9",
  currentBid: "\uD604\uC7AC\uAC00",
  likes: "\uC88B\uC544\uC694",
  comments: "\uB313\uAE00",
  buy: "\uAD6C\uB9E4",
  bids: "\uC785\uCC30",
  recommend: "\uCD94\uCC9C",
  ranking: "\uCD94\uCC9C \uB7AD\uD0B9",
  viewed: "\uB9CE\uC774 \uBCF8 \uAE00",
  openPost: "\uAC8C\uC2DC\uAE00 \uC5F4\uAE30",
};

export default function CommunityBoard({
  activeBoard,
  title,
  eyebrow,
  posts,
  description,
}: CommunityBoardProps) {
  const [recommendations, setRecommendations] = useState(() =>
    Object.fromEntries(
      allPosts.map((post) => [post.id, post.authorRecommendations]),
    ),
  );

  const ranking = useMemo(() => {
    return [...allPosts]
      .map((post) => ({
        id: post.id,
        author: post.author,
        recommendations: recommendations[post.id] ?? post.authorRecommendations,
      }))
      .sort((first, second) => second.recommendations - first.recommendations)
      .slice(0, 3);
  }, [recommendations]);

  const handleRecommend = (postId: number) => {
    setRecommendations((current) => ({
      ...current,
      [postId]: (current[postId] ?? 0) + 1,
    }));
  };

  return (
    <main className="min-h-screen bg-[#f5f5f5] text-[#222222]">
      <header className="sticky top-0 z-10 border-b border-[#e2e2e2] bg-white/95 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
          <Link className="flex items-center gap-3" href="/">
            <div className="flex h-9 w-9 items-center justify-center rounded-md bg-[#c62917] text-lg font-black text-white">
              L
            </div>
            <div>
              <h1 className="text-base font-bold leading-tight">
                {ui.siteTitle}
              </h1>
              <p className="text-xs text-[#777777]">{ui.siteSubtitle}</p>
            </div>
          </Link>
          <Link
            className="rounded-md bg-[#c62917] px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-[#ae2112]"
            href="/login"
          >
            {ui.login}
          </Link>
        </div>
      </header>

      <div className="mx-auto grid max-w-6xl gap-5 px-4 py-5 lg:grid-cols-[180px_1fr_280px]">
        <aside className="hidden lg:block">
          <nav className="overflow-hidden rounded-md border border-[#dedede] bg-white">
            {boards.map((board) => {
              const isActive =
                (activeBoard === "free" && board.href === "/free") ||
                (activeBoard === "market" && board.href === "/market") ||
                (activeBoard === "examAuction" &&
                  board.href === "/exam-auction") ||
                (activeBoard === "reviews" && board.href === "/reviews");

              return (
                <Link
                  className={`block border-b border-[#eeeeee] px-4 py-3 text-sm last:border-b-0 ${
                    isActive
                      ? "bg-[#fff5f3] font-bold text-[#c62917]"
                      : "text-[#333333] hover:bg-[#fafafa]"
                  }`}
                  href={board.href}
                  key={board.href}
                >
                  {board.label}
                </Link>
              );
            })}
          </nav>
        </aside>

        <section className="space-y-4">
          <div className="rounded-md border border-[#dedede] bg-white p-3">
            <div className="flex items-center gap-2 rounded-md border border-[#dedede] bg-[#fafafa] px-3 py-2">
              <span className="text-sm text-[#999999]">{ui.search}</span>
              <input
                aria-label={ui.searchLabel}
                className="min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-[#aaaaaa]"
                placeholder={ui.searchPlaceholder}
              />
            </div>
            <div className="mt-3 flex gap-2 overflow-x-auto pb-1 lg:hidden">
              {boards.map((board) => (
                <Link
                  className="shrink-0 rounded-md border border-[#dedede] bg-white px-3 py-2 text-sm text-[#555555]"
                  href={board.href}
                  key={board.href}
                >
                  {board.label}
                </Link>
              ))}
            </div>
          </div>

          <article className="rounded-md border border-[#dedede] bg-white">
            <div className="border-b border-[#eeeeee] px-4 py-3">
              <div className="flex items-center justify-between gap-3">
                <h2 className="text-base font-bold">{title}</h2>
                <span className="text-xs font-medium text-[#c62917]">
                  {eyebrow}
                </span>
              </div>
              {description ? (
                <p className="mt-1 text-sm leading-6 text-[#777777]">
                  {description}
                </p>
              ) : null}
            </div>
            {posts.map((post) => (
              <div
                className="border-b border-[#eeeeee] px-4 py-4 last:border-b-0 hover:bg-[#fafafa]"
                key={post.id}
              >
                <div className="mb-2 flex flex-wrap items-center gap-2">
                  <span className="rounded-sm bg-[#f1f1f1] px-2 py-1 text-xs font-semibold text-[#777777]">
                    {post.board}
                  </span>
                  {post.rating ? (
                    <span className="rounded-sm bg-[#fff5f3] px-2 py-1 text-xs font-bold text-[#c62917]">
                      {ui.rating} {post.rating}
                    </span>
                  ) : null}
                  <span className="text-xs text-[#999999]">{post.time}</span>
                </div>
                <Link
                  aria-label={`${post.title} ${ui.openPost}`}
                  className="flex items-start justify-between gap-4"
                  href={`/posts/${post.id}`}
                >
                  <div className="min-w-0">
                    <h3 className="line-clamp-1 text-[15px] font-bold text-[#202020]">
                      {post.title}
                    </h3>
                    {post.professor ? (
                      <p className="mt-1 text-xs font-semibold text-[#777777]">
                        {post.professor}
                      </p>
                    ) : null}
                    <p className="mt-1 line-clamp-2 text-sm leading-6 text-[#666666]">
                      {post.preview}
                    </p>
                  </div>
                  {post.price ? (
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-[#999999]">{ui.price}</p>
                      <p className="mt-1 text-sm font-black text-[#c62917]">
                        {post.price}
                      </p>
                      {post.status ? (
                        <p className="mt-1 text-xs font-bold text-[#777777]">
                          {post.status}
                        </p>
                      ) : null}
                    </div>
                  ) : null}
                  {post.currentBid ? (
                    <div className="shrink-0 text-right">
                      <p className="text-xs text-[#999999]">{ui.currentBid}</p>
                      <p className="mt-1 text-sm font-black text-[#c62917]">
                        {post.currentBid}
                      </p>
                      <p className="mt-1 text-xs font-bold text-[#777777]">
                        {post.endsIn}
                      </p>
                    </div>
                  ) : null}
                </Link>
                <div className="mt-3 flex flex-wrap items-center gap-4 text-xs font-semibold text-[#888888]">
                  <span className="text-[#c62917]">
                    {ui.likes} {post.likes}
                  </span>
                  <span>
                    {ui.comments} {post.comments}
                  </span>
                  {post.price ? <span>{ui.buy}</span> : null}
                  {post.bids ? (
                    <span>
                      {ui.bids} {post.bids}
                    </span>
                  ) : null}
                  <button
                    className="ml-auto rounded-md border border-[#c62917] px-3 py-1.5 text-xs font-bold text-[#c62917] transition hover:bg-[#fff5f3]"
                    onClick={() => handleRecommend(post.id)}
                    type="button"
                  >
                    {post.author} {ui.recommend}{" "}
                    {recommendations[post.id] ?? post.authorRecommendations}
                  </button>
                </div>
              </div>
            ))}
          </article>
        </section>

        <aside className="space-y-4">
          <section className="rounded-md border border-[#dedede] bg-white">
            <div className="border-b border-[#eeeeee] px-4 py-3">
              <h2 className="text-sm font-bold">{ui.ranking}</h2>
            </div>
            <ol className="divide-y divide-[#eeeeee]">
              {ranking.map((person, index) => (
                <li
                  className="flex items-center gap-3 px-4 py-3 text-sm"
                  key={person.id}
                >
                  <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#fff5f3] font-black text-[#c62917]">
                    {index + 1}
                  </span>
                  <p className="min-w-0 flex-1 truncate font-bold text-[#333333]">
                    {person.author}
                  </p>
                  <span className="font-bold text-[#c62917]">
                    {person.recommendations}
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <section className="rounded-md border border-[#dedede] bg-white">
            <div className="border-b border-[#eeeeee] px-4 py-3">
              <h2 className="text-sm font-bold">{ui.viewed}</h2>
            </div>
            <ol className="divide-y divide-[#eeeeee]">
              {trending.map((item, index) => (
                <li className="flex gap-3 px-4 py-3 text-sm" key={item}>
                  <span className="w-4 font-bold text-[#c62917]">
                    {index + 1}
                  </span>
                  <span className="line-clamp-1 text-[#333333]">{item}</span>
                </li>
              ))}
            </ol>
          </section>
        </aside>
      </div>
    </main>
  );
}
