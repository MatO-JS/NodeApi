# Node API

> We use postman to send post request to the server instead of 'form' element.We can use postman to generate get put post or deleted requests.Istall postman from the web according to your os.

## Learning about parameters in postman

In the params tab in postman we have key value columns. If we enter for eg,
in the KEY tab 'keyword' and in VALUE tab 'balu', in the address bar of post man we get

> http://localhost:4000/users/new?keyword=balu

This is query params. The '?' symbol is query params after which"keyword = balu" can be accessed in the backend server.

Now if we console.log(req.query) inside app.get("users/all",....etc) we get the key value params in the console {keyword:"balu"}

If we add another key value pair in postman this get added to the postman url.This time "&" is used in the url.IF we wantt to add more queries & is used inthe url.

We can access queries using req.queries

## Dynamic Routing
