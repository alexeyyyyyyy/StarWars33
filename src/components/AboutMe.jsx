import React, {Component} from 'react';
import LogoAboutMe from "./LogoAboutMe.jsx";

class AboutMe extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading:false
        }
    }
    componentDidMount() {
        this.setState({
            isLoading:true
            }
        )
        setTimeout(()=> {
            this.setState({
                isLoading:false
            })
        },1000);
    }


    render() {
        if(this.state.isLoading){
            return (
                <div className="spinner-border text-success"></div>
            )
        }else {
        return (
            <div>
                <LogoAboutMe/>
                <p>Luke Skywalker is a fictional character and the protagonist of the original film trilogy of the Star
                    Wars franchise created by George Lucas. Portrayed by Mark Hamill, Luke first appeared in Star Wars
                    (1977),[w] and he returned in The Empire Strikes Back (1980) and Return of the Jedi (1983). Over
                    three decades later, Hamill returned as Luke in the Star Wars sequel trilogy, with a cameo in The
                    Force Awakens (2015) before playing a major role in The Last Jedi (2017) and The Rise of Skywalker
                    (2019). He later played a digitally de-aged version of the character in the Disney+ series The
                    Mandalorian, appearing in the second-season finale, which premiered in 2020, and The Book of Boba
                    Fett, in the sixth episode, released in 2022.
                </p>
                <p>
                    Originally a farmer on Tatooine living with his uncle and aunt, Luke becomes a pivotal figure in
                    the
                    Rebel Alliance's struggle against the Galactic Empire. The son of fallen Jedi Knight Anakin
                    Skywalker (turned Sith Lord Darth Vader) and Padmé Amidala, Luke is the twin brother of
                    Rebellion
                    leader Princess Leia and eventual brother-in-law of the smuggler Han Solo. Luke trains to be a
                    Jedi
                    under Jedi Masters Obi-Wan Kenobi and Yoda and rebuilds the Jedi Order. He later trains his
                    nephew
                    Ben Solo and mentors Rey. Though Luke dies at the end of The Last Jedi, he returns as a Force
                    spirit
                    in The Rise of Skywalker, encouraging Rey to face her grandfather, the resurrected Emperor
                    Palpatine. At the end of the film, the spirits of Luke and Leia give Rey their blessing to adopt
                    the
                    Skywalker surname and continue their family's legacy.
                </p>
                <p>
                    The character also briefly appears in the prequel film Episode III – Revenge of the Sith as an
                    infant, portrayed by Aidan Barton, and in the Disney+ series Obi-Wan Kenobi as a child,
                    portrayed by
                    Grant Feely. In the de-canonized Star Wars Expanded Universe (renamed Legends), Luke is a main
                    character in many stories set after Return of the Jedi, which depict him as a powerful Jedi
                    Master,
                    the husband of Mara Jade, father of Ben Skywalker, and maternal uncle of Jaina, Jacen and Anakin
                    Solo.
                </p>
            </div>
        );
        }
    }
}

export default AboutMe;