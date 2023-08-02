
import Dashboard from "views/Dashboard.js";
import Teacher from "views/Teacher.js";
import Criteria from "views/Criteria.js";
import Form from "views/Form.js";
import Addvisitor from "views/Addvisitor";
import Log from "views/Log.js";
import Simple from "views/Simple.js";
// import Icons from "views/Icons.js";
import Addcomplain from "views/Addcomplain.js";
import AdmissionForm from "views/AdmissionForm";
import PostalDispatch from "views/PostalDispatch";
import PostalReceived from "views/PostalReceived";
import SubjectList from "views/SubjectList";
import SubjectGroup from "views/SubjectGroup";

// import Notifications from "views/Notifications.js";
// import UserProfile from "views/UserProfile";
import Rtl from "views/Rtl.js";
// import TableList from "views/TableList.js";

import { Typography } from "@mui/material";
import PostalDispatch from "views/PostalDispatch";
import PostalReceived from "views/PostalReceived";

var routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: <Dashboard />,
    layout: "/admin",
  },

  {
    path: "/Teacher",
    name: "TEACHER",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Teacher />,
    layout: "/admin",
  },

  {
    path: "/Criteria",
    name: "Criteria",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Criteria />,
    layout: "/admin",
  },

  {
    path: "/Log",
    name: "Log",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Log />,
    layout: "/admin",
  },

  {
    path: "/Form",
    name: "Form",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Form />,
    layout: "/admin",
  },

  {
    path: "/Simple",
    name: "Simple",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Simple />,
    layout: "/admin",
  },

  {
    path: "/Addcomplain",
    name: "ADDCOMPLAIN",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Addcomplain />,
    layout: "/admin",
  },

  {
    path: "/Addvisitor",
    name: "ADDVISITOR",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Addvisitor />,
    layout: "/admin",
  },

  {
    path: "/admission-form",
    name: "Admission Form",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AdmissionForm />,
    layout: "/admin",
  },
  {
    path: "/postal-dispatch",
    name: "Postal Dispatch",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <PostalDispatch />,
    layout: "/admin",
  },

  {
    path: "/postal-recieve",
    name: "Postal Recieve",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <PostalReceived />,
    layout: "/admin",
  },
  {
    path: "/subject-list",
    name: "Subject List",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <SubjectList />,
    layout: "/admin",
  },
  {
    path: "/subject-group",
    name: "Subject Group",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <SubjectGroup />,
    layout: "/admin",
  },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: <Notifications />,
  //   layout: "/admin",
  // },

  // {
  //   path: "/tables",
  //   name: "Table List",
  //   rtlName: "قائمة الجدول",
  //   icon: "tim-icons icon-puzzle-10",
  //   component: <TableList />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   rtlName: "الرموز",
  //   icon: "tim-icons icon-atom",
  //   component: <Icons />,
  //   layout: "/admin",
  // },


  // {
  //   path: "/user-profile",
  //   name: "User Profile",
  //   rtlName: "ملف تعريفي للمستخدم",
  //   icon: "tim-icons icon-single-02",
  //   component: <UserProfile />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   rtlName: "طباعة",
  //   icon: "tim-icons icon-align-center",
  //   component: <Typography />,
  //   layout: "/admin",
  // },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: <Rtl />,
  //   layout: "/rtl",
  // },


];
export default routes;
