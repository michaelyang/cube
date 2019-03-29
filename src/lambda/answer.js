const ANSWER_CUBE_1 = process.env.ANSWER_CUBE_1;
const bcrypt = require('bcryptjs');
const headers = {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async function(event, context, callback) {
    let answer = JSON.parse(event.body).answer;
    let statusCode;
    let output;
    if (answer && (await bcrypt.compare(answer, ANSWER_CUBE_1))) {
        statusCode = '200';
        output = getJsonOutput(statusCode, 'Correct', `${ANSWER_CUBE_1}`);
    } else {
        statusCode = '400';
        output = getJsonOutput(statusCode, 'Incorrect', '');
    }
    callback(null, {
        statusCode,
        headers: headers,
        body: JSON.stringify(output),
    });
};

function getJsonOutput(status, message, answer) {
    return { status, message, answer };
}
