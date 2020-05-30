---
title: "💟 Login React & CSS"
date: "2020-05-29"
---

👋 🚀

![Image of Yaktocat](https://cl.ly/1fad7275ef5d/download/Screen%252520Shot%2525202020-05-29%252520at%2525209.36.56%252520PM.png)

## Building a Login Form with React & CSS and NEXTJS.

Today I'm bringing you a practical example on how to to create a login form using HTML & CSS. This is a very simple project if you already know **HTML & CSS** it will help you practice more.

Today we will create this <a href="https://login-form-one.now.sh">Login Form </a> that you see right here.

This is form that has an input of type text and another input of type password. and underneath we have a button. this form was create using only **CSS** and now with plus we will add an animation using **Framer Motion** what does that do?

So everything we load the page this will slide to the middle and to center the form we will also use CSS.

So if you're interested and want to practice more your skills.

Today we will create everything from scratch!

Alright, let's get started!

We'll be using NEXT JS to build this form. But feel free to use any enviroment you like.

I'll be using VSCode editor but feel free to use any code editor.

The fist thing I'll be doing is create a new file called Login.js but you can call anything you want.

Another file will be for the styles. and this will be called in NEXTJS global.css which is the same as styles.css

Our first page will look like this in code.

```
import Head from "next/head";

export default function Home() {
  return (
    <div>Log in</div>
  );
}

```

Okay! The first thing we need to do is create a **form** element, this form will contain everything we need as like an input, titles etc. this will be our container for our log-in form

first we need a title.

```
<form>
    <h1>Log in</h1>
</form>
```

then we will need a input of type text after that we will need a property placeholder to show a text per screen that will be called **Username**

After this we will need another input with type password and what this do is hide text when we type in. the placeholder will be **Password**

and finally we will need a **button**

Some developers use **labels** but in this case we won't be using labels so we can have more space.

Lastly we will give our parent element a className with the name container which would be our body.

<code>
.
    <div>
      <form>
        <h1>Log in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log in</button>
      </form>
    </div>
</code>

```
export default function Home() {
  return (
    <div>
      <form action="" className="form-container">
        <h1 className="form-title">Log in</h1>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button>Log in </button>
      </form>
    </div>
  );
}
```

and with this we already have our structure. It's not looking pretty fancy right, but we'll go into it now.

Remember to save and check your progress as you go along!

**Command + S** to save.

To start making it pretty, we'll be using **CSS**

Let's dig into it.
in our **form** element we will have a **className** called **form-container** you can name it anything you want but i'll suggest you to name it like me for now so you don't get lost in the process. Later on when you finish this excersise you can start naming things on your own.

Alright.

for the title we will have a **className** called **form-container**

for the inputs we won't do anything because we can access these from the form reference, but we put classnames on the them.

In our form you notice we have an **action** property and that will be empty for now which that everything you submit the form it will just refresh the page.

Alright now we have our basic structure this quick!

the first thing I would like to do is give our body, html a height of 100%.

Remember to save your progress to see if it's working.

```
html,
body {
height: 100%;
}
```

Second let's add our body a padding and margin of 0

```
html,
body {
  padding: 0;
  margin: 0;
}
```

Make sure you're using the right className and make sure to import your styles as well.

Alright. with this we can get started.

## Developer Tools

There's a very useful tool when you start designing. It's called developer tools
If you're using chrome for example me if I right click on my website and then I go to Inspect, this will open many tabs, those tabs allow us to test parts of our application or a website like the one we are doing now. In the elements tab if I hover over my div element I can see the height that we just set to our form-container div.

![Image of Yaktocat](https://cl.ly/178e6d8a94da/download/Screen%252520Shot%2525202020-05-29%252520at%2525204.55.47%252520PM.png)

If we use 100% height our element will only take a small portion of our page, and that's not what we want

For now we will leave the inspector tool alone because it will be very helpful to us later on!

So now let's continue styling our form.

Next let's add our background color

```
html,
body {
height: 100%;
}
```

Let's also add a nice font!

```
body {
padding: 0;
margin: 0;
background-color: #230c3e;
}
```

![Image of Yaktocat](https://cl.ly/cd019be502f9/download/Screen%252520Shot%2525202020-05-29%252520at%2525205.47.40%252520PM.png)

If we save it, our website should look like this by now!

Alright.

Next We will align our our element using **Flexbox**

We will align our element vertical and horizontaly.

for this we will add

```

display: flex;

```

With this we will be able to use **flexbox**

we will add

```

flex-direction: row;
flew-wrap: wrap;
justify-content: center;
align-items: center;

```

Very good! Now our element should right in the center of our page.

Remember to refresh your page!

It's aligned in the center because we are using flexbox but our form haven't been styled yet but that's what we'll do now.

Alight let's continue with the form-container.
First we will set a height and width to specify to how much space our input elements should take.

```
.form-container {
  width: 280px;
  height: 320px;
}
```

Now if we go to Inspect in our developer tools, we can see the width and height in our element.

![Image of Yaktocat](https://cl.ly/3ac1d6406fec/download/Screen%252520Shot%2525202020-05-29%252520at%2525206.06.57%252520PM.png)

Now let's continue with our internal space of our container. at this moment there's no space inside, our elements are aligned at the side.

For that let's add a padding

```
padding: 40px;
```

Refresh page again you should be able to see a intern space in our container.

![Image of Yaktocat](https://cl.ly/fd25b0567b4b/download/Screen%252520Shot%2525202020-05-29%252520at%2525206.11.47%252520PM.png)

Very good!

Now Let's add a background so we can identify them.

We will add a white background for this one. #FFFFFF

```
.form-container {
 width: 280px;
  height: 320px;
  padding: 40px;
  background: #ffffff;
}
```

Very good! That looks much better 😁.

Now next we want to have our items center aligned for that we will add

```
text-align: center;
```

We save and we can see that they are aligned in the center

We will also add a border radius

```
  border-radius: 30px;
```

Just to make our form look pretty and stand out, we will add box-shadow.

```
  box-shadow: 0px 20px 40px rgba(255, 255, 255, 0.1);
```

Next let's continue with styling our text.

To make our text prettier let's add a font to our body.

```
body {
font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
}
```

Alright. next our form-title

Let's add a font-size and a font-weight

.form-title {
font-size: 26px;
font-weight: 500;
}

If we refresh our page, it should look like this now.

![Image of Yaktocat](https://cl.ly/1e872db4808c/download/Screen%252520Shot%2525202020-05-29%252520at%2525206.27.26%252520PM.png)

With that we already have our titles but we still need to do our input's so let's do that.

To do that we will have to select them by name. Remember we have an input type text and another input type password and we also have a button.

Let's add our button a type submit

```
<button type="submit">Log in </button>
```

just to select it. But by doing that we specify the action we want it to take when execute our form when we send it. with that now we have our form designed.

Very good!

Next we will select these elements by properties in our styles file.

I'll say.

```
.form-container input[type="text"],
.form-container input[type="password"] {
  background: none;
  display: block
  border: none;
}
```

Along with it add background-none, border-0 and a display block so they'll be on top of each other.

Save your progress to see.

Next let's add a margin

```
margin: 20px auto;
```

For top and bottom 20px and auto for the sides.

![Image of Yaktocat](https://cl.ly/bf9fc1bb5de4/download/Screen%252520Shot%2525202020-05-29%252520at%2525206.43.03%252520PM.png)

This is what we have so far.

Next let's add a padding for our input's for top, bottom, right and left.

Next let's add a beautiful border and a border-radius.

```
border: 1px solid #e0e0e0;
border-radius: 10px;
```

Very good!

I would also like to add a fixed width

```
width: 200px;
```

Next let's do an outline to none

```
outline: none;
```

Lastly let's add a transition

```
transition: 0.25s;
```

For now this won't do anything but will help us later on when we add some kind of event.

Let's do something similar with our button

```
.form-container button[type="submit"] {
  color: white;
  font-size: 16px;
  font-weight: 600;
  background-color: #6126bc;
  outline: none;
  cursor: pointer;
  border: none;
  padding: 12px 10px;
  border: 1px solid #e0e0e0;
  border-radius: 10px;
  width: 200px;
}
```

To make our form a bit more better let's add two paragraph's and two span to it.

```
 <p>
  Forgot <span>Password?</span>
  </p>
  <button type="submit">Log in </button>
   <p>
   Don't have an account? <span>Sign up</span>
  </p>
```

One on top of the button and the other one underneath
Now let's style it.

```
.form-container p {
  font-size: 12px;
  color: #6126bc;
}

.form-container p span {
  font-weight: bold;
  cursor: pointer;
}
```

Let's do the events now.

```
.form-container input[type="text"]:focus,
.form-container input[type="password"]:focus {
  width: 280px;
  border-color: #8a74ab;
}
```

when we select the input's we should see our transitions our input's become larger and wee see a darker border-color. This transition would be very rough without our transition that we added. what it does is create a transition based on time.
Now with that our form looks and feels much better.

![Image of Yaktocat](https://cl.ly/16db717bd5d8/download/Screen%252520Shot%2525202020-05-29%252520at%2525207.26.28%252520PM.png)

We will leave it like that for now but you can definitely play more with it like adding animations and things like that.

Very well let's continue with our button.

Let's start by adding transform and a background, this will raise our button -6px to the top when we hover over it.

```
.form-container button[type="submit"]:hover {
  background: #0cc0dd;
  transform: translateY(-6px);
}
```

let's add the same transition to our button.

```
transition: 0.25s;
```

Very good! Now watch we have our input when we select it the affects become alive, the same happens for our button.

![Image of Yaktocat](https://cl.ly/2c5afb30e39a/download/Screen%252520Shot%2525202020-05-29%252520at%2525207.38.19%252520PM.png)

Now for our animation we will be using a library called **Framer Motion**

![Image of Yaktocat](https://cl.ly/e9a4f675ffa5/download/Screen%252520Shot%2525202020-05-29%252520at%2525208.09.30%252520PM.png)

**Framer Motion** contains many types of animations all of this we can use very simple.

To install it we need this.

```
npm install framer-motion
```

to start using it we will first need to import motion

```
import { motion } from "framer-motion";
```

and then wrap our component that we want to animate with motion.form for example

```
  <motion.form
        action=""
        className="form-container"
        animate={{
          scale: [1, 2, 2, 1, 1],
          rotate: [0, 0, 270, 270, 0],
          borderRadius: ["8%", "8%", "20%", "8%", "8%"],
        }}
      >
```

You can choose any type of animation you want but in this case I will use the

You can surely play around with all the animations you want.

![Image of Yaktocat](https://cl.ly/1fad7275ef5d/download/Screen%252520Shot%2525202020-05-29%252520at%2525209.36.56%252520PM.png)

<a href="https://login-form-one.now.sh">Final Result</a>

That's all for now and this is adaptive for any device as you can see in the developer tools.

You could add media query's to make it a little better but this is good enough.

I'll be posting more practices like this for example a landing page and this like that because it really help us a lot practice our coding skills.

So see you then! 🎉🚀
