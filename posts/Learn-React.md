---
title: "🚼 Learn React"
date: "2020-05-24"
---

## React

In our VScode pages folder. Let's take a look at the following code and start with the

```
<h1>
```

element

- Make sure the Next.js development it’s still running.
- Open `pages/index.js` with your text editor
- Find the text that says welcome to under the <h1></h1> tag and change it to Learn
- Save the file.

```
Command + S
```

Now go back to [http://localhost:3000](http://localhost:3000)

You should now see the learn text next to the blue nextjs link.

![Image of Yaktocat](https://cl.ly/1cdc03912910/download/learn-nextjs.png)

Take a look at the following code:

```
<h1 className="title">
Learn<a>Next.js!</a>
</h1>
```

This code you see right here is like a dragon being born. You might be asking yourself is it JavaScript? HTML? Or something else?

it seems like it must be JavaScript, since it starts with const and ends with ;. If you tried to run that in an HTML file, it wouldn’t work. It seems like it must be JavaScript, since it starts with const and ends with ;. If you tried to run that in an HTML file, it wouldn’t work.

However the code also contains

```
<h1>Learn Next.js</h1> and <a></a>
```

Tags which looks exactly like HTML. That part wouldn’t work if you tried to run it in a JavaScript file.

## What's happening here?

In your code editor, change the

```
<a>
```

to React. Press **Command + S** to save.
Our code should look like this by now!

```
<h1 className="title">
  Learn <a>React</a>
</h1>
```

with an attribute in `<a>` element

```
href="https://nextjs.org"
```

## Intro to JSX

Take another look at the line of code that you just wrote.

Does this code belong in a JavaScript file, and HTML file, or somewhere else?

The answer is... a JavaScript file! Despite what it looks like, your code doesn't actually contain any HTML at all. The part that looks like HTML
It's actually called **JSX**

## What is JSX?

**JSX** is a syntax extension for JavaScript. It was written to be used with React. **JSX** code looks a lot like HTML.

## What does syntax extension mean?

In this case, it means that **JSX** is not valid JavaScript. Web browsers can't read it!

If a JavaScript file contains **JSX** code, then that file will have to be compiled. That means that before the file reaches a web browser, a **JSX** compiler will translate any **JSX** into regular JavaScript.

**NextJS** already already comes with a **JSX** compiler installed, So you don't have to worry about that for now.

## JSX Elements

A basic unit of **JSX** is called **JSX** element.

Here's an example of **JSX** element!

```
<h1>Learn Next.js</h1>
```

## JSX Elements and their surroundings

**JSX** elements are treated as JavaScript expressions. They can go anywhere that JavaScript expressions can go. That means that a **JSX** element can be saved in a variable, passed to a function, stored in a object or array... you name it.

Here's an example of a **JSX** element being saved in a variable

```
const navBar = <h1> Nextjs!</h1>
```

Here’s an example of several JSX elements being store in a object

```
const myTeam = {
  center: <h1>Angel Vazquez</h1>
  powerForward: <h1>Elements</h1>
  smallForward: <h1>Nextjs</h1>
}
```

## Attributes in JSX

JSX elements can have attributes, just like HTML elements can. A JSX attribute is written using HTML-like syntax: a name, followed by an equals sign, followed by a value. The value should be wrapped in quotes, like this:

```
href="https://nextjs.org"
```

In the example above you will see a `<a>` element that contains an attribute of href. A single JSX element can have many attributes just like in HTML.

## Nested JSX

You can nest JSX elements inside of other JSX elements, just like in HTML. Here’s an example of a JSX `<a>` element, nested inside a `<h1>` element.

```
<h1 className="title">
     Learn <a>React</a>
</h1>
```

To make this code more readable, you can use HTML-style line breaks and indentation:

If a JSX expression takes up more than one line, then you must wrap the multi-line JSX expression in parentheses. This looks strange at first, but you get used to it.

Nested JSX expressions can be saved as variables, passed to function, etc., just like non-nested JSX expressions can! Here’s an example of a nested JSX expression being saved as a variable:

```
const theExample = (
  <h1>
        Learn<a> Next.js!</a>
  </h1>
  )
```

## JSX Parent Elements

There’s a rule that we haven’t mentioned: a JSX expression must have exactly one outermost element.

In other words. This code will work.

```
<div id=“parent-element>
   <h1>
      Learn<a> Next.js!</a>
    </h1>
<p>Get started by editing</p>
</div>
```

This code will not.

```
   <h1>
      Learn<a> Next.js!</a>
    </h1>
<p>Get started by editing</p>
```

The first opening tag and the final closing tag of a JSX expression must belong to the same Parent element.

It’s easy to forget about this rule, and end up with errors that are tough to diagnose. If you notice that a JSX expression has multiple elements, the solution is usually simple: Wrap JSX expressions in a Parent element

```
<div></div>
```

## Class vs ClassName

This lesson will cover more advanced JSX. You’ll learn some powerful tricks, and some common error to avoid. Grammar in JSX is mostly the same as in HTML but there are subtle differences to watch out for. Probably the most frequent of these involves the world class.

In HTML, it’s common to use class as an attribute name:

```
<h1 class="title">
          Learn <a>React</a>
</h1>
```

In JSX, you can’t use the word class! You have to use className instead:

```
<h1 className="title">
          Learn <a>React</a>
</h1>
```

This is because JSX gets translated into JavaScript, and class is a reserved word in JavaScript.

When JSX is rendered, JSX className attributes are automatically rendered as class attributes.

## Self-Closing Tags

Another JSX ‘gotcha’ involves self-closing tags.

What’s a self-closing tag?

Most HTML elements use two tags: an opening tag

```
 <div>
```

and a closing tag

```
</div>
```

However, some HTML elements such as

```
<img /> and <input />
```

Use only one tag. The tag that belongs to a single-tag element isn’t an opening tag nor a closing tag; It’s a self-closing tag.

When you write a self-closing tag in HTML , it is optional to include a forward-slash immediately before the final angle-bracket:

But!

```
Fine in HTML with a slash:

<br />

Also fine, without the slash:

<br>
```

In JSX, you have to include the slash. If you write a self-closing tag in JSX and forget the slash, you will raise an error:

```
Fine in JSX:

<br />

NOT FINE AT ALL in JSX:

<br>
```

Twitter @angelVZUR
