"use client";

import Link from "next/link";
import { useState } from "react";

const text = {
  title: "\uCEA0\uD37C\uC2A4 \uAC8C\uC2DC\uD310 \uB85C\uADF8\uC778",
  subtitle:
    "\uD559\uAD50 \uACC4\uC815\uC73C\uB85C \uCEE4\uBBA4\uB2C8\uD2F0\uC5D0 \uCC38\uC5EC\uD558\uC138\uC694",
  email: "\uC774\uBA54\uC77C",
  emailPlaceholder: "school@example.co.kr",
  password: "\uBE44\uBC00\uBC88\uD638",
  passwordPlaceholder:
    "\uBE44\uBC00\uBC88\uD638\uB97C \uC785\uB825\uD558\uC138\uC694",
  submit: "\uB85C\uADF8\uC778",
  noAccount: "\uC544\uC9C1 \uACC4\uC815\uC774 \uC5C6\uB098\uC694?",
  signup: "\uD68C\uC6D0\uAC00\uC785",
  back: "\uAC8C\uC2DC\uD310\uC73C\uB85C \uB3CC\uC544\uAC00\uAE30",
  modalTitle: "\uD68C\uC6D0\uAC00\uC785",
  modalSubtitle:
    "\uD559\uAD50 \uC774\uBA54\uC77C\uACFC \uB2C9\uB124\uC784\uC73C\uB85C \uC2DC\uC791\uD574\uBCF4\uC138\uC694",
  name: "\uB2C9\uB124\uC784",
  namePlaceholder: "\uC608: \uCEF4\uACF5\uC0C8\uB0B4\uAE30",
  confirmPassword: "\uBE44\uBC00\uBC88\uD638 \uD655\uC778",
  major: "\uD559\uACFC",
  majorPlaceholder: "\uC608: \uCEF4\uD4E8\uD130\uACF5\uD559\uACFC",
  createAccount: "\uACC4\uC815 \uB9CC\uB4E4\uAE30",
  close: "\uB2EB\uAE30",
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
