const ANSWER_CUBE_1 = process.env.ANSWER_CUBE_1;
const bcrypt = require('bcryptjs');

exports.handler = async function(event, context, callback) {
    const hashedAnswer = await bcrypt.hash('answer', 10);
    const answerMatch = await bcrypt.compare('answer', ANSWER_CUBE_1);
    if (answerMatch) {
        callback(null, {
            statusCode: 200,
            body: `${hashedAnswer}`,
        });
    } else {
        callback(`Oh no! An error. ${hashedAnswer}  ${ANSWER_CUBE_1}`);
    }
};
