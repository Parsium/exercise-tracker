import CloseButton from "./CloseButton";

const Modal = ({handleClose, children}) => {
    const showHideClassName = show ? "modal display-block": "modal display-none";

    return (
        <div className={showHideClassName}>
            <CloseButton onClick={handleClose}/>
            <section>{children}</section>
        </div>
    );
};

export default Modal;