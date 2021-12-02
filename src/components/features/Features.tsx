import "./Features.scss";
import { FeatureDetails } from "./featureDetails/FeatureDetails";
import { Computer, Extension, Receipt, ShoppingCart, Star, Support } from "@mui/icons-material";

export const Features = () => {
    const lorem = "Proin in magna a ipsum viverra scelerisque eu\n" +
        "nec turp, Nunc vestibulum fringilla accumsan\n" +
        "Praesent arcu turpis";

    return (
        <div className="features" id="features">
            <div className="featureRow">
                <FeatureDetails
                    title="Responsive & Multipurpose"
                    subtitle="Desktop, Tablets & Phones"
                    description={lorem}
                    icon={<Computer/>}
                />
                <FeatureDetails
                    title="Easy Customization"
                    subtitle="One Click Demo Content Installation"
                    description={lorem}
                    icon={<Extension/>}
                />
                <FeatureDetails
                    title="Unlimited Features"
                    subtitle="Shortcodes, Typography & Different Layouts"
                    description={lorem}
                    icon={<Star/>}
                />
            </div>
            <div className="featureRow">
                <FeatureDetails
                    title="Clean & Modular Coding"
                    subtitle="100% Clean, Valid & Well-Commented Coding"
                    description={lorem}
                    icon={<Receipt/>}
                />
                <FeatureDetails
                    title="The Best E-Commerce Solution"
                    subtitle="WooCommerce Fully Integration"
                    description={lorem}
                    icon={<ShoppingCart/>}
                />
                <FeatureDetails
                    title="Awesome Friendly Support"
                    subtitle="Free Lifetime Support & Updates"
                    description={lorem}
                    icon={<Support/>}
                />
            </div>
        </div>
    );
};
