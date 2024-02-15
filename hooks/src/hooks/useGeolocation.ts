import {useEffect, useState} from "react";

type GeolocationResult = GeolocationPosition | GeolocationPositionError | undefined
const useGeolocation = (): GeolocationResult => {
    const [position, setPosition] = useState<GeolocationResult>()
    //const [error, setError] = useState<GeolocationPositionError>()

    useEffect(() => {
        navigator.geolocation.getCurrentPosition(
            (currentPosition) => {
                setPosition(currentPosition)
            }, (positionError) => {
                setPosition(positionError)
            })
    }, [])

    return position
}

export default useGeolocation;