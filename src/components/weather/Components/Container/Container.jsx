import React from "react";
import { useContext,useEffect,useState } from "react";
import { Context } from "../../Context/Context";
import InputField from "../InputField/InputField";
import WeatherCard from "../WeatherCard/WeatherCard";
import SmallCardContainer from "../SmallCardContainer/SmallCardContainer";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
function Container() {
  const { weatherData } = useContext(Context);
  const [imgurl, setImgUrl] = useState();
  useEffect(() => {
    if (
      weatherData?.weather?.[0]?.main === "Haze" || weatherData?.weather?.[0]?.main === "Clouds") {
      setImgUrl("/cloudBG.jpg");
    } else if (weatherData?.weather?.[0]?.main === "Clear") {
      setImgUrl("/clearBG.jpg");
    } else if (weatherData?.weather?.[0]?.main === "Rain") {
      setImgUrl("/rainBG.jpg");
    }
  }, [weatherData]);

  return (
    <div
      className={`
        flex flex-col justify-center items-center bg-cover bg-center bg-no-repeat gap-4
        ${!weatherData?.name ? "h-screen " : "h-[100vh] mobile:h-[120vh]"} `}
      style={{backgroundImage: `url(${imgurl})`}}
    >
        <InputField />
      {!weatherData?.name ? (
        <ErrorMessage />
      ) : (
        <>
          <WeatherCard />
          <SmallCardContainer />
        </>
      )}
    </div>
  );
}

export default Container;
