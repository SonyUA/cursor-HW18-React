import { useEffect, useState } from "react";
import contacts from "./contacts";
import "./contacts.css";
import random_bg_color from "./randomColor";
const Contact = () => {
    let getFilter;
    let getContact;
    useEffect(() => {
        random_bg_color();
    });
    getContact = contacts.map((el, index) => {
        return (
            <div className="contactBox__inner" key={`box ${index}`}>
                <span className="contactBox__name" key={`${el.firstName}${index.toString()}`}>
                    {el.firstName}
                </span>{" "}
                <span className="contactBox__lastName" key={`${el.lastName}${index.toString()}`}>
                    {el.lastName}
                </span>
                <br></br>
                <span className="contactBox__phone" key={`${el.phone}${index.toString()}`}>
                    {el.phone}
                </span>
                <span className="contactBox__phone-color">&#128379;</span>
                <div className="circle">
                    <span className="contactBox__gender" key={`${el.gender}${index.toString()}`}>
                        {el.gender}
                    </span>
                </div>
            </div>
        );
    });
    let [filter, setFilter] = useState(getContact);
    function search(event) {
        if (event.target.value !== "") {
            getFilter = contacts.map(function (el, index) {
                let letter = event.target.value.toLowerCase();
                if (el.lastName.toLowerCase().includes(letter) || el.firstName.toLowerCase().includes(letter) || el.phone.toLowerCase().includes(letter)) {
                    return (
                        <div className="contactBox__inner" key={`box ${index}`}>
                            <span className="contactBox__name" key={`${el.firstName}${index.toString()}`}>
                                {el.firstName}
                            </span>{" "}
                            <span className="contactBox__lastName" key={`${el.lastName}${index.toString()}`}>
                                {el.lastName}
                            </span>
                            <br></br>
                            <span className="contactBox__phone" key={`${el.phone}${index.toString()}`}>
                                {el.phone}
                            </span>
                            <span className="contactBox__phone-color">&#128379;</span>
                            <div className="circle">
                                <span className="contactBox__gender" key={`${el.gender}${index.toString()}`}>
                                    {el.gender}
                                </span>
                            </div>
                        </div>
                    );
                }
                return getFilter;
            });

            setFilter((filter = getFilter));
        } else {
            setFilter((filter = getContact));
        }
    }

    return (
        <div className="contactBox">
            <input className="contactBox__input" key={"input"} type="text" onInput={search} placeholder="SEARCH &#128270;" />
            <h3>CONTACTS</h3>
            {filter}
        </div>
    );
};
export default Contact;
