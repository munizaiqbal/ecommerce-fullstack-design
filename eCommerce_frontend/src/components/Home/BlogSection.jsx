import React from "react";
import BlogImg from "../../assets/Home/blogImg.png";

function BlogSection() {
  return (
    <div
      className="blogSection position-relative p-3 d-flex  rounded-2 justify-content-center flex-column flex-md-row h-100 w-100"
      style={{
        minHeight: "350px",
        backgroundImage: `url(${BlogImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="content text-light w-100 w-md-50 text-center text-md-start mb-4 mb-md-0">
        <h4 className="pt-5">An easy way to send requests to all suppliers</h4>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt.
        </p>
      </div>
      <div
        className="form w-100 w-md-50 bg-light text-dark d-flex p-4 flex-column  gap-2 rounded-4"
        style={{ minHeight: "200px" }}
      >
        <h4>Send quote to suppliers</h4>
        <input
          className="border border-secondary-subtle p-2 rounded-1 w-100"
          type="text"
          placeholder="What item you need?"
        />
        <textarea
          className="border border-secondary-subtle p-2 rounded-1 w-100"
          id="comment"
          name="comment"
          rows="3"
          cols="30"
          placeholder="Type more details"
        ></textarea>
        <div
          className="quantity d-flex flex-column flex-sm-row gap-2 w-100"
        >
          <input
            type="text"
            className="border border-secondary-subtle p-2 rounded-1  flex-fill"
            placeholder="Quantity"
          />
          <select
            className="border border-secondary-subtle p-2 rounded-1 flex-fill"
            name=""
            id=""
            defaultValue=""
          >
            <option value="" disabled>
              Pcs
            </option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <button className="btn btn-primary align-self-start">
          Send Inquiry
        </button>
      </div>
    </div>
  );
}

export default BlogSection;
