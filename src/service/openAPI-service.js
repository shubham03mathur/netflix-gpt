import { GoogleGenerativeAI } from "@google/generative-ai";

class openAPIService {
    openApiClient = null;
    model = null;
    constructor() {
        if (!this.openApiClient) {
            this.openApiClient = new GoogleGenerativeAI(
                localStorage.getItem("openApiKey")
            );
            this.model = this.openApiClient.getGenerativeModel({
                model: "gemini-1.5-flash",
            });
        }
    }

    async getChatCompletion(content) {
        console.log("Hit");
        const result = await this.model.generateContent(content);
        const response = await result.response;
        return response.text();
    }
}

export default openAPIService;
