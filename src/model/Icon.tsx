
import { IconType } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch, IoMdAddCircleOutline } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { MdEdit } from "react-icons/md";
import { PiSuitcase } from "react-icons/pi";
import { RiDeleteBinLine } from "react-icons/ri";


interface Iicons {
  vacant: IconType;
  company: IconType;
  edit: IconType;
  delete: IconType;
  add: IconType;
  search: IconType;
  arrowBack: IconType;
  arrowForward: IconType;
}


export const icons: Iicons = {
  vacant: PiSuitcase,
  company: LuBuilding2,
  edit: MdEdit,
  delete: RiDeleteBinLine,
  add: IoMdAddCircleOutline,
  search: IoIosSearch,
  arrowBack: IoIosArrowBack,
  arrowForward: IoIosArrowForward,
}