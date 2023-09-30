import React, { Component } from "react";
import { AiOutlinePhone, AiOutlineMail } from "react-icons/ai";
import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import Navbar from "./Navbar";
import { useCallback, useState } from "react";
const Location = () => {
  const containerStyle = {
    width: "100%",
    height: "400px",
  };
  const center = {
    lat: -3.745,
    lng: -38.523,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyCJ_cQ-M6JOGblhZ4aK_eLY48LasyoDF_U",
  });
  const [map, setMap] = useState(null);

  const onLoad = useCallback(function callback(map) {
    // This is just an example of getting and using the map instance!!! don't just blindly copy!
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);

    setMap(map);
  }, []);
  const onUnmount = React.useCallback(function callback(map) {
    setMap(null);
  }, []);
  return (
    <>
      <Navbar />
      <div className="max-w-[1640px] justify-around p-4 mb-4 mx-auto  items-center lg:flex sm:flex-column bg-white rounded-lg shadow-lg ">
        <div className="location-desc">
          <div className="">
            <div className=" flex p-3 justify-around  ">
              <div className="flex justify-around items-center border border-[goldenrod] p-2">
                <span className="pr-1">
                  <AiOutlinePhone className="text-[goldenrod]" />
                </span>
                <span>+233549904756</span>
              </div>

              <div className="flex justify-around items-center border border-[goldenrod] p-2">
                <span className="pr-1">
                  <AiOutlineMail className="text-[goldenrod]" />
                </span>{" "}
                <span>company@gmail.com</span>
              </div>
              <div className="flex justify-around items-center border border-[goldenrod] p-2">
                <span className="pr-1">
                  <AiOutlineMail className="text-[goldenrod]" />
                </span>{" "}
                <span>company@gmail.com</span>
              </div>
            </div>
            <div>
              <span className="flex flex-wrap p-2 ">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
                facilisi. Vestibulum vehicula arcu ac tortor tincidunt, vel
                feugiat metus dignissim. Pellentesque sollicitudin odio a lacus
                vehicula, auctor malesuada tellus scelerisque. Fusce volutpat
                ligula non ultrices malesuada. In hac habitasse platea dictumst.
                Morbi venenatis orci vel ante vulputate, vel volutpat nunc
                congue. Sed varius lacinia arcu.
              </span>
            </div>
          </div>
        </div>
        <div className="location-map  ">
          <img
            src="/images/mylocation2.png"
            alt=""
            srcset=""
            className="max-w-full"
          />
        </div>
      </div>
      <div className="max-w-[1640px]">
        {isLoaded ? (
          <GoogleMap
            mapContainerStyle={containerStyle}
            center={center}
            zoom={10}
            onLoad={onLoad}
            onUnmount={onUnmount}
          >
            {/* Child components, such as markers, info windows, etc. */}
            <></>
          </GoogleMap>
        ) : (
          <>Loading map..</>
        )}
      </div>
    </>
  );
};

export default Location;
