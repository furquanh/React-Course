import FirstGoal from './FirstGoal'
import SecondGoal from './SecondGoal'
import ThirdGoal from './ThirdGoal'

import GoalItem from './GoalItem';

function GoalList() {
    return (
      <ul>
        <GoalItem title="Learn JavaScript" text="First step in web development journey should be to learn Javascript."/>
        <GoalItem title="practice what you learned" text="Watching JavaScript tutorials or reading books is good, but you need to practice aswell."/>
        <GoalItem title="Learn React!" text="Once you have learned Javascript, now is the time to learn React!"/>
      </ul>
    );
  }
  
  export default GoalList;