export default function UserSidebarPanel(props){
    if(props.details.type==="admin"){
        return "Administratorius"
    }else if(props.details.type==="user"){
        return <>
        {props.details.name} {props.details.surname}
        </>
    }
}