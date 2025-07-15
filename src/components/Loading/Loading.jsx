import { DotLoader } from "react-spinners";
import "./loading.css";

const Loading = () => {
  return (
    <div className="loading">
        <DotLoader color="red" />
    </div>
  )
}

export default Loading