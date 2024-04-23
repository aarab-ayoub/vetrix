import PropTypes from "prop-types";
import React, { useEffect, useCallback, useRef } from "react";

// //Import Scrollbar
import SimpleBar from "simplebar-react";

// MetisMenu
import MetisMenu from "metismenujs";
import withRouter from "components/Common/withRouter";
import { Link, useLocation } from "react-router-dom";

//i18n
import { withTranslation } from "react-i18next";

const SidebarContent = props => {
  const location = useLocation();
  const ref = useRef();
  const path = location.pathname;

  const activateParentDropdown = useCallback((item) => {
    item.classList.add("active");
    const parent = item.parentElement;
    const parent2El = parent.childNodes[1];

    if (parent2El && parent2El.id !== "side-menu") {
      parent2El.classList.add("mm-show");
    }

    if (parent) {
      parent.classList.add("mm-active");
      const parent2 = parent.parentElement;

      if (parent2) {
        parent2.classList.add("mm-show"); // ul tag

        const parent3 = parent2.parentElement; // li tag
        if (parent3) {
          parent3.classList.add("mm-active"); // li
          parent3.childNodes[0].classList.add("mm-active"); //a
          const parent4 = parent3.parentElement; // ul
          if (parent4) {
            parent4.classList.add("mm-show"); // ul
            const parent5 = parent4.parentElement;
            if (parent5) {
              parent5.classList.add("mm-show"); // li
              parent5.childNodes[0].classList.add("mm-active"); // a tag
            }
          }
        }
      }
      scrollElement(item);
      return false;
    }
    scrollElement(item);
    return false;
  }, []);

  const removeActivation = (items) => {
    for (var i = 0; i < items.length; ++i) {
      var item = items[i];
      const parent = items[i].parentElement;

      if (item && item.classList.contains("active")) {
        item.classList.remove("active");
      }
      if (parent) {
        const parent2El =
          parent.childNodes && parent.childNodes.lenght && parent.childNodes[1]
            ? parent.childNodes[1]
            : null;
        if (parent2El && parent2El.id !== "side-menu") {
          parent2El.classList.remove("mm-show");
        }

        parent.classList.remove("mm-active");
        const parent2 = parent.parentElement;

        if (parent2) {
          parent2.classList.remove("mm-show");

          const parent3 = parent2.parentElement;
          if (parent3) {
            parent3.classList.remove("mm-active"); // li
            parent3.childNodes[0].classList.remove("mm-active");

            const parent4 = parent3.parentElement; // ul
            if (parent4) {
              parent4.classList.remove("mm-show"); // ul
              const parent5 = parent4.parentElement;
              if (parent5) {
                parent5.classList.remove("mm-show"); // li
                parent5.childNodes[0].classList.remove("mm-active"); // a tag
              }
            }
          }
        }
      }
    }
  };

  const activeMenu = useCallback(() => {
    const pathName = location.pathname;
    const fullPath = pathName;
    let matchingMenuItem = null;
    const ul = document.getElementById("side-menu");
    const items = ul.getElementsByTagName("a");
    removeActivation(items);

    for (let i = 0; i < items.length; ++i) {
      if (fullPath === items[i].pathname) {
        matchingMenuItem = items[i];
        break;
      }
    }
    if (matchingMenuItem) {
      activateParentDropdown(matchingMenuItem);
    }
  }, [path, activateParentDropdown]);

  useEffect(() => {
    ref.current.recalculate();
  }, []);

  useEffect(() => {
    new MetisMenu("#side-menu");
    activeMenu();
  }, []);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    activeMenu();
  }, [activeMenu]);

  function scrollElement(item) {
    if (item) {
      const currentPosition = item.offsetTop;
      if (currentPosition > window.innerHeight) {
        ref.current.getScrollElement().scrollTop = currentPosition - 300;
      }
    }
  }

  return (
    <React.Fragment>
      <SimpleBar style={{ maxHeight: "100%" }} ref={ref}>
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">{props.t("Main")} </li>
            <li>
              <Link to="/dashboard" className="waves-effect">
                <i className="ti-home"></i>
                <span className="badge rounded-pill bg-primary float-end">1</span>
                <span>{props.t("Dashboard")}</span>
              </Link>
            </li>

            <li>
              <Link to="#" className=" waves-effect">
                <i className="ti-calendar"></i>
                <span>{props.t("Calendar")}</span>
              </Link>
            </li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-email"></i>
                <span>{props.t("Email")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Inbox")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Email Read")} </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Email Compose")} </Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">{props.t("Components")}</li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-package"></i>
                <span>{props.t("UI Elements")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Alerts")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Buttons")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Cards")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Carousel")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Dropdowns")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Grid")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Images")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Lightbox")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Modals")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Offcanvas")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Range Slider")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Session Timeout")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Progress Bars")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Tabs & Accordions")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Typography")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Video")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("General")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Colors")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Rating")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Utilities")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="waves-effect">
                <i className="ti-receipt"></i>
                <span className="badge rounded-pill bg-success float-end">9</span>
                <span>{props.t("Forms")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Form Elements")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Validation")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Advanced")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Editors")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form File Upload")} </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Xeditable")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Repeater")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Wizard")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Form Mask")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-pie-chart"></i>
                <span>{props.t("Charts")}</span>
              </Link>

              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Chartist Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("E Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Chartjs Chart")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Apex charts")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Sparkline Chart")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-view-grid"></i>
                <span>{props.t("Tables")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Basic Tables")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Data Tables")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Responsive Table")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Editable Table")}</Link>
                </li>
              </ul>
            </li>
            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-face-smile"></i>
                <span>{props.t("Icons")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">
                    {props.t("Material Design")}
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Font awesome")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Ion Icons")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Themify Icons")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Dripicons")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Typicons Icons")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#">
                <i className="ti-location-pin"></i>
                <span className="badge rounded-pill bg-danger float-end">2</span>
                <span>{props.t("Maps")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Google Maps")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Vector Maps")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Leaflet Maps")}</Link>
                </li>
              </ul>
            </li>

            <li className="menu-title">Extras</li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-archive"></i>
                <span>{props.t("Authentication")}</span>

              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{props.t("Login")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Login")} 2</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Register")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Register")} 2</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Recover Password")}
                  </Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Recover Password")} 2
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Lock screen")}</Link>
                </li>
                <li>
                  <Link to="#">
                    {props.t("Lock screen")} 2
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-support"></i>
                <span>{props.t("Extra Pages")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="false">
                <li>
                  <Link to="#">{props.t("Timeline")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Invoice")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Directory")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Starter Page")}</Link>
                </li>
                <li>
                  <Link to="/pages-404">{props.t("Error 404")}</Link>
                </li>
                <li>
                  <Link to="/pages-500">{props.t("Error 500")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Pricing")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Gallery")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Profile")}
                    <span className="badge rounded-pill bg-success float-end">New</span>
                  </Link>
                </li>
                <li>
                  <Link to="#">{props.t("Maintenance")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Coming Soon")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("FAQs")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-bookmark-alt"></i>
                <span> {props.t("Email Templates")} </span>
              </Link>
              <ul className="sub-menu">
                <li>
                  <Link to="#">{props.t("Basic Action Email")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Alert Email")}</Link>
                </li>
                <li>
                  <Link to="#">{props.t("Billing Email")}</Link>
                </li>
              </ul>
            </li>

            <li>
              <Link to="#" className="has-arrow waves-effect">
                <i className="ti-more"></i>
                <span>{props.t("Multi Level")}</span>
              </Link>
              <ul className="sub-menu" aria-expanded="true">
                <li>
                  <Link to="#">{props.t("Level 1.1")}</Link>
                </li>
                <li>
                  <Link to="#" className="has-arrow">
                    {props.t("Level 1.2")}
                  </Link>
                  <ul className="sub-menu" aria-expanded="true">
                    <li>
                      <Link to="#">{props.t("Level 2.1")}</Link>
                    </li>
                    <li>
                      <Link to="#">{props.t("Level 2.2")}</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </SimpleBar>
    </React.Fragment>
  );
};

SidebarContent.propTypes = {
  location: PropTypes.object,
  t: PropTypes.any,
};

export default withRouter(withTranslation()(SidebarContent));
