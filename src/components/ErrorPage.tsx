import Text from "./ui/Text.tsx";
import {SWContext} from "../utils/context.ts";
import {useContext, useEffect} from "react";

const ErrorPage = () => {
    const {changeHero} = useContext(SWContext);

    useEffect(() => changeHero(''), [changeHero] )

    return <Text className={'text-center'}>O-o-ops! Something went wrong</Text>
}

export default ErrorPage;