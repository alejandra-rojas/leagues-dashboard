import MatchSingleEntryPublic from "./MatchSingleEntryPublic";

function MatchesReportsPublic({ matchesData, midway_point }) {
  //console.log(matchesData);

  //Sorting matches by match data and isFinished condition
  const sortedEventMatchesData = matchesData
    ?.filter((match) => match.match_date)
    .slice()
    .sort((a, b) => {
      const conditionA = a.isfinished ? 0 : a.withdrawal ? 2 : 1;
      const conditionB = b.isfinished ? 0 : b.withdrawal ? 2 : 1;

      if (conditionA !== conditionB) {
        return conditionA - conditionB;
      }

      return new Date(a.match_date) - new Date(b.match_date);
    });

  return (
    <section id="match-reports-table">
      <ul>
        <li className="md-header">
          <span>Team 1</span>
          <span>VS</span>
          <span>Team 2</span>

          {/*<div>P1 sets</div>
          <div>P2 sets</div> */}
          <span>Score</span>
          <span>F</span>
          <span>BH</span>
        </li>
        {sortedEventMatchesData?.map((match, index) => (
          <MatchSingleEntryPublic
            index={index}
            key={match.match_id}
            match={match}
            midway_point={midway_point}
          />
        ))}
      </ul>
    </section>
  );
}

export default MatchesReportsPublic;
