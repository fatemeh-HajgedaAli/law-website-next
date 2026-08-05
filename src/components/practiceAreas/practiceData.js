import businessLaw from "@/asset/images/practiceArea/bussinessLaw.jpg";
import law2 from "@/asset/images/practiceArea/law2.jpg";
import lawForm from "@/asset/images/practiceArea/LawForm.jpg";

// icons
import { FaGavel, FaBalanceScale, FaUserShield } from "react-icons/fa";
import { GiHandcuffs } from "react-icons/gi";
// data
export const practiceAreas = [
  {
    id: 1,
    title: "دفاع کیفری",
    description:
      "ارائه خدمات تخصصی حقوقی و دفاع از حقوق موکلان در پرونده‌های کیفری",
    image: businessLaw,
    icon: FaUserShield,
    type: "icon",
  },

  {
    id: 2,
    title: "جرائم مواد مخدر",
    description: "مشاوره و دفاع تخصصی در پرونده‌های مرتبط با جرائم مواد مخدر",
    image: law2,
    icon: GiHandcuffs,
    type: "icon",
  },

  {
    id: 3,
    title: "دعاوی خانوادگی",
    description: "پیگیری پرونده‌های خانوادگی با رویکرد تخصصی و قانونی",
    image: lawForm,
    icon: FaBalanceScale,
    type: "icon",
  },

  {
    id: 4,
    title: "امور حقوقی",
    description: "ارائه راهکارهای حقوقی برای مسائل مختلف",
    image: law2,
    icon: FaGavel,
    type: "icon",
  },
];
