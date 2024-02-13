import {MouseEvent} from "react";

type CustomButtonProps = { hdlClick: (ev: MouseEvent) => void }

const CustomButton = ({hdlClick}: CustomButtonProps) => {
    return <button onClick={hdlClick}>Click This custom button</button>
}

export default CustomButton