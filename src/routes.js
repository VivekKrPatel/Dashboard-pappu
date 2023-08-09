
import Dashboard from "views/Dashboard.js";
import Tablepayment from "views/Tablepayment.js";
import Feesdetails from "views/Feesdetails.js";
import Addexpense from "views/Addexpense.js";
import Component from "views/Component.js";
import Addschool from "views/Addschool.js";
import StudentForm from "views/StudentForm.js";
import Teacher from "views/Teacher.js";
import Criteria from "views/Criteria.js";
import Form from "views/Form.js";
import Addvisitor from "views/Addvisitor";
import Log from "views/Log.js";
import Simple from "views/Simple.js";
import Icons from "views/Icons.js";
import Addcomplain from "views/Addcomplain.js";
import AdmissionForm from "views/AdmissionForm";
import PostalDispatch from "views/PostalDispatch";
import PostalReceived from "views/PostalReceived";
import SubjectList from "views/SubjectList";
import SubjectGroup from "views/SubjectGroup";
import StaffIdCard from "views/StaffIdCard";
<<<<<<< HEAD
import StudentList from "views/StudentList";
import AdmissionList from "views/AdmissionList";
import Category from "views/Category";
import DisableReason from "views/DisableReason";
import FeesMaster from "views/FeesMaster";
import ExpenseHead from "views/ExpenseHead";
import ExamGroup from "views/ExamGroup"
=======
>>>>>>> c63fa8b08df8801e5995f64305c11bfdfdffd663

import Notifications from "views/Notifications.js";
import UserProfile from "views/UserProfile";
// import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";

// import { Typography } from "@mui/material";


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
    path: "/Addexpense",
    name: "Add-Expense",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Addexpense />,
    layout: "/admin",
  },

  {
    path: "/Feesdetails",
    name: "Fees- Details",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-atom",
    component: <Feesdetails />,
    layout: "/admin",
  },

  {
    path: "/Component",
    name: "Component",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Component />,
    layout: "/admin",
  },

  {
    path: "/Tablepayment",
    name: "TABLE-PAYMENT",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Tablepayment />,
    layout: "/admin",
  },



  {
    path: "/Addschool",
    name: "ADD-SCHOOL",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Addschool />,
    layout: "/admin",
  },

  {
    path: "/StudentForm",
    name: "STUDENT-FORM",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentForm />,
    layout: "/admin",
  },


  {
    path: "/tables",
    name: "Table-List",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: <TableList />,
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
    name: "ADD-COMPLAIN",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Addcomplain />,
    layout: "/admin",
  },

  {
    path: "/Addvisitor",
    name: "ADD-VISITOR",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Addvisitor />,
    layout: "/admin",
  },




  {
    path: "/icons",
    name: "Icons",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: <Icons />,
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
    path: "/SubjectList",
    name: "SubjectList",
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
  {
    path: "/staff-id",
    name: "Staff Id",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StaffIdCard />,
    layout: "/admin",
  },
  {
<<<<<<< HEAD
    path: "/student-list",
    name: "Student List",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <StudentList />,
    layout: "/admin",
  },
  {
    path: "/admission-list",
    name: "Admission List",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <AdmissionList />,
    layout: "/admin",
  },
  {
    path: "/category",
    name: "Category",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <Category />,
    layout: "/admin",
  },
  {
    path: "/disable-reason",
    name: "Disable Reason",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <DisableReason />,
    layout: "/admin",
  },
  {
    path: "/fees-master",
    name: "Fees Master",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <FeesMaster />,
    layout: "/admin",
  },
  {
    path: "/expense-head",
    name: "Expense Head",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ExpenseHead />,
    layout: "/admin",
  },
  {
    path: "/exam-group",
    name: "Exam Group",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-atom",
    component: <ExamGroup />,
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
  {
=======
>>>>>>> c63fa8b08df8801e5995f64305c11bfdfdffd663
    path: "/notifications",
    name: "Notifications",
    rtlName: "إخطارات",
    icon: "tim-icons icon-bell-55",
    component: <Notifications />,
    layout: "/admin",
  },
<<<<<<< HEAD




=======
>>>>>>> c63fa8b08df8801e5995f64305c11bfdfdffd663
  {
    path: "/user-profile",
    name: "User Profile",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: <UserProfile />,
    layout: "/admin",
  },
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
