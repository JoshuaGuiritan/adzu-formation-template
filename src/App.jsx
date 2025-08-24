import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {

  const [sidebar, setSideBar] = useState(false);
  const [table, setTable] = useState(false);

  const hoverSideBar = () => {
    setSideBar(sidebar => sidebar ? false : true);
  }

  return (
      <div className="d-flex flex-column vh-100">
        <div className="row g-0">
          <div className={`${sidebar ? "col-1" : "col-2"} sidebar-animation bg-darkblue text-white py-3 fs-4 fw-bold d-flex justify-content-center align-items-center`}>
            { sidebar ? <FontAwesomeIcon icon="fa-solid fa-graduation-cap" className="fs-4"/> : <img src="./Images/adzu-header-final.png" style={{height: '24px'}}/>}
          </div>
          <div className={`${sidebar ? "col-11" : "col-10"} sidebar-animation bg-blue d-flex justify-content-between align-items-center`}>
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
          <div className={`${sidebar ? "col-1" : "col-2"} sidebar-animation bg-gray2 text-white2 d-flex flex-column justify-content-start`}>
            {/* <div className="position-relative p-3">
                <input
                    className="form-control small py-2 ps-2 pe-5 bg-gray1 border-0 rounded-1 text-white searchbar-placeholder" // Added text-white for visibility
                    type="text"
                    placeholder="Search menu..."
                />
                <div className="position-absolute top-50 end-0 translate-middle-y me-4">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="text-yellowgray small" />
                </div>
            </div> */}
            <div className="bg-gray3 p-2">
              <span className="text-lightgray small fw-light"><small><small>MAIN NAVIGATION</small></small></span>
            </div>
            <div class="accordion accordion-flush" id="accordionFlushExample">
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button class="accordion-button collapsed py-3 bg-gray2 d-flex justify-content-between gap-2" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                    <FontAwesomeIcon icon="fa-solid fa-table" className="text-yellow fs-6"/>
                    <span class="small text-light"><small>Records</small></span>
                  </button>
                </h2>
                <div id="flush-collapseOne" className="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                  <div class="accordion-body py-2 fs-6 bg-gray1 text-lightgray">
                    Placeholder content for this accordion, which is intended to demonstrate the class. This is the first item’s accordion body.
                  </div>
                </div>
              </div>
            </div>
            
          </div>
          <div className={`${sidebar ? "col-11" : "col-10"} sidebar-animation bg-white2`}>
          </div>
        </div>
      </div>
  )
}

export default App
