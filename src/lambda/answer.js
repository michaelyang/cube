const ANSWER_CUBE_1 = process.env.ANSWER_CUBE_1;
const bcrypt = require('bcryptjs');
const headers = {
    'Access-Control-Allow-Headers': 'Content-Type',
};

exports.handler = async function(event, context, callback) {
    let answer = JSON.parse(event.body).answer;
    let output;
    if (answer && (await bcrypt.compare(answer, ANSWER_CUBE_1))) {
        output = getJsonOutput('200', 'Correct', `${ANSWER_CUBE_1}`);
    } else {
        output = getJsonOutput('400', 'Incorrect', '');
    }
    callback(null, {
        statusCode: '200',
        headers: headers,
        body: JSON.stringify(output),
    });
};

function getJsonOutput(status, message, answer) {
    return { status, message, answer };
}
