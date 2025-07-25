const Compass = ({ angle }) => {
    return (
        <div
            className="compass"
            style={
                {
                    '--angle': `${(angle + 180) % 360}deg`,
                } as React.CSSProperties
            }
        >
            <div className="compass__letter compass__letter_n">n</div>
            <div className="compass__letter compass__letter_e">e</div>
            <div className="compass__letter compass__letter_s">s</div>
            <div className="compass__letter compass__letter_w">w</div>
            <div className="compass__arrow"></div>
        </div>
    );
};

export default Compass;
