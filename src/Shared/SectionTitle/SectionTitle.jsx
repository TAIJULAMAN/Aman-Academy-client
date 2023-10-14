// eslint-disable-next-line react/prop-types
const SectionTitle = ({heading,subHeading}) => {

    return (
        <div className="mx-auto text-center md:w-4/12 pt-8">
        <p className="text-yellow-950 mb-2">--- {subHeading} ---</p>
        <h3 className="text-3xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
    );
};

export default SectionTitle;

