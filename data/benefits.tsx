import { FiBarChart2, FiBriefcase, FiDollarSign, FiLock, FiPieChart, FiShield, FiTarget, FiTrendingUp, FiUser, FiArrowUp, FiCalendar, FiTruck, FiRefreshCcw, FiBox, FiStar, FiHeart } from "react-icons/fi";
import { MdHeight } from "react-icons/md";
import { BsTreeFill } from "react-icons/bs";

import { IBenefit } from "@/types"

export const benefits: IBenefit[] = [
    {
        title: "Pick A Christmas Tree",
        description: "Easily find the perfect Christmas tree from the comfort of your home. Choose the ideal height, type, and style to match your holiday decor, and have it delivered hassle-free.",
        bullets: [
            {
                title: "Choose Your Perfect Height",
                description: "We offer Christmas trees ranging from 4 ft to 8 ft, so you can find the perfect size for your space.",
                icon: <MdHeight size={26} />
            },
            {
                title: "Select Your Ideal Tree Type",
                description: "Choose from Douglas Fir, Pine, or Spruce—each offering a unique look, scent, and needle style to match your holiday vision.",
                icon: <BsTreeFill size={26} />
            }
        ],
        imageSrc: "/images/how-it-works-choose-a-tree.svg"
    },
    {
        title: "Pick A Delivery Time & Date",
        description: "Select a delivery date and time that works for you, and we’ll bring your Christmas tree right to your front door—fresh and hassle-free.",
        bullets: [
            {
                title: "Easy Scheduling",
                description: "Simply choose your preferred delivery date and time during checkout.",
                icon: <FiCalendar size={26} />
            },
            {
                title: "Contact-Free Delivery",
                description: "We’ll deliver your tree safely to your doorstep, so you can focus on decorating.",
                icon: <FiTruck size={26} />
            },
            {
                title: "Flexible Rescheduling",
                description: "Plans changed? Easily update your delivery date and time to fit your schedule.",
                icon: <FiRefreshCcw size={26} />
            }
        ],
        imageSrc: "/images/how-it-works-pick-a-time-n-date.svg"
    },
    {
        title: "Decorate Your Christmas Tree",
        description: "Once your tree arrives, it's time to bring the holiday spirit to life! Gather your loved ones and start your Christmas tradition by decorating your tree with lights, ornaments, and cherished memories.",
        bullets: [
            {
                title: "Unbox the Holiday Magic",
                description: "Your fresh tree arrives ready to be the centerpiece of your holiday celebrations.",
                icon: <FiBox size={26} />
            },
            {
                title: "Make It Your Own",
                description: "Add lights, ornaments, and garlands to create a tree that reflects your holiday style.",
                icon: <FiStar size={26} />
            },
            {
                title: "Create Lasting Memories",
                description: "Decorating the tree is a special tradition—gather family and friends to enjoy the moment together.",
                icon: <FiHeart size={26} />
            }
        ],        
        imageSrc: "/images/how-it-works-decorate.svg"
    },
]