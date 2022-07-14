import "./Loader.css"
import Skeleton from '@mui/material/Skeleton';

const Loader = () => {
  return (
    <div className="loaders">
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
      <Skeleton variant="rectangular" width={210} height={118} />
    </div>
  );
};

export default Loader;
