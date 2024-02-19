import { useEffect, useState, } from "react";
import emailjs from '@emailjs/browser';
import { VALID_EMAIL_REGEX } from '../../constants';
import { ReactComponent as LoadingIcon } from '../../icons/other/loading.svg';
import AnimateOnScrollComponent from "./AnimateOnScrollComponent";
import animationVarients from "../../animationVarients/animationVarients";
import HEADINGS from "../../data/headings";
import CONTENT from "../../data/content";
// function delay(t, val = "success") {
//     return new Promise(resolve => setTimeout(resolve, t, val));
// }



export default function Form({
    className = "",
    inputFields = CONTENT.contacts.form.inputFields
}) {
    const initialState = inputFields.reduce((acc, field) => {
        acc[field.name] = "";
        return acc;
    }, {});
    const [state, setState] = useState(initialState)
    const [submitState, setSubmitState] = useState({
        disabled: true,
        loading: false,
        success: false,
        error: false,
    })

    useEffect(() => {
        for (let value in state) {
            if (!state[value].length) {
                setSubmitState({
                    ...submitState,
                    disabled: true
                });
                return
            }
            if (state.email?.length && !VALID_EMAIL_REGEX.test(state.email) &&
                document.activeElement?.name !== "email") {
                setSubmitState({
                    error: "Please, provide a valid email",
                    disabled: true
                })
            } else {
                setSubmitState({
                    ...submitState,
                    error: null,
                    disabled: false
                });
            }
        }
    }, [state])

    useEffect(() => emailjs.init(process.env.REACT_APP_EMAILJS_PUBLIC_KEY), []);

    async function handleSubmit() {
        if (submitState.disabled) return;
        const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
        const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
        try {
            setSubmitState((prevState) => (
                {
                    ...prevState,
                    loading: true,
                    disabled: true
                }));
            await emailjs.send(serviceId, templateId, state)
            setSubmitState({ success: true })
        } catch (error) {
            setSubmitState((prevState) => (
                {
                    ...prevState,
                    error: "Something went wrong"
                }));
            console.log(error)
        }
        finally {
            setSubmitState((prevState) => (
                {
                    ...prevState,
                    loading: false
                }));

        }
    }

    const inputElements = inputFields.map(field => {
        // creating a dynamic element based on field type (input or textarea)
        const CustomEl = field.type;
        return (
            <CustomEl
                key={field.name}
                name={field.name}
                placeholder={field.placeholder}
                value={state[field.name]}
                onChange={(e) => {
                    setState({
                        ...state,
                        [field.name]: e.target.value
                    });
                }}
            />
        );
    });


    return (
        <div
            className="form_wrapper flex_box_center_center">
            {
                submitState.success ?
                    <AnimateOnScrollComponent
                        variants={animationVarients.slide({ direction: "up" })}
                        className="success_msg flex_box_center_center flex_box_col">
                        {CONTENT.contacts.form.success}
                    </AnimateOnScrollComponent>
                    :

                    <div>
                        <AnimateOnScrollComponent
                            variants={animationVarients.slide({ direction: "up" })}>
                            {HEADINGS.contacts.form}
                        </AnimateOnScrollComponent>
                        <AnimateOnScrollComponent
                            variants={animationVarients.fadeIn({ delay: .6 })}>
                        <form
                            className={`"flex_box_space_between" ${className || ""}`}
                            onSubmit={handleSubmit}>
                            {/* input for submit on enter
                            click */}
                            <input
                                style={{ display: "none" }}
                                type="submit"
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit()
                                }} />
                            {inputElements}
                            <div
                                className="error_msg_wrapper">
                                {
                                    submitState.error ?
                                        <p>*{submitState.error}</p>
                                        : null
                                }
                            </div>

                            <button
                                className={`${submitState.loading}? "loading": "" flex_box_center_center`}
                                disabled={submitState.disabled}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleSubmit()
                                }}>
                                {submitState.loading ? (
                                    <>
                                        <LoadingIcon />
                                        Sending
                                    </>
                                ) : (
                                    "Send"
                                )}
                            </button>
                        </form>
                        </AnimateOnScrollComponent>
                    </div>
            }
        </div>
    )
}