import "./FeaturedProperties.css";
import useFetch from "../../hooks/useFetch";
import Loader from "../../utils/loader/Loader";

const FeaturedProperties = () => {
  const { data, error, loading } = useFetch("/hotels?featured=true&limit=4");
  console.log(data);

  return (
    <div className="fp">
      {loading ? (
        <Loader />
      ) : (
        <>
          {data.map((hotel) => (
            <div className="fpItem" key={hotel._id}>
              <img
                src={hotel.photos.length > 0 && hotel.photos[0]}
                alt=""
                className="fpImg"
              />
              <span className="fpName">{hotel.name}</span>
              <span className="fpCity">{hotel.city}</span>
              <span className="fpPrice">
                Starting from $&nbsp;{hotel.cheapestPrice}
              </span>
              {hotel.rating && (
                <div className="fpRating">
                  <button>{hotel.rating}</button>
                  <span>Excellent</span>
                </div>
              )}
            </div>
          ))}
        </>
      )}
    </div>
  );
};

export default FeaturedProperties;
