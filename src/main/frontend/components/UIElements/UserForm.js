import { useRef, useState } from 'react';
import classes from "./UserForm.module.css";

function UserForm(props) {
    const titleInputRef = useRef();
    const nameInputRef = useRef();
    const emailInputRef = useRef();
    const experienceInputRef = useRef();

    const [errorMessage, setErrorMessage] = useState("");

    function handlerSubmit(event) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current.value;
        const enteredName = nameInputRef.current.value;
        const enteredEmail = emailInputRef.current.value;
        const enteredExperience = experienceInputRef.current.value;

        if (enteredTitle.trim() === "" || enteredName.trim() === "" ||
            enteredEmail.trim() === "" || enteredExperience.trim() === "") {
            setErrorMessage("All fields must be filled.");
            return;
        } else if (!enteredEmail.includes("@")) {
            setErrorMessage("Please enter valid email address.");
            return;
        }

        const currentDate = new Date();
        const formattedDate = currentDate.toISOString().split("T")[0];

        const shareExpData = {
            title: enteredTitle,
            name: enteredName,
            email: enteredEmail,
            date: formattedDate,
            experience: enteredExperience
        };

        props.onShareExp(shareExpData);
    }

    return (
        <div className={classes.form_wrap}>
            <p className={classes.form_title}>Share</p>
            <form className={classes.form} onSubmit={handlerSubmit}>
                <div className={classes.control}>
                    <label htmlFor="title">Title</label>
                    <input type="text" required id="title" placeholder="Title" ref={titleInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="name">Name</label>
                    <input type="text" required id="name" placeholder="Full Name" ref={nameInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="email">Email</label>
                    <input type="email" required id="email" placeholder="Email Address" ref={emailInputRef}
                    />
                </div>
                <div className={classes.control}>
                    <label htmlFor="experience">Experience</label>
                    <textarea required id="experience" rows="7" placeholder="Enter Your Experience" ref={experienceInputRef}
                    />
                </div>
                {errorMessage && (<p className={classes.error_message}>{errorMessage}</p>)}
                <div className={classes.actions}>
                    <button type="submit">Share</button>
                </div>
            </form>
        </div>
    );
}

export default UserForm;