
const BtnSuccess = ({value, ...props}) => {
    return (
        <button className="button is-success is-outlined" {...props}>{value}</button>
    );
};

export default BtnSuccess;