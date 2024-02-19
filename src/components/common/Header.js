import React, { useState } from "react";
import NavIcon from "./NavIcon";
import Nav from "./Nav";
import AnimateOnScrollComponent from "./AnimateOnScrollComponent";
import animationVariants from "../../animationVarients/animationVarients";

function Header() {
    const initialState = {
        isOpen: false,
        isCloseAnimationStarted: false,
    }
    const [state, setState] = useState(initialState);

    return (
        <header
            className={state.isOpen? "open": ""}>
            <div className="nav_wrapper">
                {
                    state.isOpen ?

                        <Nav
                            isCloseAnimationStarted={state.isCloseAnimationStarted}
                            startCloseAnimation={() => {
                                setState({
                                    ...state,
                                    isCloseAnimationStarted: true
                                })
                            }}
                            handleCloseAnimationEnd={() => {
                                setState({
                                    initialState
                                })
                            }}
                        />
                        :
                        null
                }

                <AnimateOnScrollComponent
                    variants={animationVariants.slide({
                        direction: "left",
                        delay: .2
                    })}>
                    <NavIcon
                        isOpen={state.isOpen}
                        toggleOpen={state.isOpen ?
                            () => {
                                setState({
                                    ...state,
                                    isCloseAnimationStarted: true
                                })
                            }
                            :
                            () => {
                                setState({
                                    isOpen: true,
                                    isCloseAnimationStarted: false
                                })
                            }
                        }
                    />
                </AnimateOnScrollComponent>

            </div>

        </header>
    );
}

export default Header

// const contacts = [
//     { type: 'github', icon: <GithubIcon /> },
//     { type: 'linkedin', icon: <LinkedInIcon /> },
//     // ... add more contacts if needed
// ];

/* <div className="container">
              <ul className="contacts">
                  {contacts.map((contact, index) => (
                      <li key={contact.type + index}>
                          {contact.icon}
                      </li>
                  ))}
              </ul>
          </div> */