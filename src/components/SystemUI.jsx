import { useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const SystemUI = () => {
    const [sidebar, setSideBar] = useState(false);
    
      const hoverSideBar = () => {
        setSideBar(sidebar => sidebar ? false : true);
      }

      // type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample"

    return(
      <div className="d-flex flex-column vh-100">
        <div className="row g-0">
          <div className={`${sidebar ? "col-lg-1 custom-half-width" : "col-lg-2"} sidebar-animation bg-darkblue text-white py-lg-3 py-2 fs-4 fw-bold d-flex justify-content-center align-items-center col-12`}>
            { sidebar ? <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="fs-4"/> : <img src="./Images/adzu-header-final.png" style={{height: '24px'}}/>}
          </div>
          <div className={`${sidebar ? "col-lg-11 fill-remaining-space" : "col-lg-10"} sidebar-animation bg-blue d-flex justify-content-between align-items-center col-12`}>
            <button className="bar-hover d-lg-block d-none border-0 h-100 px-3 d-flex justify-content-between align-items-center cursor-pointer" role="button" onClick={hoverSideBar}>
              <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white1 fs-6" />
            </button>
            <button className="bar-hover py-3 d-lg-none d-block border-0 h-100 px-3 d-flex justify-content-between align-items-center cursor-pointer" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasExample" aria-controls="offcanvasExample">
              <FontAwesomeIcon icon="fa-solid fa-bars" className="text-white1 fs-6" />
            </button>
            <div className="text-white1 fs-6 d-flex h-100 d-flex align-items-center cursor-pointer">
              <div className="h-100 px-3 d-flex justify-center align-items-center notification-hover">
                <FontAwesomeIcon icon="fa-solid fa-bell" className="fs-5" />
              </div>
              <div className="d-lg-flex d-none align-items-center justify h-100 px-3 user-hover cursor-pointer">
                <FontAwesomeIcon icon="fa-solid fa-user" />
                <span className="ms-1 small">Welcome, JOSHUA EDUARD!</span>
              </div>
            </div>
          </div>
        </div>
        <div className="row flex-grow-1 g-0">
          <div className={`${sidebar ? "col-1 custom-half-width" : "col-2"} sidebar-animation bg-gray2 text-white2 d-flex flex-column justify-content-start d-lg-block d-none ${sidebar && "align-items-center"}`}>
            {!sidebar && (
              <>
            <div className="bg-gray3 p-2">
              <span className="text-lightgray small fw-light"><small><small>MAIN NAVIGATION</small></small></span>
            </div>
            <Link className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 bg-gray2 gap-2`} to="/">
              <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-6 ms-3" />
              <span className="small text-light"><small>Home</small></span>
            </Link>
            <div className={`accordion accordion-flush`} id="accordionFlushExample">
              <div className="accordion-item">
                <div className="accordion-header">
                  <Link className={`accordion-button collapsed py-2 bg-gray2 gap-2 navigation-hover`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-6"/>
                    <span class="small text-light"><small>Records</small></span>
                  </Link>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-gray1" data-bs-parent="#accordionFlushExample">
                    <div className="d-flex flex-column justify-content-start text-lightgray">
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/admin">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>ADMIN</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/ffp">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>FFP</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/con">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CON</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/csite">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CSITE</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/sed">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SED</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/sma">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SMA</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/cs">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CS</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/ppo">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>PPO</small></span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray3 p-2">
                <span className="text-lightgray small fw-light"><small><small>SETTINGS</small></small></span>
              </div>
              <Link className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 bg-gray2 gap-2`} to="account-information">
                  <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-6 ms-3"/>
                  <span className="small text-light"><small>Account Information</small></span>
              </Link>
            </>
            )}
            {sidebar && (
              <div className="d-flex flex-column align-items-center">
                <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-5 mt-4" />
                <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-5 mt-4"/>
                <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-5 mt-4"/>
              </div>
            )}
          </div>
          <div className={`${sidebar ? "col-lg-11 fill-remaining-space" : "col-lg-10"} sidebar-animation bg-white2 col-12`}>
            <Outlet />
          </div>
        </div>

        <div class="offcanvas offcanvas-start w-50 bg-gray2" tabindex="-1" id="offcanvasExample" aria-labelledby="offcanvasExampleLabel">
            <div class="offcanvas-header bg-darkblue">
              <div className="text-light align-items-center justify h-100 user-hover cursor-pointer">
                <small><FontAwesomeIcon icon="fa-solid fa-user" className="small"/></small>
                <span className="ms-1 small"><small><small>Welcome, JOSHUA!</small></small></span>
              </div>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="bg-gray3 p-2">
              <span className="text-lightgray small fw-light"><small><small>MAIN NAVIGATION</small></small></span>
            </div>
            <Link className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 bg-gray2 gap-2`} to="/">
              <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-6 ms-3" />
              <span className="small text-light"><small>Home</small></span>
            </Link>
            <div className={`accordion accordion-flush`} id="accordionFlushExample">
              <div className="accordion-item">
                <div className="accordion-header">
                  <Link className={`accordion-button collapsed py-2 bg-gray2 gap-2 navigation-hover`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-6"/>
                    <span class="small text-light"><small>Records</small></span>
                  </Link>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-gray1" data-bs-parent="#accordionFlushExample">
                    <div className="d-flex flex-column justify-content-start text-lightgray">
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/admin">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>ADMIN</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/ffp">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>FFP</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/con">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CON</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/csite">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CSITE</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/sed">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SED</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/sma">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>SMA</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/cs">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>CS</small></span>
                      </Link>
                      <Link className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" to="records/ppo">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span className="small ms-2"><small>PPO</small></span>
                      </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray3 p-2">
                <span className="text-lightgray small fw-light"><small><small>SETTINGS</small></small></span>
              </div>
              <Link className={`ps-1 text-decoration-none navigation-hover accordion-button py-2 bg-gray2 gap-2`} to="account-information">
                  <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-6 ms-3"/>
                  <span className="small text-light"><small>Account Information</small></span>
              </Link>
        </div>
      </div>



    )
}

export default SystemUI;