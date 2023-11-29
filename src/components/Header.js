import { ReactComponent as GithubIcon } from "../icons/social/github.svg";
import { ReactComponent as LinkedInIcon } from "../icons/social/linkedIn.svg";
import React, { useState } from "react";
import NavIcon from "./NavIcon";
import Nav from "./Nav";

function Header() {
    const initialState = {
        isOpen: false,
        isCloseAnimationStarted: false,
    }
    const [state, setState] = useState(initialState);

    return (
        <header>
            <div className="nav_wrapper">
            {
                state.isOpen? 
                <Nav
                    isCloseAnimationStarted={state.isCloseAnimationStarted}
                    startCloseAnimation = {() => {
                        setState({
                            ...state,
                            isCloseAnimationStarted:true
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