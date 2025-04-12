import PricingColumn from "./PricingColumn";

import { images } from "@/data/pricing";

const Pricing: React.FC = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {images.map((image, index) => (
                <PricingColumn key={index} imageUrl={image.imageUrl} highlight={index === 1} />
            ))}
        </div>
    )
}

export default Pricing