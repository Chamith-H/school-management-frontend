import "../../styles/shared/RefreshLoader.css";
import Loader from "react-js-loader";

const RefreshLoader = (props: any) => {
  return (
    <div className={props.Loading ? "Refresh-Loader" : "d-none"}>
      <div className="Loader-Top">
        <Loader type="spinner-cub" bgColor="blue" color="red" size={80} />
        <p>Please wait</p>
      </div>

      <div className="Bottom-Loader">
        <Loader
          type="rectangular-ping"
          bgColor="blue"
          color="#FFFFFF"
          size={100}
        />
      </div>
    </div>
  );
};

export default RefreshLoader;
