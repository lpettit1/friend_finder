var friends = require("../data/friends");

module.exports = function (app) {
    // return all friends found in friends.js as JSON
    app.get("/app/data/friends.js", function (req, res) {
        res.json(friends);
    });

    app.post("/app/data/friends.js", function (req, res) {
        console.log(req.body.scores);

        var user = req.body;

        for (var i = 0; i < user.scores.length; i++) {
            user.scores[i] = parseInt(user.scores[i]);
        }

        var bestFriendIndex = 0;
        var minimumDifference = 40;
        // in this for-loop, start off with a zero difference and compare the user and the ith friend scores, one set at a time
        //  whatever the difference is, add to the total difference
        for (var i = 0; i < friends.length; i++) {
            var totalDifference = 0;
            for (var j = 0; j < friends[i].scores.length; j++) {
                var difference = Math.abs(user.scores[j] - friends[i].scores[j]);
                totalDifference += difference;
            }
            //if new minimum, change bestFriendIndex  then set to new for iteration comparison.
            if (totalDifference < minimumDifference) {
                bestFriendIndex = i;
                minimumDifference = totalDifference;
            }
        }
        //after match, add to array
        friends.push(user);
        //send back to browser
        res.json(friends[bestFriendIndex]);
    });


};