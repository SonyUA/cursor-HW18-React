import contacts from "../contacts";
export const getContact = contacts.map((el, index) => {
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
