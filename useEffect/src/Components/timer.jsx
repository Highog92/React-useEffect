import { useEffect, useState } from "react";

export const Timer = () => {

    const [time, setTime] = useState(0)

    let timer = setInterval(() => {

        useEffect(() => {
            let timer = setInterval(() => {

                setTime((prevTime) => prevTime + 1)
            }, 1000);

        })

console.log(time);
    }, 1000);

    return (
        <div>Timer: </div>
    )

}