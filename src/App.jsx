import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const [sidebar, setSideBar] = useState(false);
  const [home, setHome] = useState(false);
  const [records, setRecords] = useState(false);
  const [accinfo, setAccInfo] = useState(false);

  const hoverSideBar = () => {
    setSideBar(sidebar => sidebar ? false : true);
  }

  const hoverHome = () => {
    setHome(sidebar => sidebar ? false : true);
  }

  const hoverRecords = () => {
    setRecords(sidebar => sidebar ? false : true);
  }

  const hoverAccInfo = () => {
    setAccInfo(sidebar => sidebar ? false : true);
  }

  return (
      <div className="d-flex flex-column vh-100">
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
        
        <div className="row flex-grow-1 g-0">
          <div className={`${sidebar ? "col-1 custom-half-width" : "col-2"} sidebar-animation bg-gray2 text-white2 d-flex flex-column justify-content-start ${sidebar && "align-items-center"}`}>
            {!sidebar && (
              <>
            <div className="bg-gray3 p-2">
              <span className="text-lightgray small fw-light"><small><small>MAIN NAVIGATION</small></small></span>
            </div>
            <a className={`ps-1 text-decoration-none navigation-hover`} type="button">
              <button class="accordion-button py-2 bg-gray2 gap-2" type="button">
                <FontAwesomeIcon icon="fa-solid fa-house" className="text-yellow fs-6 ms-3" />
                <span class="small text-light"><small>Home</small></span>
              </button>
            </a>
            <a class={`accordion accordion-flush`} id="accordionFlushExample" type="button">
              <div class="accordion-item">
                <div class="accordion-header">
                  <button class={`accordion-button collapsed py-2 bg-gray2 gap-2 navigation-hover`} type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-6"/>
                    <span class="small text-light"><small>Records</small></span>
                  </button>
                </div>
                <div id="flush-collapseOne" className="accordion-collapse collapse bg-gray1" data-bs-parent="#accordionFlushExample">
                    <div className="d-flex flex-column justify-content-start text-lightgray">
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>ADMIN</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>FFP</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>CON</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>CSITE</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>SED</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>SMA</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>CS</small></span>
                      </a>
                      <a className="py-1 text-decoration-none recordlist-hover text-lightgray d-flex align-items-center" type="button">
                        <small><FontAwesomeIcon icon="fa-solid fa-circle-arrow-right" className="small ms-4" /></small>
                        <span class="small ms-2"><small>PPO</small></span>
                      </a>
                  </div>
                </div>
              </div>
              
              
            </a>
            <div className="bg-gray3 p-2">
                <span className="text-lightgray small fw-light"><small><small>SETTINGS</small></small></span>
              </div>
              <a className={`ps-1 text-decoration-none navigation-hover`} type="button">
                <button class="accordion-button py-2 bg-gray2 gap-2" type="button">
                  <FontAwesomeIcon icon="fa-solid fa-sliders" className="text-yellow fs-6 ms-3"/>
                  <span class="small text-light"><small>Account Information</small></span>
                </button>
              </a>
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
          </div>
        </div>
      </div>
  )
}

export default App;
