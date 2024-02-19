import importAll from "../../helpers/importAll";


const PROJECTS = {
    benefits: {      
        pages: [
            {
                name: "overview", 
                title: "Startup Benefits",
                about:
                    "Startup benefits is a platform that facilitates access to top-notch digital products at competitive prices, lowering the cost of starting a venture and extending the runway.  It serves as a valuable resource for Accelerators, VCs, Incubators, and Co-working spaces, enriching their support for startups through a curated list of beneficial offerings.",
                year: "2020-2021",
                role: "Product Owner, Frontend developer",
                techstack: `Throughout this project I utilized <strong>Create React App</strong>, a powerful development tool to provide an efficient setup.<strong> Redux </strong>is employed for state management, ensuring a seamless flow of data throughout the application.

                <strong>SCSS</strong> is adopted for styling, offering a modular and maintainable approach to design. <strong>React Router</strong> is integrated for effective navigation management, providing a smooth and intuitive user experience.
                
                <strong>REST API</strong> serves as the backbone for communication with the back-end, facilitating efficient data transfer. The integration of the <strong>Airtable API</strong> enhances data retrieval, ensuring organized and structured data handling within the application.
                
                Additionally, the <strong>Stripe API </strong>is implemented to handle secure payment transactions, adding a reliable and secure layer to the application's functionality.`
            },
            {
                name: "home",
               
                images: importAll(
                    require.context(
                        "../../images/benefits/Home",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                ),
            },
            {
                name: "product",
                images:   importAll(
                    require.context(
                        `../../images/benefits/Product`,
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                )
            },
            {
                name: "dashboard",
                slides: importAll(
                    require.context(
                        "../../images/benefits/Slider",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                ),
            }

        ]
    },
    fundraising: {
        pages: [
            {
                name: "overview", 
                title: "Startup Fundraising",
                about:
                    "Startup Fundraising is a platform that helps founders to organize their fundraising efforts. With a vast database of over 46,000 institutional investors and an advanced matching system, it simplifies the process of finding investors. The platform allows founders to filter and match their startup profiles with potential investors, aiding in the efficient identification of suitable investment targets.",
                year: "2022-2023",
                role: "Product Owner, Frontend developer",
                techstack: `Throughout this project I utilized <strong>Create React App</strong>, a powerful development tool to provide an efficient setup.<strong> Redux </strong>is employed for state management, ensuring a seamless flow of data throughout the application.

                <strong>SCSS</strong> is adopted for styling, offering a modular and maintainable approach to design. <strong>React Router</strong> is integrated for effective navigation management, providing a smooth and intuitive user experience.

                This project utilizes LinkedIn OAuth 2.0 and Google OAuth 2.0, supplemented by custom <strong>authentication</strong> methods. User authorization is executed according to the purchased package type.
                
                <strong>REST API</strong> serves as the backbone for communication with the back-end, facilitating efficient data transfer. The integration of the <strong>Airtable API</strong> enhances data retrieval, ensuring organized and structured data handling within the application.`
            },
            {
                name: "home",
                images: importAll(
                    require.context(
                        "../../images/fundraising/Home",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                ),
            },
            {
                name: "product",
                images:   importAll(
                    require.context(
                        `../../images/fundraising/Product`,
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                )
            },
            {
                name: "dashboard",
                slides: importAll(
                    require.context(
                        "../../images/fundraising/Slider",
                        false,
                        /\.(png|jpe?g|svg)$/
                    )
                ),
            }

        ]
    },
};

export default PROJECTS;
