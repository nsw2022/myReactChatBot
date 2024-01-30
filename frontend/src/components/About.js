const About = () => {
  return (
    <div style={{ padding: "1.5rem" }}>
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "bold",
          textAlign: "center",
          marginBottom: "1.5rem",
        }}
      >
        About
      </h1>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
        >
          도봉이 이야기
        </h2>
        <p style={{ fontSize: "1.125rem" }}>
          2024년 1월 2일, 창동역 앞에서 도봉이는 태어났어요. 도봉이는 SeSAC반
          개발자 친구들의 공부를 돕기 위해 이 세상에 나왔답니다.
        </p>
      </section>

      <section style={{ marginBottom: "1.5rem" }}>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
        >
          Mission
        </h2>
        <p style={{ fontSize: "1.125rem" }}>도봉이의 미션은...</p>
      </section>

      <section>
        <h2
          style={{
            fontSize: "2rem",
            fontWeight: "600",
            marginBottom: "0.75rem",
          }}
        >
          연락처 정보
        </h2>
        <p style={{ fontSize: "1.125rem" }}>
          질문이 있거나 연락을 원하시면 아래 연락처로 연락해 주세요.
        </p>
      </section>
    </div>
  );
};

export default About;
