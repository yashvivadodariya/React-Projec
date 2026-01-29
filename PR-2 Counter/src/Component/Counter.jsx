import { useEffect, useState } from "react";
import Button from "./Button";

const Counter = () => {
    const [count, setCount] = useState(0);

    const handleINC = () => setCount(count + 1);
    const handleDEC = () => setCount(count - 1);

    useEffect(() => {
        console.log("Counter Update:", count);
    }, [count]);

    return (
        <div className="counter-container">
            <h2>Counter</h2>

            <div className="counter-value">{count}</div>

            <div className="button-group">
                <Button name="INC" count={count} handleClick={handleINC} />
                <Button name="DEC" count={count} handleClick={handleDEC} />
            </div>
        </div>
    );
};

export default Counter;
