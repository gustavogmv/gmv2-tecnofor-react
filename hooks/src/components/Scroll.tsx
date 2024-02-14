import {useEffect, useState} from "react";

const Scroll = () => {

    const [currentScroll, setCurrentScroll] = useState(window.scrollY)

    useEffect(() => {
        function onScroll() {
            setCurrentScroll(window.scrollY)
            console.log("onScroll...")
        }

        window.addEventListener('scroll', onScroll)

        // clean-up function
        return () => {
            window.removeEventListener('scroll', onScroll)
        }
    });

    return <div style={{position: 'fixed', bottom: 0, left: 0, width: '100%', backgroundColor: "gray"}}>
        Scroll: {currentScroll}
    </div>
}

export default Scroll;