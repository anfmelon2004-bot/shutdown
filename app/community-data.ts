export type BoardKey = "home" | "free" | "market" | "examAuction" | "reviews";

export type CommunityPost = {
  id: number;
  board: string;
  title: string;
  preview: string;
  time: string;
  comments: number;
  likes: number;
  author: string;
  authorRecommendations: number;
  price?: string;
  status?: string;
  currentBid?: string;
  bids?: number;
  endsIn?: string;
  rating?: string;
  professor?: string;
};

export const boards = [
  { label: "\uC790\uC720\uAC8C\uC2DC\uD310", href: "/free" },
  { label: "\uC7A5\uD130\uAC8C\uC2DC\uD310", href: "/market" },
  { label: "\uC871\uBCF4\uACBD\uB9E4\uC7A5", href: "/exam-auction" },
  { label: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310", href: "/reviews" },
];

export const freePosts: CommunityPost[] = [
  {
    id: 1,
    board: "\uC790\uC720\uAC8C\uC2DC\uD310",
    title:
      "\uC624\uB298 \uD559\uC0DD\uC2DD\uB2F9 \uB3C8\uAC00\uC2A4 \uAD1C\uCC2E\uB098\uC694?",
    preview:
      "\uC810\uC2EC \uC804\uC5D0 \uBE60\uB974\uAC8C \uBA39\uACE0 \uC218\uC5C5 \uB4E4\uC5B4\uAC00\uC57C \uD558\uB294\uB370 \uC904 \uB9CE\uC774 \uC11C\uB098\uC694?",
    time: "\uBC29\uAE08",
    comments: 12,
    likes: 18,
    author: "\uBBFC\uC900",
    authorRecommendations: 42,
  },
  {
    id: 2,
    board: "\uC790\uC720\uAC8C\uC2DC\uD310",
    title:
      "\uC911\uC559\uB3C4\uC11C\uAD00 \uC624\uD6C4\uC5D0 \uC790\uB9AC \uB9CE\uC774 \uB0A8\uC544\uC788\uB098\uC694?",
    preview:
      "\uD300\uD50C \uC900\uBE44\uD574\uC57C \uD574\uC11C \uC870\uC6A9\uD55C \uC790\uB9AC \uCC3E\uACE0 \uC788\uC2B5\uB2C8\uB2E4.",
    time: "8\uBD84 \uC804",
    comments: 7,
    likes: 14,
    author: "\uC11C\uC5F0",
    authorRecommendations: 37,
  },
  {
    id: 3,
    board: "\uC790\uC720\uAC8C\uC2DC\uD310",
    title:
      "\uCD95\uC81C \uB450 \uBC88\uC9F8 \uB0A0 \uBD80\uC2A4 \uCD94\uCC9C\uD574\uC8FC\uC138\uC694",
    preview:
      "\uCE5C\uAD6C\uB4E4\uACFC \uC800\uB141\uC5D0 \uB3CC\uC544\uBCF4\uB824\uACE0 \uD558\uB294\uB370 \uBA39\uC744 \uAC83 \uC704\uC8FC\uB85C \uAD81\uAE08\uD574\uC694.",
    time: "19\uBD84 \uC804",
    comments: 21,
    likes: 33,
    author: "\uB3C4\uC724",
    authorRecommendations: 29,
  },
];

export const marketPosts: CommunityPost[] = [
  {
    id: 4,
    board: "\uC7A5\uD130\uAC8C\uC2DC\uD310",
    title:
      "\uC544\uC774\uD328\uB4DC \uC5D0\uC5B4 5\uC138\uB300 64GB \uD544\uAE30\uC6A9",
    preview:
      "\uD544\uB984 \uBD80\uCC29, \uCF00\uC774\uC2A4 \uD3EC\uD568. \uAC15\uC758\uC2E4\uC5D0\uC11C \uBC14\uB85C \uAC70\uB798 \uAC00\uB2A5",
    time: "3\uBD84 \uC804",
    comments: 18,
    likes: 26,
    author: "\uD558\uB9B0",
    authorRecommendations: 55,
    price: "385,000\uC6D0",
    status: "\uAD6C\uB9E4\uAC00\uB2A5",
  },
  {
    id: 5,
    board: "\uC7A5\uD130\uAC8C\uC2DC\uD310",
    title:
      "\uC804\uACF5\uC11C \uC138\uD2B8 \uC790\uB8CC\uAD6C\uC870 + \uC6B4\uC601\uCCB4\uC81C",
    preview:
      "\uD544\uAE30 \uC57D\uAC04 \uC788\uC9C0\uB9CC \uC0C1\uD0DC \uC88B\uC544\uC694. \uC624\uB298 \uC548\uC5D0 \uAC00\uC838\uAC00\uC2E4 \uBD84",
    time: "11\uBD84 \uC804",
    comments: 9,
    likes: 17,
    author: "\uC9C0\uD638",
    authorRecommendations: 48,
    price: "42,000\uC6D0",
    status: "\uAD6C\uB9E4\uAC00\uB2A5",
  },
  {
    id: 6,
    board: "\uC7A5\uD130\uAC8C\uC2DC\uD310",
    title:
      "\uAE30\uC219\uC0AC\uC6A9 \uBBF8\uB2C8 \uCCAD\uC18C\uAE30 \uAC70\uC758 \uC0C8\uAC83",
    preview:
      "\uD55C \uB2EC \uC0AC\uC6A9. \uC18C\uC74C \uC791\uACE0 \uD544\uD130 \uC5EC\uBD84 \uC788\uC2B5\uB2C8\uB2E4",
    time: "24\uBD84 \uC804",
    comments: 6,
    likes: 12,
    author: "\uC720\uB098",
    authorRecommendations: 31,
    price: "28,000\uC6D0",
    status: "\uC608\uC57D\uC911",
  },
];

export const examAuctionPosts: CommunityPost[] = [
  {
    id: 10,
    board: "\uC871\uBCF4\uACBD\uB9E4\uC7A5",
    title:
      "\uC790\uB8CC\uAD6C\uC870 \uC911\uAC04\uACE0\uC0AC \uBCF5\uC6D0 \uC815\uB9AC\uBCF8",
    preview:
      "\uC9C0\uB09C \uD559\uAE30 \uC911\uAC04 \uBCF5\uC6D0\uACFC \uD575\uC2EC \uC720\uD615 \uC815\uB9AC\uB97C \uD3EC\uD568\uD588\uC2B5\uB2C8\uB2E4.",
    time: "5\uBD84 \uC804",
    comments: 14,
    likes: 19,
    author: "\uC900\uC11C",
    authorRecommendations: 58,
    currentBid: "18,000\uC6D0",
    bids: 9,
    endsIn: "22\uBD84 \uB0A8\uC74C",
  },
  {
    id: 11,
    board: "\uC871\uBCF4\uACBD\uB9E4\uC7A5",
    title:
      "\uC6F9\uD504\uB85C\uADF8\uB798\uBC0D \uAE30\uB9D0 \uD504\uB85C\uC81D\uD2B8 \uCC44\uC810\uD3EC\uC778\uD2B8",
    preview:
      "\uAD50\uC218\uB2D8\uC774 \uC911\uC694\uD558\uAC8C \uBCF4\uC2DC\uB294 \uD56D\uBAA9\uACFC \uAE30\uB9D0 \uC900\uBE44 \uD301\uC785\uB2C8\uB2E4.",
    time: "18\uBD84 \uC804",
    comments: 8,
    likes: 16,
    author: "\uC18C\uC724",
    authorRecommendations: 46,
    currentBid: "12,000\uC6D0",
    bids: 6,
    endsIn: "47\uBD84 \uB0A8\uC74C",
  },
  {
    id: 12,
    board: "\uC871\uBCF4\uACBD\uB9E4\uC7A5",
    title:
      "\uD604\uB300\uC0AC\uD68C\uC640\uC724\uB9AC \uAE30\uCD9C \uD1A0\uB860\uC8FC\uC81C \uBAA8\uC74C",
    preview:
      "\uC218\uC5C5 \uD1A0\uB860\uC8FC\uC81C\uC640 \uC2DC\uD5D8 \uB300\uBE44\uC6A9 \uC694\uC57D \uBB38\uC11C\uC785\uB2C8\uB2E4.",
    time: "39\uBD84 \uC804",
    comments: 5,
    likes: 11,
    author: "\uAC00\uC628",
    authorRecommendations: 34,
    currentBid: "9,000\uC6D0",
    bids: 4,
    endsIn: "1\uC2DC\uAC04 \uB0A8\uC74C",
  },
];

export const reviewPosts: CommunityPost[] = [
  {
    id: 7,
    board: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310",
    title:
      "\uC6F9\uD504\uB85C\uADF8\uB798\uBC0D \uACFC\uC81C\uB294 \uB9CE\uC9C0\uB9CC \uC2E4\uC2B5\uC774 \uD0C4\uD0C4\uD574\uC694",
    preview:
      "\uB9E4\uC8FC \uC791\uC740 \uACFC\uC81C\uAC00 \uC788\uACE0 \uAE30\uB9D0 \uD504\uB85C\uC81D\uD2B8\uAC00 \uD07D\uB2C8\uB2E4. \uB530\uB77C\uAC00\uBA74 \uACB0\uACFC\uBB3C\uC774 \uD655\uC2E4\uD788 \uB0A8\uC544\uC694.",
    time: "15\uBD84 \uC804",
    comments: 11,
    likes: 22,
    author: "\uD604\uC6B0",
    authorRecommendations: 63,
    rating: "4.6",
    professor: "\uAE40\uB3C4\uD604 \uAD50\uC218",
  },
  {
    id: 8,
    board: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310",
    title:
      "\uD604\uB300\uC0AC\uD68C\uC640\uC724\uB9AC \uD1A0\uB860 \uCC38\uC5EC \uBE44\uC911\uC774 \uD07D\uB2C8\uB2E4",
    preview:
      "\uCD9C\uC11D\uACFC \uD1A0\uB860 \uD0DC\uB3C4\uB97C \uAFB8\uC900\uD788 \uBCF4\uC154\uC11C \uB9D0\uD558\uAE30 \uBD80\uB2F4 \uC5C6\uB294 \uBD84\uB4E4\uC5D0\uAC8C \uC798 \uB9DE\uC544\uC694.",
    time: "32\uBD84 \uC804",
    comments: 4,
    likes: 13,
    author: "\uB098\uC740",
    authorRecommendations: 35,
    rating: "4.1",
    professor: "\uBC15\uC11C\uC9C4 \uAD50\uC218",
  },
  {
    id: 9,
    board: "\uAC15\uC758\uD3C9\uAC8C\uC2DC\uD310",
    title:
      "\uC790\uB8CC\uAD6C\uC870 \uC2DC\uD5D8 \uB09C\uC774\uB3C4\uB294 \uB192\uC9C0\uB9CC \uC124\uBA85\uC774 \uBA85\uD655\uD574\uC694",
    preview:
      "\uCF54\uB529 \uD14C\uC2A4\uD2B8 \uC900\uBE44\uC5D0\uB3C4 \uB3C4\uC6C0\uB429\uB2C8\uB2E4. \uBCF5\uC2B5 \uC548 \uD558\uBA74 \uC911\uAC04\uBD80\uD130 \uAF64 \uD798\uB4E4\uC5B4\uC694.",
    time: "1\uC2DC\uAC04 \uC804",
    comments: 19,
    likes: 28,
    author: "\uD0DC\uC624",
    authorRecommendations: 44,
    rating: "4.4",
    professor: "\uC774\uC218\uBBFC \uAD50\uC218",
  },
];

export const allPosts = [
  ...freePosts,
  ...marketPosts,
  ...examAuctionPosts,
  ...reviewPosts,
];

export const trending = [
  "\uC2DC\uD5D8\uAE30\uAC04 \uCE74\uD398 \uC790\uB9AC \uB9CE\uC740 \uACF3",
  "\uBCF5\uC218\uC804\uACF5 \uC2E0\uCCAD \uD6C4\uAE30",
  "\uAE30\uC219\uC0AC \uD0DD\uBC30 \uBCF4\uAD00\uD568 \uC704\uCE58",
  "\uC624\uB298 \uCD95\uC81C \uBD80\uC2A4 \uBA54\uB274 \uC815\uB9AC",
];
