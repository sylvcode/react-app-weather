import react from "react";
import "./Weather.css";

export default function Weather() {
    return (
        <div className="Weather">

            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-md-9 col-lg-7 col-xl-5">
                    <div className="card mb-4 gradient-custom">
                        <div className="card-body p-4">

                            <div id="demo1" className="carousel slide" data-ride="carousel">
                                <ul className="carousel-indicators mb-0">
                                    <li data-target="#demo1" data-slide-to="0" class="active"></li>
                                    <li data-target="#demo1" data-slide-to="1"></li>
                                    <li data-target="#demo1" data-slide-to="2"></li>
                                </ul>
                                <div className="carousel-inner">
                                    <div className="carousel-item active">
                                        <div className="d-flex justify-content-between mb-4 pb-2">
                                            <div>
                                                <h2 className="display-2"><strong>217°C</strong></h2>
                                                <p className="text-muted mb-0">Frankurt, Germany</p>
                                            </div>
                                            <div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>



            Hello</div>
    )
}