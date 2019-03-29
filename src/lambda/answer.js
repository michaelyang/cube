const ANSWER_CUBE_1 = process.env.ANSWER_CUBE_1;
const bcrypt = require('bcryptjs');
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async function(event, context, callback) {
    let answer = JSON.parse(event.body).answer;
    if (answer) {
        const answerMatch = await bcrypt.compare(answer, ANSWER_CUBE_1);
        if (answerMatch) {
            callback(null, {
                statusCode: 200,
                headers,
                body: `${ANSWER_CUBE_1}`,
            });
        }
    } else {
        callback(`Please provide an answer.`, {
            headers,
        });
    }
};
