import { GoogleGenerativeAI } from "@google/generative-ai";

class openAPIService {
    openApiClient = null;
    model = null;
    constructor() {
        if (!this.openApiClient) {
            this.openApiClient = new GoogleGenerativeAI(
                JSON.parse(localStorage.getItem("_apiToken"))
            );
            this.model = this.openApiClient.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
        }
    }

    async getChatCompletion(content) {
        const result = await this.model.generateContent(content);
        const response = await result.response;
        return response.text();
    }
}

export default openAPIService;
