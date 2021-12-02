import "./Message.scss";
import React, { ChangeEvent, FormEvent, useState } from "react";
import * as emailjs from "emailjs-com";
import { CircularProgress } from "@mui/material";

export const Message = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSend, setIsSend] = useState(false);
    const [emailForm, setEmailForm] = useState({
        name: "",
        occupation: "",
        email: "",
        contact: "",
        message: ""
    });

    const HandleChange = (e: ChangeEvent<HTMLInputElement>) => {
        let {name, value} = e.target;
        setEmailForm({...emailForm, [name]: value});
    };

    const HandleChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>) => {
        let {name, value} = e.target;
        setEmailForm({...emailForm, [name]: value});
    };

    const HandleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        setIsLoading(true);
        emailjs.send(
            process.env.REACT_APP_EMAILJS_SERVICE_ID || "undefined",
            process.env.REACT_APP_EMAILJS_TEMPLATE_ID || "undefined",
            emailForm,
            process.env.REACT_APP_EMAILJS_USER_ID)
            .then((response) => {
                console.log("SUCCESS!", response.status, response.text);
            }, (error) => {
                console.log("FAILED...", error);
            })
            .finally(() => {
                setIsSend(true);
                setIsLoading(false);
            });
    };

    return (
        <div className="message" id="contact">
            <div className="messageTitle">Register Your Interest</div>
            <form className="formMessage" onSubmit={HandleSubmit}>
                <div className="formInput">
                    <input
                        required
                        type="text"
                        name="name"
                        placeholder="Name"
                        onChange={HandleChange}/>
                    <input
                        required
                        type="text"
                        name="occupation"
                        placeholder="Occupation"
                        onChange={HandleChange}/>
                </div>
                <div className="formInput">
                    <input
                        required
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        onChange={HandleChange}/>
                    <input
                        required
                        type="text"
                        name="contact"
                        placeholder="Contact No"
                        onChange={HandleChange}/>
                </div>
                <div className="formInput">
                    <textarea
                        required
                        name="message"
                        placeholder="Your Message..."
                        onChange={HandleChangeTextArea}/>
                </div>
                {isSend ?
                    (<button type="button"
                             className="submitButton"
                             disabled
                             onClick={() => console.log("You have sent a message already :)")}>
                        THANK YOU!
                    </button>) :
                    (<button type="submit" className="submitButton" disabled={isLoading}>
                        {isLoading ? <CircularProgress style={{color: "white"}} size="15px"/> : "SUBMIT MESSAGE"}
                    </button>)}
            </form>
        </div>
    );
};

