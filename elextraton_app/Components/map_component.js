
import {useState,useEffect,useRef} from 'react'
import { GoogleMapsProvider, useGoogleMap,Circle} from "@ubilabs/google-maps-react-hooks";


  const mapOptions = {
    // Add your map options here
    // `center` and `zoom` are required for every map to be displayed
    center: {lat: 20.585823, lng: -100.327280},
    zoom: 17,
    disableDefaultUI: true,
    mapId: "5c57a63df58d1aa0",
    clickableIcons: false,
    tilt: 45,
    noClear: false,
  };


export default function Component_map()  {

    const [mapContainer, setMapContainer] = useState(null);


    return <GoogleMapsProvider
    googleMapsAPIKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
    mapOptions = {mapOptions}
    mapContainer={mapContainer}
    >

    <div ref={(node) => setMapContainer(node)} style={{height: '25rem', width: '30rem'}} />
    <Location/>

    </GoogleMapsProvider>;
}




function Location() {






    const [lat,setLat] = useState(20.585823);
    const [lng,setlng] = useState(-100.327280);
    const  map  = useGoogleMap()
    const markerRef = useRef();
    const circleRef = useRef();


    useEffect(() => {
        if(!map || markerRef.current) return;
        markerRef.current = new google.maps.Marker({map})
    }, [map])

    useEffect(() => {
        if(!map || circleRef.current) return;
        circleRef.current = new google.maps.Circle({map})
    }, [map])

    useEffect (()=> {
        if(!markerRef.current) return;
        if(isNaN(lat) || isNaN(lng)) return;
        markerRef.current.setPosition({lat,lng})
        markerRef.current.setIcon('http://maps.google.com/mapfiles/dir_0.png')




        console.log({lat,lng});
    }, [lat,lng,map])


    useEffect (()=> {
        if(!circleRef.current) return;
        if(isNaN(lat) || isNaN(lng)) return;
        circleRef.current.setCenter({lat,lng})
        circleRef.current.setRadius(100)



        console.log({lat,lng});
    }, [lat,lng,map])

    return (
        <div className='z-[10]'>
            <input
            type="number"
            value = {lat}
            onChange = {(event) => setLat(parseFloat(event.target.value))}
            step = {0.0001}
            >
            </input>

            <input
            type="number"
            value = {lng}
            onChange = {(event) => setlng(parseFloat(event.target.value))}
            step = {0.0001}
            >
            </input>
        </div>
    )
}