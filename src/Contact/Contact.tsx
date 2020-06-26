import React from "react";

const Contact = () => {
    React.useEffect(() => {
        document.title = "Contact Nathan";
    });
    return (
        <div>
            <h1>Contact me</h1>
            <div>social icons/links go here</div>
        </div>
    );
};

export default Contact;
