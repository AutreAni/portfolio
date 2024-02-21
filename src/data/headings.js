const HEADINGS = {
    home: [
        <span><i>Welcome,</i></span> ,
        <span><i>I'm</i> <b>Ani</b>  </span>,
        <span><b> Karapetyan</b> </span>,
        <span><b>Frontend Developer</b></span>,
    ],
    about: {
        profile: (<h2 className = "title_vertical"><span>About</span> Me</h2>),
        extras: <h3>Some Extras</h3>
    },
    work: {
        hero: (
        <h2
        className = "title_vertical">
        <span>Work</span>
        </h2>),

        tabsArr: ["Benefits", "Fundraising"]

    },
    contacts: {
        info: (
            <h4>
                Let's creat <br />something great together
            </h4>
        ),
        form: (
            <h4>
                Drop me a line
            </h4>
        )
    }

}
export default HEADINGS;

