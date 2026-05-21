import {useContext} from "react";
import {SWContext} from "../utils/context.ts";
import {characters, defaultHero} from "../utils/constants.ts";

const Hero = () => {
    const {hero} = useContext(SWContext);

    return (
        <section className="float-left w-1/4 mt-2 mr-4">
            <img className="w-full shadow-hero" src={characters[hero || defaultHero].img} alt={characters[hero || defaultHero].name}/>
        </section>
    )
}

export default Hero;