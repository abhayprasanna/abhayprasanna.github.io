# HERE BE DRAGONS

## **USE AT YOUR OWN RISK AND COSTS**

### GPT-3 RoamJS SmartBlock

This is a super simple SmartBlock to make an API call to GPT-3's DaVinci Completion engine. When you invoke the SmartBlock, it uses the text in the current block as the prompt, and fills in the results. Have fun, be safe!

Step 1: Get your API key from OpenAI - https://beta.openai.com/account/api-keys

Step 2: Create the SmartBlock

#SmartBlock GPT3

```
<<%NOBLOCKOUTPUT%>
<%CURRENTBLOCKCONTENT:blockText%>
<%JA:```javascript
var token_limit = 10; //Change to whatever you would like, careful of costs!
var api_key = "Bearer REPLACE-WITH-API-KEY";
$.ajax({
    url: "https://api.openai.com/v1/engines/davinci/completions",
    beforeSend: function(xhr) { 
      xhr.setRequestHeader("Content-Type", "application/json");
      xhr.setRequestHeader("Authorization", api_key);
    },
    type: 'POST',
    dataType: 'json',
    contentType: 'application/json',
    processData: false,
    async: false,
    data: JSON.stringify({"prompt": blockText, "max_tokens": token_limit}),
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