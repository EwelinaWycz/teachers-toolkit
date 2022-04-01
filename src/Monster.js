const Monster = ({ text }) => {
    return (
        <div className="monster">
            {text && <div className="speech-bubble">{text}</div>}
            <img src="/purple-monster.svg" />
        </div>

    );
}

export default Monster;