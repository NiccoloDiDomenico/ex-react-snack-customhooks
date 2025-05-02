import { useState, useEffect } from "react";

function useCustomPointer(cursor) {
    const [mouseCoordinates, setMouseCoordinates] = useState({ x: 0, y: 0 })

    useEffect(() => {
        const handleMouseMove = (e) => {
            console.log(e);

            setMouseCoordinates({
                x: e.clientX,
                y: e.clientY
            })
        };

        window.addEventListener('mousemove', handleMouseMove);

        return () => {
            window.removeEventListener('mousemove', handleMouseMove)
        };

    }, []);

    return (
        <div style={{
            position: "fixed",
            left: mouseCoordinates.x,
            top: mouseCoordinates.y,
            cursor: "none",
            transform: "translate(-50%, -50%)"
        }}>
            {cursor}
        </div>
    )
};

export default useCustomPointer