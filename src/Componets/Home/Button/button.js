import './button.css'

const Button = ({buttonName}) => {
    return (
        <div className="button-container">
            <button className="find-button">{buttonName}</button>
        </div>
        
    )
}

export default Button