import React from "react";

const newsData = [
  {
    id: 1,
    title: "React... 다 뿌셨습니다.",
    summary: "Router는 지옥으로 가는 길인 것일까요? ...",
    img: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
  {
    id: 2,
    title: "웹 크롤링 정복",
    summary: "HTTP 메소드를 활용한 웹 크롤링 방법을 아시나요?",
    img: `https://picsum.photos/300/200?random=${Math.floor(
      Math.random() * 100
    )}`,
  },
];

function News() {
  return (
    <div style={{ padding: "1rem", width: "66.6667%", margin: "auto" }}>
      <h2
        style={{ fontSize: "2rem", fontWeight: "bold", marginBottom: "1rem" }}
      >
        도봉이의 근황
      </h2>
      <div>
        {newsData.map((newsItem) => (
          <div
            key={newsItem.id}
            style={{
              marginBottom: "2rem",
              padding: "1.25rem",
              border: "1px solid #e2e8f0",
              borderRadius: "0.5rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <div style={{ display: "flex", flexDirection: "column" }}>
              <h3 style={{ fontSize: "3rem", fontWeight: "600" }}>
                {newsItem.title}
              </h3>
              <p style={{ marginTop: "2.5rem" }}>{newsItem.summary}</p>
              <a
                href={`/news/${newsItem.id}`}
                style={{ color: "#3182ce", marginTop: "1rem" }}
              >
                Read more
              </a>
            </div>
            <img src={newsItem.img} alt="News" style={{ width: "33.3333%" }} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default News;

// function News() {
//   return (
//     <div className="p-4 w-2/3 m-auto">
//       <h2 className="text-2xl font-bold mb-4">도봉이의 근황</h2>
//       <div>
//         <div className="mb-8 p-5 border border-gray-200 rounded-lg flex flex-col md:flex-row justify-between">
//           <div className="flex flex-col">
//             <h3 className="text-3xl font-semibold">
//               오늘은 React를 배웠습니다.
//             </h3>
//             <p className="mt-10">Router는 지옥으로 가는 길인 것일까요? ... </p>
//             <a
//               href="/news/1"
//               className="text-blue-600 hover:text-blue-800 mt-4"
//             >
//               Read more
//             </a>
//           </div>
//           <img
// src={`https://picsum.photos/300/200?random=${Math.floor(
//   Math.random() * 100
// )}`}
//             alt="Random"
//             className="w-1/3 "
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default News;
