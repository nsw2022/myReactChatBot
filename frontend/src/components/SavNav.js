const SuvNav = () => {
  return (
    <nav className="">
      <ul
        className=""
        style={{ display: "flex", listStyle: "none", transform: "0.3s" }}
      >
        <li className="">
          <a href="/" className="">
            홈
          </a>
        </li>
        <li className="">
          <a href="news" className="">
            도봉이 근황 보기
          </a>
        </li>
        <li className="">
          <a href="contact" className="">
            도봉이 만든 사람 소개
          </a>
        </li>
        <li className="">
          <a href="about" className="">
            도봉이는...
          </a>
        </li>
        <li>
          <a href="map">맛집검색</a>
        </li>
      </ul>
    </nav>
  );
};

export default SuvNav;
