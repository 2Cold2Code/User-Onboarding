import React from "react";
import { useHistory } from "react-router-dom";

function Form(props) {
  const { user, setUser, setMembers, baseStateObj } = props;
  const memberList = [];
  const { push } = useHistory();
  const memberButton = () => {
    push("/members");
  };
  console.log(
    "user, setUser, setMembers, baseStateObj (in that order): ",
    user,
    setUser,
    setMembers,
    baseStateObj
  );

  const submitHandler = (e) => {
    e.preventDefault();
    memberList.push({ ...user });
    setMembers([...memberList]); //member needs to be an array to be able to map them and have multiple members
    setUser({ ...user, [e.target.name]: baseStateObj });
    memberButton();
  };

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  return (
    <div className="form-container">
      <form onSubmit={submitHandler}
        style={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          alignItems: "flex-start",
          lineHeight: "1.75",
        }}
      >
        <label htmlFor="name">Name:</label>
        <input
          name="name"
          type="text"
          id="name"
          placeholder="Enter your name"
          value={user.name}
          onChange={handleChange}
        />
        <label htmlFor="email">Email:</label>
        <input
          name="email"
          type="email"
          id="email"
          placeholder="Enter valid email"
          value={user.email}
          onChange={handleChange}
        />
        <label htmlFor="password">Password:</label>
        <input
          name="password"
          type="password"
          id="password"
          placeholder="Enter valid password"
          value={user.password}
          onChange={handleChange}
        />
        <label htmlFor="terms">Terms of Service:</label>
        <input
          name="terms"
          type="checkbox"
          id="terms"
          checked={user.terms}
          onChange={handleChange}
        />
        <button onSubmit={submitHandler}>Join</button>
      </form>
    </div>
  );
}
export default Form;
