const ANSWER_CUBE_1 = process.env.ANSWER_CUBE_1;
const bcrypt = require('bcryptjs');

exports.handler = async function(event, context, callback) {
    const answerMatch = await bcrypt.compare('answer', ANSWER_CUBE_1);
    if (answerMatch) {
        callback(null, {
            statusCode: 200,
            body: `${ANSWER_CUBE_1}`,
        });
    } else {
        callback(`That ain't correct.`);
    }
};
