import "./Message.scss";

export const Message = () => {
    return (
        <div className="message" id="contact">
            <div className="messageTitle">Register Your Interest</div>
            <div className="formMessage">
                <div className="formInput">
                    <input type="text" placeholder="Name"/>
                    <input type="text" placeholder="Occupation"/>
                </div>
                <div className="formInput">
                    <input type="text" placeholder="Email Address"/>
                    <input type="text" placeholder="Contact No"/>
                </div>
                <div className="formInput">
                    <textarea placeholder="Your Message..."/>
                </div>
                <button type="submit" className="submitButton">
                    SUBMIT MESSAGE
                </button>
            </div>
        </div>
    );
};
