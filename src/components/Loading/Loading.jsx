import { DotLoader } from "react-spinners";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="loading">
        <DotLoader color="red" />
    </div>
  )
}

export default Loading