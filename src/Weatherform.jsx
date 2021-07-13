import react from "react";
import "./Weatherform.css";


export default function Weatherform() {
    return (

        < form >
            <input type="search"
                placeholder="Type a city.."
                className="form-control"
            />
            <input type="submit" value="Search" className="btn-outline-light customised" />
        </form >
    )
}