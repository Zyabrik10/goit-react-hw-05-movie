import PropTypes from "prop-types";
import css from "./SectionTitle.module.css";

/**
 * @param 
 * className:string -> ".selector1 .selector2 ..."
 * children: React nodes
 */

export default function SectionTitle({ className, children }) {
    return <h2 className={`${className || ""} ${css["title"]}`}>{children}</h2>;
}

SectionTitle.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};