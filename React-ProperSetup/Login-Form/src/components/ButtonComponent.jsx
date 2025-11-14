import './ButtonComponent.css';

function ButtonComponent(props)
{
    return(
        <>
            <button className="website-button">{props.text}</button>
        </>
    );
}
export default ButtonComponent