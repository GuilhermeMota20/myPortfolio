import { List } from "@chakra-ui/react"
import { BsTelephone } from "react-icons/bs"
import { GoLocation } from "react-icons/go"
import { MdOutlineMailOutline } from "react-icons/md"
import ItemUserContact from "./ItemUserContact"

export default function ListUserContact() {
    return (
        <List spacing={3}>
            <ItemUserContact icon={GoLocation} legend='Brasil - São Paulo - SP' />
            <ItemUserContact icon={MdOutlineMailOutline} legend='motas6617@gmail.com' />
            <ItemUserContact icon={BsTelephone} legend='(11) 9 3033-9592' />
        </List>
    )
}