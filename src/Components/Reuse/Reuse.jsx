const Reuse = ({title, subtitle}) => {
    return (
        <div className="text-center space-y-1">
            <h2 className="text-3xl font-semibold">{title}</h2>
            <p className="text-sm text-gray-500">{subtitle}</p>
        </div>
    );
};

export default Reuse;