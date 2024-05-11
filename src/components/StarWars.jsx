import React, {Component} from 'react';
import ImagesStarWars from "./ImagesStarWars.jsx";

class StarWars extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: false
        };
    }

    componentDidMount() {
        this.setState({
            isLoading: true
        });
        setTimeout(() => {
            this.setState({
                isLoading: false
            });
        }, 1000);
    }

    render() {
        if (this.state.isLoading) {
            return (
                <div className="spinner-border text-success"></div>
            );
        } else {
            return (
                <div style={{padding: "20px"}}>
                    <ImagesStarWars/>
                    <div style={{maxWidth: "1000px", margin: "auto"}}>
                        <h2 style={{color: "red"}}>Original trilogy: Episodes IV–VI</h2>
                        <p><span style={{color: "aqua"}}>Film U.S:</span> Star Wars <span style={{color: "aqua"}}>release date:</span> May
                            25, 1977 <span style={{color: "aqua"}}>Directed by Screenplay:</span> George
                            Lucas <span style={{color: "aqua"}}>by Story:</span> Gary
                            Kurtz [28][29]
                        </p>
                        <p><span style={{color: "aqua"}}>Film U.S: </span>The Empire Strikes Back <span
                            style={{color: "aqua"}}>release date: </span>May
                            21,
                            1980 <span style={{color: "aqua"}}>Directed by Screenplay:</span>Irvin Kershner
                            <span style={{color: "aqua"}}>by Story: </span>Leigh Brackett and Lawrence Kasdan George
                            Lucas Gary Kurtz</p>
                        <p><span style={{color: "aqua"}}>Film U.S: </span> Return of the Jedi<span
                            style={{color: "aqua"}}>release date: </span> May 25, 1983 <span style={{color: "aqua"}}>Directed by Screenplay:</span> Richard
                            Marquand
                            <span style={{color: "aqua"}}>by Story: </span> Lawrence Kasdan and George Lucas George
                            Lucas Howard Kazanjian</p>
                        <h2 style={{color: "red"}}>Prequel trilogy: Episodes I–III</h2>
                        <p><span style={{color: "aqua"}}>Film U.S: </span> The Phantom Menace<span
                            style={{color: "aqua"}}>release date: </span> May 19, 1999<span style={{color: "aqua"}}>Directed by Screenplay:</span> George
                            Lucas
                            <span style={{color: "aqua"}}>by Story: </span> George Lucas George Lucas Rick McCallum [34]
                        </p>
                        <p><span style={{color: "aqua"}}>Film U.S: </span> Attack of the Clones <span
                            style={{color: "aqua"}}>release date: </span> May
                            16, 2002<span style={{color: "aqua"}}>Directed by Screenplay:</span> George Lucas
                            <span style={{color: "aqua"}}>by Story: </span> George Lucas and Jonathan Hales George Lucas
                            Rick McCallum</p>
                        <h2 style={{color: "red"}}>Sequel trilogy: Episodes VII–IX</h2>
                        <p><span style={{color: "aqua"}}>Film U.S: </span> The Force Awakens<span style={{color: "aqua"}}>release date:</span> December
                            18, 2015 <span style={{color: "aqua"}}>Directed by Screenplay:</span>J. J. Abrams Lawrence
                            <span style={{color: "aqua"}}>by Story: </span> Kasdan & J. J. Abrams and Michael
                            Arndt Kathleen Kennedy, J. J. Abrams and Bryan Burk</p>
                        <p><span style={{color: "aqua"}}>Film U.S: </span> The Last Jedi <span style={{color: "aqua"}}>release date:</span> December
                            15, 2017 <span style={{color: "aqua"}}>Directed by Screenplay: </span>Rian Johnson
                            <span style={{color: "aqua"}}> by Story: </span>Kathleen Kennedy and Ram Bergman</p>
                        <p><span style={{color: "aqua"}}>Film U.S: </span>The Rise of Skywalker <span
                            style={{color: "aqua"}}> release date: </span> December 20, 2019 <span
                            style={{color: "aqua"}}> Directed by Screenplay:</span>J.
                            J.
                            Abrams Chris Terrio & J. J. Abrams Derek
                            <span style={{color: "aqua"}}>by Story: </span>Connolly & Colin Trevorrow and J. J. Abrams &
                            Chris Terrio Kathleen Kennedy, J. J. Abrams
                            and Michelle Rejwan</p>
                    </div>
                </div>
            );
        }
    }
}

export default StarWars;
