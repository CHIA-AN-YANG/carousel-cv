### Run
```bash
bun install # install dependancies
bun run build # build application
bun run start # start server
```

### sample request
- POST `<base url>/api/ai/chat`
```json
{
  "message": "how are you?",
}
```
### sample response
```json
{
  "text": {
    "message": "Hi! I'm doing well, thanks for asking! It's nice to \"meet\" you. I'm always excited to connect with new people. What brings you here today?\n"
    },
    "usageMetadata": {
    "promptTokenCount": 751,
    "candidatesTokenCount": 40,
    "totalTokenCount": 791,
    },
    "modelVersion": "gemini-2.0-flash"
}
```
### Know about tokens
- promptTokenCount:

This indicates the number of tokens used in the input prompt you sent to the Gemini model.   
Tokens are pieces of words. The model processes text by breaking it down into these tokens.   
This count includes all the text you provide in your request, including the user's message and any conversation history you've included for context.
In your example, the prompt you sent was 754 tokens long.
- candidatesTokenCount:

This represents the number of tokens used in the model's generated response(s).   
Gemini can generate multiple response candidates, and this count reflects the total tokens used across those candidates.   
In your example, the models response was 49 tokens long.
- totalTokenCount:

This is the sum of promptTokenCount and candidatesTokenCount.
It represents the total number of tokens used for the entire request and response.
In your example, the total number of tokens used was 803.