import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { connect, useDispatch } from "react-redux";
import { isEmpty } from "lodash";

import { useFormik } from "formik";
import * as Yup from "yup";

import {
  Button,
  Card,
  CardBody,
  Col,
  Container,
  Form,
  FormFeedback,
  Input,
  Label,
  Modal,
  ModalBody,
  ModalHeader,
  Row,
} from "reactstrap";

import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import interactionPlugin, { Draggable } from "@fullcalendar/interaction";
import BootstrapTheme from "@fullcalendar/bootstrap";
import listPlugin from '@fullcalendar/list';

//Import Breadcrumb
import Breadcrumbs from "../../components/Common/Breadcrumb";
import {
  addNewEvent,
  deleteEvent,
  getCategories,
  getEvents,
  updateEvent,
} from "../../store/actions";
import DeleteModal from "./DeleteModal";
//css
import "@fullcalendar/bootstrap"
// import "@fullcalendar/bootstrap/main.css";
const Calender = props => {
  const { events, categories } = props;
  const [modal, setModal] = useState(false);
  const [deleteModal, setDeleteModal] = useState(false);
  const [modalcategory, setModalcategory] = useState(false);
  const [event, setEvent] = useState({});
  const [selectedDay, setSelectedDay] = useState(0);
  const [isEdit, setIsEdit] = useState(false);


  const dispatch = useDispatch();

  // events validation
  const validation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || '',
      category: (event && event.category) || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Select Your Category"),
    }),
    onSubmit: (values) => {
      if (isEdit) {
        const updatedEvent = {
          id: event.id,
          title: values.title,
          classNames: values.category + " text-white",
          start: event.start,
        };
        // update event
        dispatch(updateEvent(updatedEvent));
        validation.resetForm();
      } else {
        const newEvent = {
          id: Math.floor(Math.random() * 100),
          title: values["title"],
          start: selectedDay ? selectedDay.date : new Date(),
          className: values.category + " text-white",
        };
        // save new event
        dispatch(addNewEvent(newEvent));
        validation.resetForm();
      }
      setSelectedDay(null);
      toggle();
    },
  });

  // category validation
  const categoryValidation = useFormik({
    // enableReinitialize : use this flag when initial values needs to be changed
    enableReinitialize: true,

    initialValues: {
      title: (event && event.title) || '',
      category: (event && event.category) || '',
    },
    validationSchema: Yup.object({
      title: Yup.string().required("Please Enter Your Event Name"),
      category: Yup.string().required("Please Enter Your Billing Name"),
    }),
    onSubmit: (values) => {
      const newEvent = {
        id: Math.floor(Math.random() * 100),
        title: values["title"],
        start: selectedDay ? selectedDay.date : new Date(),
        className: values.event_category
          ? values.event_category + " text-white"
          : "bg-danger text-white",
      };
      // save new event

      dispatch(addNewEvent(newEvent));
      toggleCategory();
    },
  });

  useEffect(() => {
    const { onGetCategories, onGetEvents } = props;
    onGetCategories();
    onGetEvents();
    new Draggable(document.getElementById("external-events"), {
      itemSelector: ".external-event",
    });
  }, []);

  useEffect(() => {
    if (!modal && !isEmpty(event) && !!isEdit) {
      setTimeout(() => {
        setEvent({});
        setIsEdit(false);
      }, 500);
    }
  }, [modal, event]);

  /**
   * Handling the modal state
   */
  const toggle = () => {
    setModal(!modal);
  };

  const toggleCategory = () => {
    setModalcategory(!modalcategory);
  };

  /**
   * Handling date click on calendar
   */
  const handleDateClick = arg => {
    setSelectedDay(arg);
    toggle();
  };

  /**
   * Handling click on event on calendar
   */
  const handleEventClick = arg => {
    const event = arg.event;
    setEvent({
      id: event.id,
      title: event.title,
      title_category: event.title_category,
      start: event.start,
      className: event.classNames,
      category: event.classNames[0],
      event_category: event.classNames[0],
    });
    setIsEdit(true);
    toggle();
  };


  /**
   * On delete event
   */
  const handleDeleteEvent = () => {
    const { onDeleteEvent } = props;
    onDeleteEvent(event);
    setDeleteModal(false);
    toggle();
  };

  /**
   * On category darg event
   */
  const onDrag = (event) => {
    event.preventDefault();
  };

  /**
   * On calendar drop event
   */
  const onDrop = event => {
    const { onAddNewEvent } = props;
    const draggedEl = event.draggedEl;
    const newEvent = {
      id: Math.floor(Math.random() * 100),
      title: draggedEl.innerText,
      start: event.date,
      className: draggedEl.className,
    };
    onAddNewEvent(newEvent);
  };
  document.title = "Calender | Veltrix - React Admin & Dashboard Template";
  return (
    <React.Fragment>
      <DeleteModal
        show={deleteModal}
        onDeleteClick={handleDeleteEvent}
        onCloseClick={() => setDeleteModal(false)}
      />
      <div className="page-content">
        <Container fluid={true}>
          {/* Render Breadcrumb */}
          <Breadcrumbs title="Veltrix" breadcrumbItem="Calendar" />
          <Row>
            <Col className="col-12">
              <Row>
                <Col lg={3}>
                  <Card>
                    <CardBody>
                      <div className="d-grid">
                        <Button
                          color="primary"
                          className="font-size-16 btn-block"
                          onClick={toggleCategory}
                        >
                          <i className="mdi mdi-plus-circle-outline"></i> Create New Event
                        </Button>
                      </div>
                      <div id="external-events" className="mt-2">
                        <br />
                        <p className="text-muted">
                          Drag and drop your event or click in the calendar
                        </p>
                        {categories &&
                          categories.map((category, i) => (
                            <div
                              className={`external-event ${category.type} fc-event text-white`}
                              key={"cat-" + category.id}
                              draggable
                              onDrag={event => onDrag(event, category)}
                            >
                              <i className="mdi mdi-checkbox-blank-circle font-size-11 me-2" />
                              {category.title}
                            </div>
                          ))}
                      </div>
                      <div className="mt-5">
                        <h4 className="card-title mb-3">Activity</h4>

                        <ol className="activity-feed mb-0 ps-2 ms-1" >
                          <li className="feed-item">
                            <p className="mb-0">Andrei Coman magna sed porta finibus, risus
                              posted a new article: Forget UX Rowland</p>
                          </li>
                          <li className="feed-item">
                            <p className="mb-0">Zack Wetass, sed porta finibus, risus Chris Wallace Commented Developer Moreno</p>
                          </li>
                          <li className="feed-item">
                            <p className="mb-0">Zack Wetass, Chris combined Commented UX Murphy</p>
                          </li>
                        </ol>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                <Col lg={9}>
                  <div className="card">
                    <div className="card-body">
                      <FullCalendar
                        plugins={[
                          BootstrapTheme,
                          dayGridPlugin,
                          interactionPlugin,
                          listPlugin
                        ]}
                        initialView="dayGridMonth"
                        slotDuration={"00:15:00"}
                        handleWindowResize={true}
                        themeSystem="bootstrap"
                        headerToolbar={{
                          left: "prev,next today",
                          center: "title",
                          right: "dayGridMonth,dayGridWeek,dayGridDay,listWeek",
                        }}
                        events={events}
                        editable={true}
                        droppable={true}
                        selectable={true}
                        dateClick={handleDateClick}
                        eventClick={handleEventClick}
                        drop={onDrop}
                      />

                      {/* New/Edit event modal */}
                      <Modal isOpen={modal} className={props.className} centered>
                        <ModalHeader toggle={toggle} tag="h5">
                          {!!isEdit ? "Edit Event" : "Add Event"}
                        </ModalHeader>
                        <ModalBody>

                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              validation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <Label className="form-label">Event Name</Label>
                                  <Input
                                    name="title"
                                    type="text"
                                    // value={event ? event.title : ""}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.title || ""}
                                    invalid={
                                      validation.touched.title && validation.errors.title ? true : false
                                    }
                                  />
                                  {validation.touched.title && validation.errors.title ? (
                                    <FormFeedback type="invalid">{validation.errors.title}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <Label className="form-label">Category</Label>
                                  <Input
                                    type="select"
                                    name="category"
                                    // value={event ? event.category : "bg-primary"}
                                    onChange={validation.handleChange}
                                    onBlur={validation.handleBlur}
                                    value={validation.values.category || ""}
                                    invalid={
                                      validation.touched.category && validation.errors.category ? true : false
                                    }
                                  >
                                    <option value="bg-danger">Danger</option>
                                    <option value="bg-success">Success</option>
                                    <option value="bg-primary">Primary</option>
                                    <option value="bg-info">Info</option>
                                    <option value="bg-dark">Dark</option>
                                    <option value="bg-warning">Warning</option>
                                  </Input>
                                  {validation.touched.category && validation.errors.category ? (
                                    <FormFeedback type="invalid">{validation.errors.category}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col className="col-6">
                                {!!isEdit && (
                                  <button
                                    type="button"
                                    className="btn btn-danger me-2"
                                    onClick={() => setDeleteModal(true)}
                                  >
                                    Delete
                                  </button>
                                )}

                              </Col>
                              <Col className="col-6 text-end">

                                <button
                                  type="button"
                                  className="btn btn-light me-2"
                                  onClick={toggle}
                                >
                                  Close
                                </button>
                                <button type="submit"
                                  className="btn btn-success"
                                  id="btn-save-event"
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>

                      <Modal
                        isOpen={modalcategory}
                        toggle={toggleCategory}
                        className={props.className}
                        centered
                      >
                        <ModalHeader toggle={toggleCategory} tag="h5">
                          Add a category
                        </ModalHeader>
                        <ModalBody>

                          <Form
                            onSubmit={(e) => {
                              e.preventDefault();
                              categoryValidation.handleSubmit();
                              return false;
                            }}
                          >
                            <Row>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <Label className="form-label">Category Name</Label>
                                  <Input
                                    name="title"
                                    type="text"
                                    // value={event ? event.title : ""}
                                    placeholder="Insert Event Name"
                                    onChange={categoryValidation.handleChange}
                                    onBlur={categoryValidation.handleBlur}
                                    value={categoryValidation.values.title || ""}
                                    invalid={
                                      categoryValidation.touched.title && categoryValidation.errors.title ? true : false
                                    }
                                  />
                                  {categoryValidation.touched.title && categoryValidation.errors.title ? (
                                    <FormFeedback type="invalid">{categoryValidation.errors.title}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                              <Col className="col-12">
                                <div className="mb-3">
                                  <Label className="form-label">Category</Label>
                                  <Input
                                    type="select"
                                    name="category"
                                    placeholder="All Day Event"
                                    onChange={categoryValidation.handleChange}
                                    onBlur={categoryValidation.handleBlur}
                                    value={categoryValidation.values.category || ""}
                                    invalid={
                                      categoryValidation.touched.category && categoryValidation.errors.category ? true : false
                                    }
                                  >
                                    <option value="bg-danger">Danger</option>
                                    <option value="bg-success">Success</option>
                                    <option value="bg-primary">Primary</option>
                                    <option value="bg-info">Info</option>
                                    <option value="bg-dark">Dark</option>
                                    <option value="bg-warning">Warning</option>
                                  </Input>
                                  {categoryValidation.touched.category && categoryValidation.errors.category ? (
                                    <FormFeedback type="invalid">{categoryValidation.errors.category}</FormFeedback>
                                  ) : null}
                                </div>
                              </Col>
                            </Row>

                            <Row className="mt-2">
                              <Col className="col-6">
                                <button type="button" className="btn btn-danger" id="btn-delete-event">Delete</button>
                              </Col>
                              <Col className="col-6 text-end">
                                <button
                                  type="button"
                                  className="btn btn-light me-1"
                                  onClick={toggleCategory}
                                >
                                  Close
                                </button>
                                <button
                                  type="submit"
                                  className="btn btn-success"
                                  id="btn-save-event"
                                >
                                  Save
                                </button>
                              </Col>
                            </Row>
                          </Form>
                        </ModalBody>
                      </Modal>

                    </div>
                  </div>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

Calender.propTypes = {
  events: PropTypes.array,
  categories: PropTypes.array,
  className: PropTypes.string,
  onGetEvents: PropTypes.func,
  onAddNewEvent: PropTypes.func,
  onUpdateEvent: PropTypes.func,
  onDeleteEvent: PropTypes.func,
  onGetCategories: PropTypes.func,
};

const mapStateToProps = ({ calendar }) => ({
  events: calendar.events,
  categories: calendar.categories,
});

const mapDispatchToProps = dispatch => ({
  onGetEvents: () => dispatch(getEvents()),
  onGetCategories: () => dispatch(getCategories()),
  onAddNewEvent: event => dispatch(addNewEvent(event)),
  onUpdateEvent: event => dispatch(updateEvent(event)),
  onDeleteEvent: event => dispatch(deleteEvent(event)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Calender);
