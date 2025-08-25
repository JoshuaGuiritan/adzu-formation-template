import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SystemUI = () => {
    const [sidebar, setSideBar] = useState(false);
    
      const hoverSideBar = () => {
        setSideBar(sidebar => sidebar ? false : true);
      }

    return(
        <>
            {/* Root Div */}
      <div className="d-flex flex-column vh-100">
        {/* Row1 */}
        <div className="row g-0">
          <div className={`${sidebar ? "col-1 custom-half-width" : "col-2"} sidebar-animation bg-darkblue text-white py-3 fs-4 fw-bold d-flex justify-content-center align-items-center`}>
            { sidebar ? <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="fs-4"/> : <img src="./Images/adzu-header-final.png" style={{height: '24px'}}/>}
          </div>
          <div className={`${sidebar ? "col-11 fill-remaining-space" : "col-10"} sidebar-animation bg-blue d-flex justify-content-between align-items-center`}>
            <a className="bar-hover h-100 px-3 d-flex justify-content-between align-items-center cursor-pointer" role="button" onClick={hoverSideBar}>
              <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white1 fs-6" />
            </a>
            <div className="text-white1 fs-6 d-flex h-100 d-flex align-items-center cursor-pointer">
              <div className="h-100 px-3 d-flex justify-center align-items-center notification-hover">
                <FontAwesomeIcon icon="fa-solid fa-bell" className="fs-5" />
              </div>
              <div className="d-flex align-items-center justify h-100 px-3 user-hover cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-user" />
                <span className="ms-1 small">Welcome, JOSHUA EDUARD!</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* Row2 */}
        <div className="row flex-grow-1 g-0">
          <div className={`${sidebar ? "col-1 custom-half-width" : "col-2"} sidebar-animation bg-gray2 text-white2 d-flex flex-column justify-content-start ${sidebar && "align-items-center"}`}>
            {!sidebar && (
              <>
            <div className="bg-gray3 p-2">
              <span className="text-lightgray small fw-light"><small><small>MAIN NAVIGATION</small></small></span>
            </div>
            <Link className={`ps-1 text-decoration-none navigation-hover`} to="/">
              <button class="accordion-button py-2 bg-gray2 gap-2" type="button">
                <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-6 ms-3" />
                <span className="small text-light"><small>Home</small></span>
              </button>
            </Link>
            <Link className={`accordion accordion-flush`} id="accordionFlushExample">
              <div className="accordion-item">
                <div className="accordion-header">
                  <button className={`accordion-button collapsed py-2 bg-gray2 gap-2 navigation-hover`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-6"/>
                    <span class="small text-light"><small>Records</small></span>
                  </button>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-gray1" data-bs-parent="#accordionFlushExample">
                    <div className="d-flex flex-column justify-content-start text-lightgray">
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/ADMIN">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>ADMIN</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/FFP">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>FFP</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/CON">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CON</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/CSITE">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CSITE</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/SED">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SED</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/SMA">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SMA</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/CS">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CS</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="Records/PPO">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>PPO</small></span>
                      </Link>
                  </div>
                </div>
              </div>
            </Link>
            <div className="bg-gray3 p-2">
                <span className="text-lightgray small fw-light"><small><small>SETTINGS</small></small></span>
              </div>
              <Link className={`ps-1 text-decoration-none navigation-hover`} to="Account-Information">
                <button className="accordion-button py-2 bg-gray2 gap-2">
                  <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-6 ms-3"/>
                  <span className="small text-light"><small>Account Information</small></span>
                </button>
              </Link>
            </>
            )}
            {sidebar && (
              <>
              <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-5 mt-3" />
              <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-5 mt-3"/>
              <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-5 mt-3"/>
              </>
            )}
          </div>
          <div className={`${sidebar ? "col-11 fill-remaining-space" : "col-10"} sidebar-animation bg-white2`}>
            <Outlet />
          </div>
        </div>
      </div>
    </>
    )
}

export default SystemUI;