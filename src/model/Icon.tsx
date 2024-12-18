
import { IconType } from "react-icons";
import { IoIosArrowBack, IoIosArrowForward, IoIosSearch, IoMdAddCircleOutline, IoMdClose } from "react-icons/io";
import { LuBuilding2 } from "react-icons/lu";
import { MdOutlineEdit } from "react-icons/md";
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
  close: IconType,
}


export const icons: Iicons = {
  vacant: PiSuitcase,
  company: LuBuilding2,
  edit: MdOutlineEdit,
  delete: RiDeleteBinLine,
  add: IoMdAddCircleOutline,
  search: IoIosSearch,
  arrowBack: IoIosArrowBack,
  arrowForward: IoIosArrowForward,
  close: IoMdClose,
}