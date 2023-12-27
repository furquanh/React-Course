function GoalItem(props) {

    return (
        <li>
            <article>
            <h2>{props.title}</h2>
            <p>{props.text}</p>
            </article>
        </li>

    );

};

export default GoalItem