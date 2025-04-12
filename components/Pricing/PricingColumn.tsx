import clsx from "clsx";

interface Props {
    imageUrl: string;
    highlight?: boolean;
}

const PricingColumn: React.FC<Props> = ({ imageUrl, highlight }) => {
    return (
        <div className={clsx("w-full max-w-sm mx-auto bg-white rounded-xl border border-gray-200 lg:max-w-full", { "shadow-lg": highlight })}>
            <img 
                src={imageUrl} 
                alt="Pricing Option" 
                className="w-full h-auto object-cover rounded-lg"
            />
        </div>
    );
};

export default PricingColumn;
