import { Avatar, Dropdown } from "antd"

function LanguageSwitcher ({lang},{languages}){

    function getFlag(lang){
        // input flags
        return(<div>
            <Dropdown ></Dropdown>
                <Avatar></Avatar>
        </div>

        ) 
        

    }
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang)
    }))

    return(

    )

}export default LanguageSwitcher