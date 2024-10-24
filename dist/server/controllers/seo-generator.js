"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const generative_ai_1 = require("@google/generative-ai");
exports.default = ({ strapi }) => ({
    async index(ctx) {
        var _a;
        const { title, content } = ctx.request.body;
        const generateResponse = async () => {
            const genAI = new generative_ai_1.GoogleGenerativeAI(process.env.GOOGLEGENERATEAIAPIKEY);
            const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
            const titleData = title ? `title = ${title} and ` : '';
            const result = await model.generateContent(`generate seo metadata title 50 character long, Description 160 character long and keywords from ${titleData} content = ${content}. return only as json.`);
            return result;
        };
        const result = await generateResponse();
        const response = {
            result: (_a = result === null || result === void 0 ? void 0 : result.response) === null || _a === void 0 ? void 0 : _a.text()
        };
        ctx.send(JSON.stringify(response));
    },
});
function removeHTMLTags(content) {
    throw new Error('Function not implemented.');
}
