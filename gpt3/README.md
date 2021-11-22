# HERE BE DRAGONS

## **USE AT YOUR OWN RISK AND COSTS**

### GPT-3 RoamJS SmartBlock

This is a super simple SmartBlock to make an API call to GPT-3's DaVinci Completion engine. When you invoke the SmartBlock, it uses the text in the current block as the prompt, and fills in the results. You probably want to prime it heavily to get good results (see https://beta.openai.com/docs/guides/completion/prompt-design for examples). You might want to branch these off into different SmartBlocks with various priming / temperature settings. Note that token_limit (or max_tokens) refers to how much text will be returned, but you will also be charged for the amount of text you send (i.e., what's in the block already).

Have fun, be safe!

Step 1: Get your API key from OpenAI - https://beta.openai.com/account/api-keys

Step 2: Create the SmartBlock and update the core settings variables

#SmartBlock GPT3

```
<%NOBLOCKOUTPUT%>
<%CURRENTBLOCKCONTENT:blockText%>
<%JA:```javascript
var token_limit = 10; //Change to whatever you would like, careful of costs!
var api_key = "Bearer REPLACE-WITH-API-KEY"; //Put your API key here
var temp_setting = 0.3; //Description and other settings here https://beta.openai.com/docs/api-reference/completions/create
$.ajax({
    url: "https://api.openai.com/v1/engines/davinci/completions",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Authorization", api_key);
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    async: false,
    data: JSON.stringify({"prompt": blockText, "max_tokens": token_limit, "temperature": temp_setting}),
    success: function (data) {
      results = JSON.stringify(data);
      output = JSON.parse(results).choices[0].text;
    },
    error: function(){
      alert("Well, that didn't work.");
    }
});```
%>
```

```
<%J:
```javascript
return output;```
%>
```

#### When you're done, it should look something like this:

![](https://github.com/abhayprasanna/abhayprasanna.github.io/blob/master/gpt3/GPT-3%20SmartBlock%20Screenshot.png?raw=true)

#### Example

![](https://github.com/abhayprasanna/abhayprasanna.github.io/blob/master/gpt3/gpt3.gif)
