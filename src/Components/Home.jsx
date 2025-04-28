import logo from "../../src/assets/img/omar.png";
import omarfaruk from "../../src/assets/img/hourglass.jpg";

const Home = () => {
  return (
    <div>
      <h1>This is home</h1>
      <img className="w-28 h-28" src={logo} alt="" />
      <img src={omarfaruk} alt="" />
    </div>
  );
};

export default Home;
