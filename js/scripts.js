function giveUserSessionXp(m_user, m_session){ 
  m_user.experiencePoints += m_session.experiencePoints;
};

function calculateSessionXp(m_session){ 
  m_session.experiencePoints = 0;
  m_session.experiencePoints += m_session.bonus;
  m_session.experiencePoints += (m_session.averageSanescore * m_session.time);
};

let xPosition = 0.0;
let yPosition = 0.0;
var xVelocity = 0.0;
var yVelocity = 0.0;

var User = {};
User.averageBreathRate = 0;
User.averageHearRate = 0;
User.experiencePoints = 0;

var Session = {};
Session.time = 1;
Session.bonus = 2;
Session.breathRate = 0;
Session.heartRate = 0;
Session.experiencePoints = 0;
Session.averageSanescore = 3;
Session.averageVelocity = 0;
Session.neutralPercentage = 0;

calculateSessionXp(Session);
giveUserSessionXp(User, Session)
document.getElementById("demo").innerHTML = "Sanescore:" + User.experiencePoints;
