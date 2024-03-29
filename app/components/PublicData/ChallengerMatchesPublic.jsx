import { CheckIcon } from "@heroicons/react/24/outline";
import { XMarkIcon } from "@heroicons/react/24/outline";

function ChallengerMatchesPublic({ registeredTeams, challengerMatches }) {
  //console.log("Participant team objects:", registeredTeams);

  const teamIds = registeredTeams
    ? registeredTeams.map((team) => team.team_id)
    : [];
  // console.log("Event participant team ids:", teamIds);
  // console.log("Challenger matches:", challengerMatches);

  let filteredChallengerMatches = challengerMatches.filter((match) =>
    teamIds.some((id) => id === match.team1_id || id === match.team2_id)
  );

  return (
    <>
      {filteredChallengerMatches.length > 0 && (
        <div id="challenger-matches">
          <div className="standings-report">
            {/* <h6>Challenger matches</h6> */}
            <section id="challengers-reports-table">
              <ul>
                <li className="md-header">
                  <span>CHALLENGER MATCHES</span>
                  <span>vs</span>
                  <span>T2</span>
                  {/* <span>Match Date</span> */}
                  <span>Score</span>
                  <span>F</span>

                  <span>T1B</span>
                  <span>T2B</span>
                </li>
                {filteredChallengerMatches?.map((match, index) => (
                  <>
                    <li
                      className={`${match.withdrawal ? "withdrawn" : ""} ${
                        !match.withdrawal
                          ? index % 2 === 0
                            ? "even-row"
                            : "odd-row"
                          : ""
                      }`}
                    >
                      <div
                        className={`${
                          match.winner_id === match.team1_id ? "font-bold" : ""
                        } ${teamIds.includes(match.team1_id) ? "" : "italic"}`}
                      >
                        {match.team1.player1.firstname} &{" "}
                        {match.team1.player2.firstname}
                      </div>
                      <div>vs</div>
                      <div
                        className={`${
                          match.winner_id === match.team2_id ? "font-bold" : ""
                        } ${teamIds.includes(match.team2_id) ? "" : "italic"}`}
                      >
                        {match.team2.player1.firstname} &{" "}
                        {match.team2.player2.firstname}
                      </div>

                      {/* <div>
                        {match.match_date === null ? "" : match.match_date}
                      </div> */}

                      <div>
                        {match.winner_score.trim() === "1"
                          ? ""
                          : match.winner_score}
                      </div>
                      <div>
                        {match.isfinished ? <CheckIcon width={20} /> : ""}
                        {!match.isfinished && match.match_date && "U"}
                      </div>

                      <div>{match.team1_bonus}</div>
                      <div>{match.team2_bonus}</div>
                    </li>
                  </>
                ))}
              </ul>
            </section>
          </div>
        </div>
      )}
    </>
  );
}

export default ChallengerMatchesPublic;
