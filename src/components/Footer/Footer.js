import { FaFacebook,FaPinterest } from "react-icons/fa";
import { AiOutlineTwitter, AiFillYoutube, AiOutlineGooglePlus,AiOutlineGithub } from "react-icons/ai";

export default function Footer() {
    return <div className="fixed-bottom w-100 bg-primary p-3 text-light text-center">
        <FaFacebook />
        <AiOutlineTwitter className="ml-2" />
        <AiFillYoutube className="ml-2" />
        <AiOutlineGooglePlus className="ml-2" />
        <FaPinterest className="ml-2" />
        <AiOutlineGithub className="ml-2" />
    </div>
}