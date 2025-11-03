import logo from "../assets/Logo2.png"

function Logo({ width = "100px" }) {
  return <div>
    <img src={logo} alt="" style={{width}} className="rounded-full" />
  </div>;
}

export default Logo;
