import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  const startButtonHandler = () => {
    navigate("/game");
  };

  return (
    <div>
      <p> welcome to your arcade</p>
      <button onClick={startButtonHandler}> Start game</button>
    </div>
  );
};

export default WelcomePage;
