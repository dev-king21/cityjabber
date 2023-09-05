import React, { useState } from "react";
import Icon from "react-multi-date-picker/components/icon";

const SignupDetail = (props) => {
  const [avatar, setAvatar] = useState(null);

  const handleAvatarChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setAvatar(URL.createObjectURL(file));
    }
  };

  const handlesSubmit = async (e) => {
    e.preventDefault();

    props.handleSignin();
  };

  return (
    <div style={{ padding: "15px" }}>
      <div className="col-12">
        <h1 className="text-19 fw-500 text-danger text-center">
          Welcome to Signup!
        </h1>
        <div className="text-center px-10 text-20 ">
          Complete your profile so others can find you.
        </div>
      </div>
      <form className="row y-gap-20 pt-20" onSubmit={handlesSubmit}>
        {/* Avatar display */}
        <div className="col-4 ">
          {avatar ? (
            <img
              src={avatar}
              alt="Avatar Preview"
              className="border border-2 rounded-2 p-2"
              style={{ maxWidth: "150px" }}
            />
          ) : (
            <img
              src="/img/avatars/user_people_icon.svg"
              alt="Default Icon"
              className="border border-3  rounded-2 p-2"
              style={{
                width: "150px",
                height: "150px",
              }}
            />
          )}
        </div>

        {/*Upload From Facebook */}
        <div className="col-8">
          <div className="col-md-12 col-12">
            <button className="button col-12 -outline-blue-1 text-white-1 py-15 rounded-8 ">
              <i className="icon-facebook text-18 mr-10" />
              Upload Facebook Photo
            </button>
          </div>
          <div className="col-md-12 col-12">
            <div className="row align-items-center">
              <div className="col">
                <hr />
              </div>
              <div className="col-auto">OR</div>
              <div className="col">
                <hr />
              </div>
            </div>
          </div>

          {/* Upload by local */}
          <div className="col-md-12 col-12 pt-5">
            <label className="button -outline-red-1 py-15 rounded-8 ">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                style={{ display: "none" }}
              />
            </label>
          </div>
        </div>

        <div className="col-md-12 col-12">
          <label htmlFor="ageInput" className="form-label">
            Enter your age:
          </label>
          <input
            type="number"
            className="form-control border border-width-1"
            placeholder="Enter your age..."
            min={0}
            max={100}
            id="ageInput"
          />
        </div>

        <div className="col-md-12 col-12">
          <label htmlFor="genderSelect" className="form-label">
            Select gender:
          </label>
          <select className="form-select" id="genderSelect">
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>
        </div>
        <div className="col-8">
          <div className="col-md-12 col-12">
            <button className="btn col-12 btn-danger">Save & Continue </button>
          </div>
        </div>
        <div className="col-4">
          <button
            className="btn col-12 btn-primary"
            onClick={props.handleSignin}
          >
            {" "}
            Skip
          </button>
        </div>

        {/* End .col */}
      </form>
    </div>
  );
};

export default SignupDetail;
