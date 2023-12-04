import style from "./Spinner.module.css"
import { FaSpinner } from "react-icons/fa";

export function Spinner() {
    return (
        <div className={style.spinner}>
            <FaSpinner className={style.spinning} size={50}/>
        </div>
    )
}
