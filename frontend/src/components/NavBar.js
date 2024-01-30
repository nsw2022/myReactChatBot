const NavBar = () => {
  return (
    <aside style={{ flex: "3", borderRight: "1px solid black;" }}>
      <h2>도봉프로젝트</h2>
      <h5>Photo of me:</h5>
      <div className="fakeimg" style={{ height: "200px" }}>
        <img src="" alt="image" />
      </div>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic distinctio
        voluptate a rerum? Consequuntur quia amet voluptatibus fugit tempora et
        dolorem modi. Ipsum harum quis nam aspernatur sint quo. Pariatur.
      </p>

      <h3>More Text</h3>
      <p>This is Sample link</p>
      <div className="fakeimg" style={{ height: "60px" }}>
        <img src="" alt="image" />
      </div>
      <div className="fakeimg" style={{ height: "60px" }}>
        <img src="" alt="image" />
      </div>
      <div className="fakeimg" style={{ height: "60px" }}>
        <img src="" alt="image" />
      </div>
    </aside>
  );
};

export default NavBar;
