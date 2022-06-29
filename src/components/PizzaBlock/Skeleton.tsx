
import ContentLoader from "react-content-loader"

const Skeleton = () => (
    <ContentLoader 
    className="pizza-block"
    speed={2}
    width={280}
    height={480}
    viewBox="0 0 280 480"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="135" cy="128" r="125" /> 
    <rect x="0" y="283" rx="9" ry="9" width="280" height="27" /> 
    <rect x="0" y="443" rx="9" ry="9" width="92" height="27" /> 
    <rect x="129" y="436" rx="28" ry="28" width="153" height="45" /> 
    <rect x="0" y="333" rx="9" ry="9" width="280" height="88" />
  </ContentLoader>
)
export default Skeleton