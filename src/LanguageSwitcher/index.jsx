import { Avatar, Dropdown, Typography } from "antd"
const Text = Typography.Text
// eslint-disable-next-line react/prop-types
function LanguageSwitcher({lang, languages, onClick}) {
    function getFlag(lang) {

        return <Avatar size={24} shape="circle" 
                src={`../public/flags/${lang}-16x16.png`}/>
    }
    // eslint-disable-next-line react/prop-types
    const menuItems = languages.map(item => ({
        key: item.lang,
        label: item.label,
        icon: getFlag(item.lang)
    }))
    // eslint-disable-next-line react/prop-types
    const selectedLang = languages.find(item => item.lang === lang)

    return (<div className="LanguageSwitcher">
        <Dropdown menu={{
                items: menuItems,
                onClick: ({key}) => onClick(key)
            }}>
            <div style={{cursor: "pointer"}}>
                <Avatar size={24} shape="circle" 
                    style={{
                        marginRight: 10, 
                        verticalAlign: "text-bottom",
                        border: '1px solid blue'
                    }}
                    src={`../public/flags/${lang}-16x16.png`} />
                <Text style={{
                    display: 'inline-block',
                    width: '3em',
                }}>{selectedLang.label}</Text>
            </div>
        </Dropdown>
    </div>)
}
export default LanguageSwitcher