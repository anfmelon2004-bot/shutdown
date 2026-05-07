"use client";

import Link from "next/link";
import { useState } from "react";

const text = {
  title: "캠퍼스 게시판 로그인",
  subtitle:
    "학교 계정으로 커뮤니티에 참여하세요",
  email: "이메일",
  emailPlaceholder: "school@example.co.kr",
  password: "비밀번호",
  passwordPlaceholder:
    "비밀번호를 입력하세요",
  submit: "로그인",
  noAccount: "아직 계정이 없나요?",
  signup: "회원가입",
  back: "게시판으로 돌아가기",
  modalTitle: "회원가입",
  modalSubtitle:
    "학교 이메일과 닉네임으로 시작해보세요",
  name: "닉네임",
  namePlaceholder: "예: 컴공새내기",
  confirmPassword: "비밀번호 확인",
  major: "학과",
  majorPlaceholder: "예: 컴퓨터공학과",
  createAccount: "계정 만들기",
  close: "닫기",
};

export default function Login() {
  const [isSignupOpen, setIsSignupOpen] = useState(false);

  return (
    <main className="flex min-h-screen items-center justify-center bg-[#f5f5f5] px-4 py-10 text-[#222222]">
      <section className="w-full max-w-[420px]">
        <div className="mb-7 text-center">
          <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-md bg-[#c62917] text-2xl font-black text-white">
            L
          </div>
          <h1 className="text-2xl font-bold">{text.title}</h1>
          <p className="mt-2 text-sm text-[#777777]">{text.subtitle}</p>
        </div>

        <form className="rounded-md border border-[#dedede] bg-white p-5 shadow-sm">
          <div className="space-y-4">
            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#333333]">
                {text.email}
              </span>
              <input
                className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none transition placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                name="email"
                placeholder={text.emailPlaceholder}
                type="email"
              />
            </label>

            <label className="block">
              <span className="mb-2 block text-sm font-semibold text-[#333333]">
                {text.password}
              </span>
              <input
                className="h-12 w-full rounded-md border border-[#d9d9d9] bg-white px-3 text-sm outline-none transition placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                name="password"
                placeholder={text.passwordPlaceholder}
                type="password"
              />
            </label>
          </div>

          <button
            className="mt-6 h-12 w-full rounded-md bg-[#c62917] text-sm font-bold text-white transition hover:bg-[#ae2112]"
            type="submit"
          >
            {text.submit}
          </button>

          <div className="mt-5 border-t border-[#eeeeee] pt-5 text-center text-sm text-[#666666]">
            {text.noAccount}{" "}
            <button
              className="font-bold text-[#c62917] hover:text-[#ae2112]"
              onClick={() => setIsSignupOpen(true)}
              type="button"
            >
              {text.signup}
            </button>
          </div>
        </form>

        <Link
          className="mt-5 block text-center text-sm font-semibold text-[#777777] hover:text-[#c62917]"
          href="/"
        >
          {text.back}
        </Link>
      </section>

      {isSignupOpen ? (
        <div
          aria-modal="true"
          className="fixed inset-0 z-20 flex items-center justify-center bg-black/45 px-4 py-6"
          role="dialog"
        >
          <section className="w-full max-w-[460px] rounded-md border border-[#dedede] bg-white p-5 shadow-xl">
            <div className="flex items-start justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold">{text.modalTitle}</h2>
                <p className="mt-1 text-sm leading-6 text-[#777777]">
                  {text.modalSubtitle}
                </p>
              </div>
              <button
                aria-label={text.close}
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-md border border-[#dddddd] text-lg leading-none text-[#777777] hover:bg-[#f5f5f5]"
                onClick={() => setIsSignupOpen(false)}
                type="button"
              >
                x
              </button>
            </div>

            <form className="mt-5 space-y-4">
              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  {text.name}
                </span>
                <input
                  className="h-12 w-full rounded-md border border-[#d9d9d9] px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                  name="nickname"
                  placeholder={text.namePlaceholder}
                  type="text"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  {text.email}
                </span>
                <input
                  className="h-12 w-full rounded-md border border-[#d9d9d9] px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                  name="signupEmail"
                  placeholder={text.emailPlaceholder}
                  type="email"
                />
              </label>

              <label className="block">
                <span className="mb-2 block text-sm font-semibold">
                  {text.major}
                </span>
                <input
                  className="h-12 w-full rounded-md border border-[#d9d9d9] px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                  name="major"
                  placeholder={text.majorPlaceholder}
                  type="text"
                />
              </label>

              <div className="grid gap-4 sm:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    {text.password}
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="signupPassword"
                    placeholder={text.password}
                    type="password"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block text-sm font-semibold">
                    {text.confirmPassword}
                  </span>
                  <input
                    className="h-12 w-full rounded-md border border-[#d9d9d9] px-3 text-sm outline-none placeholder:text-[#aaaaaa] focus:border-[#c62917] focus:ring-2 focus:ring-[#c62917]/10"
                    name="confirmPassword"
                    placeholder={text.confirmPassword}
                    type="password"
                  />
                </label>
              </div>

              <button
                className="h-12 w-full rounded-md bg-[#c62917] text-sm font-bold text-white transition hover:bg-[#ae2112]"
                type="submit"
              >
                {text.createAccount}
              </button>
            </form>
          </section>
        </div>
      ) : null}
    </main>
  );
}
