import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";
import { useEffect, useState } from "react";
import axios from "axios";

const WidgetSm = () => {
  const [newUsers, setNewUsers] = useState([]);
  const token =
    "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMjg1YWU3ZTkwZjY3OWRjM2Y2OTdjMyIsImlzQWRtaW4iOnRydWUsImlhdCI6MTY2NDkzMzE3NiwiZXhwIjoxNjY3NTI1MTc2fQ.05fuas2W_8oYcuFA_aO14yXHJpXUSb2ZoxaLo-mUBKE";

  useEffect(() => {
    try {
      const getUser = async () => {
        const res = await axios.get("/users?new=true", {
          headers: {
            token: `${token}`,
          },
        });

        setNewUsers(res.data);
      };
      getUser();
    } catch (err) {
      console.log(err);
    }
  }, []);

  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Join Members</span>
      <ul className="widgetSmList">
        {newUsers.map((user, i) => (
          <li className="widgetSmListItem" key={i}>
            <img
              src={
                user.profilePic ||
                "https://pbs.twimg.com/media/D8tCa48VsAA4lxn.jpg"
              }
              alt=""
              className="widgetSmImg"
            />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">{user.username}</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default WidgetSm;
