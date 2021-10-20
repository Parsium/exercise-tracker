const CloseButton = ({onClick}) => {
    return (
        <button type="button" className="close" aria-label="close" onClick={onClick}>
            <svg width="20" height="20" viewBox="0 0 44 44" aria-hidden="true" focusable="false">
            <path d="M0.549989 4.44999L4.44999 0.549988L43.45 39.55L39.55 43.45L0.549989 4.44999Z" />
            <path d="M39.55 0.549988L43.45 4.44999L4.44999 43.45L0.549988 39.55L39.55 0.549988Z" />
            </svg>
        </button>
    );
    
};

export default CloseButton;