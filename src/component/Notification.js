import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getNotification } from "../Store/Action";

const Notification=()=>{
    console.log("jbhdasjksbh")
   const dispatch=useDispatch();
    const notificationData = useSelector((state) => state.notificationData?.notificationData);
    useEffect(() => {
        getNotification (dispatch);
      }, []);
      
console.log(notificationData);

    return(
<>
<h2>Notification</h2>
<div>This is notification page</div>
{notificationData?.notification_data.map((value,index)=>{
    return(
<div className="notification-card contacts noti-listing">
  <div><img src={value.product_data.default_image}
      alt="alt" className="notification-img"/>
    <div><strong className="title" >{value.title}</strong><small>19/10/22</small><strong className="name"> New message from {value.from_user}</strong><span
        className="msg">{value.message}</span></div>
  </div>
</div>
    );
})}


</>
    );
}
export default Notification;