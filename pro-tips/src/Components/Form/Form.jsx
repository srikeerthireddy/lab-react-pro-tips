// eslint-disable-next-line no-unused-vars
import React from 'react';
import  { useEffect, useState } from "react";
import  styles from './Form.module.css';

const initialState = {
  fname: "",
  lname: "",
  email: "",
  phone: "",
};



const Form = () => {
  const [formData, setFormData] = useState(initialState);
  const [formError, setFormErrors] = useState({});
  const [registerStatus, setRegisterStatus] = useState(false);

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({ ...formData, [name]: value });
  };

  const validateData = (data) => {
      const err = {};
      const { fname, lname, email, phone } = data;

      if (fname.trim() === "") {
          err.fname = "Please enter your first name!";
      } else if (!/^[a-zA-Z]+$/.test(fname)) {
          err.fname = "Please enter valid first name";
      }
      if (lname.trim() === "") {
          err.lname = "Please enter your last name!";
      }
      if (email.trim() === "") {
          err.email = "Please enter your emailId!";
      } else if (!/^\S+@\S+\.\S+$/.test(email)) {
          err.email = "Please enter valid email";
      }
      if (phone.trim() === "") {
          err.phone = "Please enter your phone number!";
      } else if (!/^\d+$/.test(phone)) {
          err.phone = "Please enter valid phone number";
      } else if (phone.split("").length < 10) {
          err.phone = "Please enter 10-digit phone number!";
      }

      return err;
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      const errors = validateData(formData);
      setFormErrors(errors);

      if (Object.keys(errors).length === 0) {
          setRegisterStatus(true);
          setFormData(initialState);
      } else {
          setRegisterStatus(false);
      }
  };

  useEffect(() => {
      setTimeout(() => {
          setRegisterStatus(false);
      }, 3000);
  }, [registerStatus]);

  return (
      <div className={styles["form-container"]}>
          {registerStatus && (
              <div className={styles["succss-msg-container"]}>
                  <span className={styles["success-msg"]}>
                      Registration Successful.!!
                  </span>
              </div>
          )}
          <form onSubmit={handleSubmit}>
              <div>
                  <input
                      type="text"
                      placeholder="First Name"
                      name="fname"
                      value={formData.fname}
                      onChange={handleChange}
                  />
                  {formError.fname && (
                      <p className={styles["err"]}>{formError.fname}</p>
                  )}
              </div>
              <div>
                  <input
                      type="text"
                      placeholder="Last Name"
                      name="lname"
                      value={formData.lname}
                      onChange={handleChange}
                  />
                  {formError.lname && (
                      <p className={styles["err"]}>{formError.lname}</p>
                  )}
              </div>
              <div>
                  <input
                      type="text"
                      placeholder="Email Id"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                  />
                  {formError.email && (
                      <p className={styles["err"]}>{formError.email}</p>
                  )}
              </div>
              <div>
                  <input
                      type="tel"
                      placeholder="Phone Number"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                  />
                  {formError.phone && (
                      <p className={styles["err"]}>{formError.phone}</p>
                  )}
              </div>
              <input
                  className={styles["regBtn"]}
                  type="submit"
                  value="Register"
              />
          </form>
          </div>
  );
};

export default Form;

