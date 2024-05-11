import React, {Component} from 'react';
import "./Hero.jsx"
import Hero from "./Hero.jsx";
import DreamTeam from "./DreamTeam.jsx";
class Home extends Component {
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
                <main className="clearfix">
                  <Hero/>
                   <DreamTeam/>
                    <p className="farGalaxy">It is a period of civil war.
                        Rebel spaceships, striking
                        from a hidden base, have won
                        their first victory against
                        the evil Galactic Empire.

                        During the battle, Rebel
                        spies managed to steal secret
                        plans to the Empire's
                        ultimate weapon, the DEATH
                        STAR, an armored space
                        station with enough power
                        to destroy an entire planet.

                        Pursued by the Empire's
                        sinister agents, Princess
                        Leia races home aboard her
                        starship, custodian of the
                        stolen plans that can save her
                        people and restore
                        freedom to the galaxy....</p>
                </main>
        );
            }
    }
}

export default Home;