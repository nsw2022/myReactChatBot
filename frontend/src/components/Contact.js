function Contact() {
  return (
    <div style={{ padding: "1rem", width: "75%", margin: "auto" }}>
      <h2
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          marginBottom: "1rem",
          textAlign: "center",
        }}
      >
        개발자 프로필
      </h2>
      <div
        style={{
          border: "1px solid #e2e8f0",
          borderRadius: "0.5rem",
          padding: "2rem",
        }}
      >
        <div style={{ textAlign: "center", marginBottom: "1rem" }}>
          <img
            src={`https://picsum.photos/300/200?random=${Math.floor(
              Math.random() * 100
            )}`}
            alt="Developer"
            style={{
              display: "inline-block",
              borderRadius: "50%",
              width: "16rem",
              height: "16rem",
            }}
          />
          <h3
            style={{
              fontSize: "1.25rem",
              fontWeight: "600",
              marginTop: "0.5rem",
            }}
          >
            노도봉
          </h3>
          <p>LLM 개발자 </p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600" }}>
            개발자 소개
          </h4>
          <p>저는 도봉이 개발자 입니다. 만나서 반가워요.</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600" }}>기술 스택</h4>
          <p>Python, FastAPI, HTML, CSS, JavaScript, React, LLM...</p>
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600" }}>경력</h4>
          <p>Company ABC - Frontend Developer (2020-Present)</p>
          <p>Company XYZ - Web Developer Intern (2018-2020)</p>
        </div>
        <div>
          <h4 style={{ fontSize: "1.125rem", fontWeight: "600" }}>연락처</h4>
          <p>Email: dobong@email.com</p>
          <p>LinkedIn: linkedin.com/in/dobong</p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
