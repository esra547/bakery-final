import { useSelector } from "react-redux";

const Home = () => {
  const cart = useSelector((state) => state);
  console.log(cart);
  return <div>
    
    homie
  </div>;
};

export default Home;
