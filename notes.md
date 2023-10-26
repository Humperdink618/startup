# Table of Contents
<a id="top"></a>Top
[go to command line commands](#command-line-commands)
Development Essentials:
[go to AWS Account](#aws-account)
[go to intro to web programming](#intro-to-web-programming)
[go to demo](#essentials-demo)
[go to history](#history)
[go to asking questions](#asking-questions)
[go to discord](#discord)
[go to Startup application](#startup-application)
[go to let's play Simon](#simon-overview)
[go to technology stack](#technology-stack)
[go to the console](#the-console)
[go to editors](#editors)
[go to Git](#git)
[go to GitHub](#github)
[go to development and production environments](#dev-and-prod)
[go to CodePen](#codepen)
[go to startup specification](#startup-spec)

[go to Markdown Cheat Sheet](#markdown-cheat-sheet)

Web Servers:



### command line commands
<a id="command-line-commands"></a>Command line commands:
[go to top](#top)
- ls  list contents of current directory
- cd  change directory
- cd ..  goes to parent directory
- git touch  create a new file/modify existing file
- cp  create copy of a file (cp [filename] [new filename])
- mv  move (mv [filename] [filename]) (filename includes location)
- rm  delete a file (rm filename)
- nano  text editor
- vim  another text editor
- cat  prints contents of a file (cat filename)
- ~/  home directory
- ssh  sign into other computer (ssh netID@schizo.cs.byu.edu)
- git add  adds a file (git add .  adds all changed files) (git add filename  adds specific file)
- git commit -m "[commit message]"  commits file with a description
- git push  pushes commited stuff from computer to internet
- git pull  pulls stuff from internet to computer
- git status  tells you if you need to add or commit or push or general status
## class notes
From the GitHub assignment, I learned how to use git, including push, pull, settle merge conflicts. etc.

# Essentials/Getting Started:

# AWS Account
<a id="aws-account"></a>AWS Account:
[go to top](#top)

Before we get started with anything else, you need to create an account with Amazon Web Services (AWS). You want to do this as soon as possible as you will need it for much of the work in this course and it might take some time to authorize your account.

There are lots of other great vendors out there, but AWS is by far the leader in the space and so it is good for you to get experience with them. Follow these instructions on how to an [account with AWS](https://aws.amazon.com/premiumsupport/knowledge-center/create-and-activate-aws-account/). When you create your account make sure you remember your account ID so that you can use it when you log in to the AWS browser console.

## What is this going to cost you?

There is no cost to create an account with AWS, you only pay for what you use, and in many cases they will give you a significant starting credit, and [some services are free](https://aws.amazon.com/free) for a short period of time or monthly usage. The services we are going to use include the following:

| Service        | Purpose                              | Estimated Cost (subject to change)                                                                                     |
| -------------- | ------------------------------------ | ---------------------------------------------------------------------------------------------------------------------- |
| EC2            | Server                               | t3.nano $0.0052 an hour ($3.50/month), t3.micro $0.0104 an hour ($7.00/month), t3.small $0.0208 an hour ($14.00/month) |
| EC2 Elastic IP | Keep your IP address between reboots | First one is free if you keep it associated with a running server. $0.0052 an hour otherwise.                          |
| Route 53       | Domain name                          | $3/year for `click` TLD. More for others                                                                               |
| Route 53       | DNS records                          | $0.50 a month for each root domain                                                                                     |
|                |                                      | Estimated total: `$15` - `$50` for the course. Much cheaper than a textbook.                                           |

There are lots of ways to get free usage of services. For example, as of when this was written, you can get a 750 hours a month, for the first 12 months, of a Linux t2.micro server instance.

# Introduction to web programming
<a id="intro-to-web-programming"></a>Intro to web programming:
[go to top](#top)


![Web programming](../../webprogrammingcover.jpg)

Web programming skills are among the most valuable ones that you can learn within the field of computer science. With web programming you can construct applications that are accessible on phones, tablets, desktops, kiosks, car dashboards, and even refrigerators. You can provide data and services to the entire planet. Every business and industry needs what web programming provides. Taking the time to acquire these skills, no matter what career you eventually pursue, will open doors to you that otherwise would be inaccessible.

Web programming skills evolve very quickly. There are some fundamental concepts that serve as a foundation for understanding, but the details of building modern web applications change constantly. For that reason, you should approach the subject of web programming, not to learn a specific technology, because that will already be out of date by the time you finish this instruction, but to learn how to learn web programming.

## Learning philosophy

The key to learning how to be an exceptional web programmer rests in your ability to continually improve in four areas.

![learning](essentialsLearning.png)

1. **`Technology`** - You need to know the technology. The better you know it the better you will be able to leverage its abilities and apply it correctly. Knowing who the experts are, and discerning between meaningful technology and fads, driven by marketeers, allows you quickly find the valuable and avoid the distractions. Knowing technology will enable you to find the right tool for the job, maximize its performance, and automate its execution.
1. **`Art`** - Making a visually attractive web application requires artistic skills. However, there is just as much art in making them usable, efficient, and maintainable. Knowing how to organize and sculpt your code is incredibly artistic. Well designed systems are often referred to as beautiful or elegant, and a reflection of the creativity of their authors.
1. **`Social`** - Web applications are rarely created and used by one person. Usually you build an application for a large group of customers, and they almost always are created by a team of contributors with different backgrounds and roles. The ability for that team to work together and interact with customers is essential. These are social skills. The more skilled you are at talking, writing, reading, presenting, expressing body language, projecting a good appearance, and most importantly, listening, the more successful you will be.
1. **`Discovery`** - Having a mind that is always questioning will make all the difference. Simply doing the job is not enough. Wanting to know why the job is useful, searching for alternative directions, digging into the inner workings of a black box, and questioning accepted facts are all where progress is made. Cultivating a love for life long learning will take you from adequate to exceptional.

> “When hiring we look for the ability to collaborate, creativity, curiosity, and expertise”
>
> — Tim Cook, ([source](https://appleinsider.com/articles/22/10/03/if-you-want-to-work-for-apple-you-need-these-four-traits))

## Making mistakes

Making mistakes is a key component for learning. Recognizing and embracing the power of making mistakes will help you learn faster, and at a deeper level. Just decide that you are going to make mistakes and that is fine, even preferable. Many of the most important discoveries of all time were a result of making and understanding mistakes. No one learns to walk without falling down. With that said, you should acquire a framework where you can make mistakes while minimizing their ability to slow your progress. Things such as version repositories, notebooks, simulations, working with peers, automation, and reproducibility are all useful for safely making mistakes.

Whenever you approach something new, approach it with the attitude that you will learn by making mistakes. This will keep them from being a barrier to your progress.

> “To make no mistakes is not in the power of man; but from their errors and mistakes the wise and good learn wisdom for the future.”
>
> — Plutarch

## Welcome to `Startup 260`!

The class should have the energy of a startup. We are on the cutting edge of technology. We are building applications to change the world. We even have no funding and will work long hours. Sounds like a startup to me. I will do my best to bring all my energy to our time together, and hope you will do likewise. Together, as a team, we are going to have a lot of fun.

# Demonstration

<a id="essentials-demo"></a>Demonstration:
[go to top](#top)

Before we start digging into creating web servers and talking about protocols let's give you a taste of what web programming technologies can do. In this example we display a card with a rotating border. When you click on the card, the text changes.

![Demonstration](essentialsDemo.gif)

You don't need to worry about the detail about how this all works. The point of this demonstration is just to give you a taste of the amazing things you can do with very little code. However, there are three technologies that make this work: HTML, CSS, and JavaScript.

The HTML looks like the following and basically has a simple card with text in it.

```html
<body>
  <div class="card" onclick="titleClick()">Click Here</div>
</body>
```

The JavaScript handles it when you click on the card, and the JavaScript changes the text.

```js
function titleClick() {
  document.querySelector('.card').textContent = 'Wow! Magic!';
}
```

The CSS is a bit more complex to cover in detail, but it basically handles the styling and animation. For example, the CSS for the card specifies the width and height, where it is positioned, what font to use, and what color it should be.

```css
.card {
  background: #191c29;
  width: var(--card-width);
  height: var(--card-height);
  padding: 3px;
  position: relative;
  border-radius: 6px;
  justify-content: center;
  align-items: center;
  text-align: center;
  display: flex;
  font-size: 3em;
  color: #7383d7;
  font-family: cursive;
  cursor: pointer;
}
```

The rotating border is animated with the following CSS that tells what colors to use and how to infinitely animate it between 0 and 360 degrees over 2.5 seconds.

```css
.card::before {
  background-image: linear-gradient(
    var(--rotate),
    #5ddcff,
    #3c67e3 43%,
    #4e00c2
  );
  animation: spin 2.5s linear infinite;
}

@keyframes spin {
  0% {
    --rotate: 0deg;
  }
  100% {
    --rotate: 360deg;
  }
}
```

If you would like to see the complete code listing and play with the code you can do this on [CodePen](https://codepen.io/leesjensen/pen/KKBwYKR). We will talk a lot about how this code like this works and what CodePen is later in the instruction.

# A brief history of web programming

<a id="history"></a>History:
[go to top](#top)

Having a basic knowledge of the history of web programming helps you to understand why we have the assortment of technologies that you will be working with. There has been three distinct phases that make up this history.

1. The formation of the internet that supports the communication of web applications
1. The creation of HTML and HTTP that made it possible to shared hyperlinked documents (Web 1.0).
1. The creation of CSS and JavaScript that enabled interactive web applications (Web 2.0).

## The Internet

The essential first step to enabling what we now call web programming was the formation of a global communications network that was reliable and publicly available. This was made possible when the United States Department of Defense created the ARPANET as a means of sharing information between universities doing defense related research.

![Arpanet](arpanet1970s.jpg)

— ARPANET access points in the 1970s (**Source**: _Wikipedia_)

ARPANET was defined with the goal of withstanding a nuclear attack. This led to the implementation of a redundantly connected graph of computing devices. Within that network, two computers communicate by dynamically discovering a path to each other without the help of a single central authority.

In the 1980s the National Science Foundation continued the expansion of the network, and commercial enterprises began to make significant contributions. This eventually led to the Internet as we know it today, as the world went online as part of a massive explosion of consumer participation in the early 1990s. This was followed by another exponential increase in the 2000s as smart phones and appliances became common.

The management of the Internet is controlled by two major organizations. The Internet Engineering Task Force (IETF) defines the technical standards that specify how the physical network communicates. The Internet Corporation for Assigned Names and Numbers (ICANN) oversees both the Internet Protocol ([IP](https://en.wikipedia.org/wiki/Internet_Protocol)) address space, and the Domain Name System ([DNS](https://en.wikipedia.org/wiki/Domain_Name_System)). These two databases form the address book of the Internet. When the United States government transitioned control of these governing bodies to a global community of non-profit stake holders in 2016, the Internet became a worldwide asset free from any specific political control.

## Hypertext Markup Language (HTML)

![Tim Berners Lee](timBernersLee.jpg)

> “I just had to take the hypertext idea and connect it to the TCP and DNS ideas and—ta-da!—the World Wide Web.”
>
> — Tim Berners-Lee, (**Source**: _Answers for Young People_)

Starting in 1980, Tim Berners-Lee was working at the research laboratory Cern. He was tasked with building a system that would allow researchers to share documents between remote academic institutions. Realizing that the ARPANET provided the necessary connectivity, he defined the protocols for document sharing that formed the underpinning of what would be termed the World Wide Web. Berners-Lee named the document format the HyperText Markup Language ([HTML](https://en.wikipedia.org/wiki/HTML)) based on inspiration from the digital publishing industry's Standard Generalized Markup Language (SGML). One of the key innovations of HTML was the idea that documents could be interconnected with what he termed hyperlinks to allow immediate access to related documents. In 1990 he put all the pieces together and built the world's first web server on his desktop NeXT computer. You can visit a reproduction of the first web site at [info.cern.ch](http://info.cern.ch/).

![First web server](firstWebServer.jpg)

— First web server (**Source**: _Cern_)

Originally, HTML contained only 18 elements, or tags. The latest version of HTML has now grown to over 100. The initial explosion of elements was caused in part by browser vendors racing to create differentiating functionality in order to gain market share. Since 1996 the HTML specification has been controlled by the [W3C](https://www.w3.org/). The following is an example of a simple HTML document.

```html
<html>
  <body>
    <p>Hello world!</p>
  </body>
</html>
```

## HTTP and URL

While HTML was an incredible step forward, Berners-Lee also made other significant contributions. This included the definition of the HyperText Transfer Protocol ([HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol)) and the Uniform Resource Locator ([URL](https://en.wikipedia.org/wiki/URL)). These two definitions specify how web documents are addressed and transmitted across the Internet. The following gives an example of a URL and HTTP request.

```http
http://info.cern.ch/hypertext/WWW/Helping.html
```

```http
GET /hypertext/WWW/Helping.html HTTP/1.1
Host: info.cern.ch
Accept: text/html
```

## Cascading Style Sheets (CSS)

Cascading Style Sheets ([CSS](https://en.wikipedia.org/wiki/CSS)) was first proposed in 1994 by Håkon Wium Lie, a contemporary of Berners-Lee at CERN, in order to give HTML documents visual styling independent of the content's structure. Before the introduction of CSS, HTML was going down the path of hard coding the visual appearance of the content with HTML elements. This would have resulted in a single visual style for the entire web that was completely defined by the browser vendors.

![Hakon Lie](hakonLie.jpg)

> “If we hadn’t developed CSS, we could have ended up with the web being a giant fax machine”
>
> — Håkon Wium Lie (**Source**: _Medium.com_)

By 1996 CSS became a standard and all the major browsers began to implement the functionality. Unfortunately, for the first years of CSS the same proprietary wars that plagued HTML also affected CSS. Much of the work on version 2.1 was to remove error and make all the features of CSS compatible. Here is a simple example of CSS that defines the white spacing, color, and shadowing of paragraph text.

```css
p {
  margin: 0;
  padding: 20px 0;
  color: #00539f;
  text-shadow: 3px 3px 1px black;
}
```

The ability of CSS to style a web page has increased significantly from its original implementation. With modern CSS a web programmer can import fonts, animate HTML elements, respond to user actions, and dynamically alter the entire layout of the page based on the size of a device and its orientation.

## JavaScript

In 1995 Netscape (the maker of the popular browser Navigator) decided to add the ability to script web pages. The initial implementation was led by Brendan Eich and given the name JavaScript. JavaScript turned the previously static web into an interactive experience where a web page could dynamically change based upon a user's interaction.

![Brendan Eich](brendanEich.jpg)

> “Always bet on JS”
>
> — Brendan Eich (**Source**: _brendaneich.github.io_)

In 1996 Netscape turned control of JavaScript over to ECMA International in an attempt to standardize the definition of the language. At that point JavaScript officially became know as ECMAScript, although it is still commonly referred to as JavaScript.

Here is an example of a simple JavaScript program that combines variables and prints out the result.

```js
const join = (...a) => {
  return a.reduce((accumulator, currentValue) => accumulator + currentValue);
};

console.log(join(1, 2));
console.log(join('hello', ' ', 'world', '!'));
```

The first decade of JavaScript was turbulent as each of the major browser vendors attempted to introduce new proprietary features in order to gain market share. Eventually in 2009 the major vendors agreed on the ECMAScript 5 standard and in 2015 ECMAScript 6 was released as the last major feature upgrade. Since then minor releases have taken the year of their release as their version number.

### JavaScript outside the browser

In 2009 Ryan Dahl created Node.js as the first successful application for deploying JavaScript outside of a browser. This changed the mindset of JavaScript as purely a browser technology to one that is leveraged across an entire technology stack.

Other important milestones in the history of JavaScript include the 2013 standardization of the common object notation JSON, a typed variant named TypeScript in 2012, and the introduction of numerous transpilers for converting other languages into compatible ECMAScript.

## What's next?

Looking forward, there are many exciting opportunities, as well as problems to solve. This includes addressing topics like application complexity, device diversity, internationalization, security, privacy, data ownership, environmental impact, global authorization identity, performance, and accessibility.

The only thing certain is that you have an opportunity to be a big part of it. One important lesson you can learn from these early pioneers, is that with web programming, a single person can change the world. I hope to see your face on this history page one day.

# Asking questions

<a id="asking-questions"></a>Asking Questions:
[go to top](#top)


🔑 **Required reading**: [Stack Overflow - How to ask a good question](https://stackoverflow.com/help/how-to-ask)

## Contact information

- Instructions on how to use [Discord](../discord/discord.md)
- Consult this [document](https://docs.google.com/spreadsheets/d/1g1AMtgvyfSwMgp85QcwHuy0mVR-nN3bIGI6XNEJWB1U/edit?usp=sharing) to view the TA schedule
- In-person TAs are located in 1066 TMCB cube #4
- Professor Jensen's office hours: 2264 TMCB, Wednesday 9 - 11 AM

| Who        | How                 | Where                  | When                            |
| ---------- | ------------------- | ---------------------- | ------------------------------- |
| TA         | Online or in person | Discord, TA Office     | TA Schedule                     |
| Instructor | Online or in person | Discord, Class, Office | Office Hours, Class Times       |
| Peers      | Online or in person | Discord, Class         | Depends on how friendly you are |

## Who to ask questions

You have a lot of resources to help you find answers. Here is the order that you should use them.

1. **Yourself** - You will learn more and find great satisfaction in answering your own question. When you feel like you need help with a question the first thing you should do is stop, take a breath, and think. Can you think of a way that you can answer this yourself? Can you break apart the problem into smaller pieces and find the answer by solving just a part of the question? Can you simplify the problem by ruling everything out except one variable and then answering that? You will be surprised how often, and quickly, you will find the answer.
1. **The Oracle** - Google is your friend. Think like a web page and use search terms that are unique to the web page you are hoping to find. Avoid terms that are common or used by different industries. With web programming, especially the technologies in this instruction, it will be very rare that you cannot find your answer with Google. The trick will be to make sure that the answer is credible, and that it is relevant. Answers for older, or newer, versions of a technology will send you down a rabbit hole.
1. **Peers** - You have a whole class full of friends. We are all in this together. Get on Discord or talk to someone in class. More than likely there is someone with the same question as you. However, you should also **assume** that the question has already been asked. Use the search functionality of Discord. Make sure you are in the right channel. Look up at the previous discussions to see if the answer is already there. If all that fails, then ask the question.
1. **TA** - These are smart people who have been where you are and want to help you succeed. Check the TA hours and contact them on Discord or in person. Respect their time by researching the question and come prepared to ask a clear question.
1. **Instructor** - The instructor is there for **you**. Asking for help in class, after class, or during office hours has a good chance of helping you find an answer. This is especially true if you have already tried the other methods. If the instructor can't help you, then at least you will get to know each other better.

## How to ask questions

Learning how to ask questions might be the most important thing you learn. The better your question, the better your answer will be. Otherwise, you end up with an answer like 42, and you do not even know what you were asking.

1. Clearly define and phrase your question. Sometimes this alone will give you an answer.
1. Use the clearly defined question to research for more information.
1. Give ample background. Assume the person you are asking is not looking at your computer, doesn't know what you are working on, and doesn't know what you know. Because they don't. Saying "It doesn't work" provides no value. It isn't even a question. Instead give the background in as much detail as possible. Explain what you tried already and what the result was.
1. Screenshots and captured output is helpful.
1. Give a reproduction path.
1. Use proper grammar and proofread your question.
1. Respond to feedback.
1. Give thanks even if you didn't find the help you were hoping for.

Here is a good template to follow when asking a question:

> When working on assignment `A`, I was successfully able to do `1`, `2`, and `3`, but then I did `B`, as instructed by `C`, and got the result `D`, with an error of `E`. I was expecting `F`. I thought maybe `G` or `H` might be the problem, but I saw that `J` already tried that without success as discussed here on `K`. Any help is greatly appreciated.

## Pay it forward

Always remember how it felt to receive help. Actively look for opportunities to help others in a kind respectful way. After all, that is the Gospel of Jesus Christ at its core. We are a team. We are better together.

# Discord

<a id="discord"></a>Discord:
[go to top](#top)


Peer learning provides a great opportunity to build social, team building, skills. Take advantage of any chance you get to work with other learners, in and out of, class. By discussing with your peers you learn more as you ask, and answer questions. Nothing completes the learning cycle better than teaching someone else.

We use the peer chat service [Discord](https://discord.com/) to ask and answer questions, as well as get online help from the TAs and Instructor.

Use the following invite to join our discussion server:

> [https://discord.gg/PZ4fZbducn](https://discord.gg/PZ4fZbducn)

From a desktop computer, you can use Discord from your browser. From your phone you will need to install the application from the app store.

If you have never used Discord before, you will need to create a free account. Take a minute to also set up your avatar.

## A brief tour

Discord is organized by servers and channels. If you used the above invite link you should already be subscribed to our server. Discord supports text (with the ability to share images) and video chat. You can also share your screen so that you can walk through problems with others.

![Discord](essentialsDiscord.png)

### Questions

Our server contains the following channels for asking and answering questions.

- **general**: Only use this if it doesn't fit anywhere else
- **announcements**: Non-questions of interest to the whole class
- **TA/common-problems**: A place for the TAs to put answers to questions you are likely to have
- **Technology channels**
  - github
  - aws
  - startup
  - html
  - css
  - javascript
  - node and express
  - caddy
  - react
  - mongo

⚠ You should use the channel that is most appropriate for your discussion.

⚠ Do not ask questions in multiple channels.

⚠ Only use `general` if it really is not specific to another channel.

⚠ If you are replying to someone multiple times then reply in a thread and not in the channel.

⚠ Make sure you review the instruction on [asking questions](../askingQuestions/askingQuestions.md) before you start asking questions.

### Getting help

When you want to talk with a TA either online or in-person you will use Discord to get into the queue. Under the voice channels you will see the TA chat rooms. When a TA is working (check the [schedule](https://docs.google.com/spreadsheets/d/1g1AMtgvyfSwMgp85QcwHuy0mVR-nN3bIGI6XNEJWB1U/edit?usp=sharing) for hours) and available you will see them here. Start by joining the `TA Help Queue`. When a TA becomes available they will move you into one of the breakout rooms if you are online, or move you to their discussion area if you are in-person.

![Discord](essentialsDiscordHelpQueue.jpg)

# Startup application

<a id="startup-application"></a>Startup application:
[go to top](#top)


The primary objective of this course is to help you understand the technologies necessary to launch a web application startup. Towards this goal you will build your very own `startup` application. The actual application you build is entirely up to you, but it must successfully demonstrate the technologies we focus on.

The course is divided into distinct milestones. At each milestone you will evolve your startup application to take on more and more functionality. You start with a conceptual design document and then build a structural shell for the application using HTML. Next comes styling with CSS, interactivity with JavaScript, using third party web services, hosting your own web service, database connectivity for persistent storage, data pushed from the server with WebSockets, and finally, converting to a modern web framework with React.

- **HTML** - Basic structural and organizational elements
- **CSS** - Styling and animating
- **JavaScript** - Interactivity _(e.g. What happens when a user presses a button)_
- **Web service** - Remote functions that your application calls on your, or someone else's, web server _(e.g. saveScores, getWeather, chatWithFriend)_
- **Authentication** - Creating accounts and logging in
- **Database persistence** - Storing user data in a database _(e.g. Save the high scores and login information)_
- **WebSocket** - Support for pushing data from the server. This can be peer to peer communication _(e.g. chatting with friends through the browser)_, or realtime data from the server _(e.g. stock prices or the current game leader)_.
- **Web framework** - Using React to add components and request routing

The [Simon](https://simon.cs260.click) application is meant to give you an example of the level of complexity you are looking for, and how to build your startup application. Use Simon as a chance to experiment with things you are considering doing with your startup application. Once you learn how Simon does something you can leverage that code in your startup.

Immediately start thinking about what you would like to build. What you do for your startup application is completely up to you. So make it something that is interesting to you. It doesn't have to be complex. In fact **simple is usually better**. Dream big, but pick a very small, minimal viable product, for your startup application.

Keep the styling of your application simple. One common mistake is to spend enormous amounts of time trying to make your application look a certain way. Instead leverage what Simon does. Make it look reasonable and then move on to the next technology. You can always come back later and make it look better.

## Deliverables

You will turn in the following deliverable versions of your startup application.

1. Design
1. HTML
1. CSS
1. JavaScript
1. Web service
1. Database
1. Login
1. WebSocket
1. React

You can change your project as the class progresses, but each deliverable submission must include all the functionality defined by the previous milestones. For that reason, it is suggested that you do not change your project, and carefully consider your project from the beginning, because the longer you go, the more expensive it will be to repeat your previous work.

## Submitting your deliverable

In order to make the submission and grading process as efficient as possible it is required that you do the following for each deliverable.

1. Deploy the deliverable to your production environment
1. Include a link to your GitHub startup repository prominently displayed on your application's home page
1. Notes in your startup Git repository `README.md` file documenting what you modified and added with this deliverable. The TAs will only grade things that have been clearly described as being completed. Review the [voter app](https://github.com/webprogramming260/startup-example) as an example. Please reference the items from the rubric for each deliverable in your description of what you did, and what you did not.

Deliverables that do not include the above will not be graded.

## Ideas

Some ideas for possible projects include:

- Simple game like connect four. Games with complex rules or animation are difficult and therefore discouraged.
- Peer chat
- Photo URL sharing. Sharing actual photos requires that you to store those files somewhere, and therefore is discouraged.
- Shared story authoring
- Book or recipe reviews
- Geo-location sharing
- News sharing
- Favorite website sharing
- Group voting
- Group calendaring
- Fitness tracking

Demonstrating the technology is more important than complexity or creativity, and basic implementations of each of the course technologies is sufficient to demonstrate your mastery.

## Examples

The [Simon](https://simon.cs260.click) demonstration application provides a good example for the level of complexity that you should be working towards. Each of the course technologies are demonstrated in about 100 lines of [code](https://github.com/webprogramming260/simon-react#readme).

![Simon](simonPlay.gif)

This realtime [voting application](https://startup.cs260.click) provides another reasonable example.

![Voter startup](startupExampleVoter.gif)

## Common mistakes

Here are some common mistakes that will slow down the development of your startup.

1. **Not putting in consistent effort**. The technology deliverables build on each other. If you get behind, it becomes increasingly difficult to deliver the final product. Rather than cramming your effort into the night before the deliverable is due, set aside a specific time each day to research and add to your startup. Doing this will result in a better application, and make the process much more satisfying.
1. **Too many UI pieces**. Resist the urge to create lots of user inputs and components when one input or component will demonstrate the functionality. Complexity kills in software development. This is true for both the amount of effort it takes to implement and enhance, as well as the poor user experience it creates.
1. **Getting stuck on doing something a specific way**. There are common patterns for doing things in web applications that have been refined over decades of experience. If you find yourself hitting a brick wall because you can't get something to work the way you have designed, then it might be because it goes against the way things are normally done. Instead, look for inspiration in how popular frameworks solve a pattern, and leverage the examples and code that they provide. Common examples of this mistake include writing your own navigation bar, or creating an interactive game by moving HTML elements around pixel by pixel.
1. **Focusing too much on the UI**. In many ways it is the functionality that matters. Make sure that the application does something interesting and utilizes all the required technologies first. You can always make it look nicer once you have made it work.
1. **Implementing too many features**. Focus on delivering a core feature really well. Once you have completely built out that functionality, then you can add additional features. A common mistake is to start building lots of features at the start, and then not completing any of them. For example, if you are writing a stock trading application, then make sure you can display stocks and save your favorites, before you start designing the ability to see your friend's picks, chat about the market, display historical charts, or use AI to predict the future.
1. **Forgetting that programming is an art**. Building a web application is a creative expression of who you are, what you know, and the vision you have. Don't get frustrated because you cannot immediately realize your potential. That will take time and effort. Just remember that as you develop your skills, it will become increasingly satisfying to see what amazing things you can build and what an positive impact you can make for so many people. God has given you specific talents, and as you develop them, you are going to do great things for good with them.

## Demo day

At the end of class we will conduct a demo day for the best applications. Those selected for the demo day will be awarded additional credit for the exceptional work. The top presenters will be given the coveted Ghirardelli award.

![Ghiradelli](ghirardelli.png)

# Let's play Simon

<a id="simon-overview"></a>Simon overview:
[go to top](#top)

![Simon](simon.png)

In 1978 Milton-Bradley, now Hasbro, released an electronic game named [Simon](<https://en.wikipedia.org/wiki/Simon_(game)>). It was cutting edge at the time since there were so few electronic games, and all the cool kids had one.

We are going to build a peer to peer multiplayer web application modeled after Simon. We will build it together by adding new functionality every time we learn a new technology. The example version of code and production deployment for each iteration are available to you. Your job will be to review the example and then deploy it to your production environment. The goal is to make you think about every line of code. Ask, "why is it done this way?" and "Is there a better way?". You can then take what you have learned, or even portions of the Simon code, and apply it to your Startup application.

## Learning objective

The objective with Simon is to give you an example application that demonstrates each technology concept so that you can then use that technology in your Startup application.

You should plan on spending 1 to 3 hours reviewing the Simon code. As you review the code take careful notes in your Startup notes.md file about what you have learned.

## Simon versions

You can play the example production release [here](https://simon.cs260.click).

![Simon](../startup/simonPlay.gif)

The following are the different technologies we are going to demonstrate with our Simon iterations.

| Iteration                                      | Video                                 | Code                                                                 | Production release                           |
| ---------------------------------------------- | ------------------------------------- | -------------------------------------------------------------------- | -------------------------------------------- |
| Simon HTML                                     | [video](https://youtu.be/zg7eDNRMnWA) | [code](https://github.com/webprogramming260/simon-html#readme)       | [play](https://simon-html.cs260.click)       |
| Simon CSS                                      | [video](https://youtu.be/N7DVKsvUJgM) | [code](https://github.com/webprogramming260/simon-css#readme)        | [play](https://simon-css.cs260.click)        |
| Simon JavaScript                               | [video](https://youtu.be/hqzXN-n2Q5I) | [code](https://github.com/webprogramming260/simon-javascript#readme) | [play](https://simon-javascript.cs260.click) |
| Simon Service                                  |                                       | [code](https://github.com/webprogramming260/simon-service#readme)    | [play](https://simon-service.cs260.click)    |
| Simon DB                                       |                                       | [code](https://github.com/webprogramming260/simon-db#readme)         | [play](https://simon-db.cs260.click)         |
| Simon Login                                    |                                       | [code](https://github.com/webprogramming260/simon-login#readme)      | [play](https://simon-login.cs260.click)      |
| Simon WebSocket                                | [video](https://youtu.be/oVO2VIG0zfI) | [code](https://github.com/webprogramming260/simon-websocket#readme)  | [play](https://simon-websocket.cs260.click)  |
| Simon React                                    | [video](https://youtu.be/wO20-h3qNXE) | [code](https://github.com/webprogramming260/simon-react#readme)      | [play](https://simon-react.cs260.click)      |
| Simon Progressive Web Application (_optional_) |                                       | [code](https://github.com/webprogramming260/simon-pwa#readme)        | [play](https://simon-pwa.cs260.click)        |

# Technology stack

<a id="technology-stack"></a>Technology stack:
[go to top](#top)


The collection of technologies that you use to create or deliver your web application is called a _technology stack_. It is a stack because they usually layer one on top of each other. Generally at the top of the stack is your web framework. This includes possibilities such as Angular, React, Vue, or Svelte. The web framework then communicates with one or more web services to provide authentication, business, data, and persistent storage. The web service then uses backend services such as caching, database, logging, and monitoring.

Here is what our stack looks like: React for the web framework, talking to Caddy as the web server hosted on AWS, running web services with Node.js, and MongoDB as the database hosted on MongoDB Atlas.

![260 tech stack](essentialsTechStack260.jpg)

The key with a tech stack is the realization that there is no one answer to the question of what technology to use where, and the answer continually evolves. Usually you will use what the company you work for has invested in. Migrating to a new stack is very expensive and error prone. So learning how to maximize your effectiveness, regardless of the technology, will make you very valuable. Being discontent because the latest new toy is not being used, will usually cause an unnecessary disruption to the team. However, if you can validate that a change in the tech stack will produce significant monetary, performance, or security gains, then you will greatly benefit your team.

## Complex technology stack

Here is an example of a tech stack from a small web application company. You can see that there are dozens of technologies used to make the application work. When you build a commercial stack you want to be very careful about the pieces you choose. Dependability, support, scalability, performance, and security are all important factors. You also want to consider development productivity factors such as documentation, ease of use, common acceptance, community support, build times, and testing integration.

![Agilix tech stack](essentialsTechStackComplex.jpg)

# The Console

<a id="the-console"></a>The Console:
[go to top](#top)

📖 **Deeper dive reading**: [MDN Command line crash course](https://developer.mozilla.org/en-US/docs/Learn/Tools_and_testing/Understanding_client-side_tools/Command_line)

Before the creation of graphical user interfaces, all computing systems were simple console environments consisting as of a prompt for inputting a command and the display of the command output. All of the original programming tools ran as console application. The console tradition is still actively used by professional developers and most programming tools execute within a console window.

Also known as the command line, shell, or terminal, the console window is an essential web development tool. The console provides access to the file system and allows for the execution of command line applications.

There are many console applications that you can chose from. All operating systems come with a default console, but you will probably want to install one in order to get the best experience. Here is an example of [Warp](https://www.warp.dev/) running on a Mac.

![Warp](warp.png)

## Make sure you have a console application

In order for you to successfully use the console for web programming it must be [POSIX](https://en.wikipedia.org/wiki/POSIX) compliant. POSIX compliance means that it supports a standard set of console commands. Both Mac and Linix support POSIX. That means any necessary console commands will work on those operating systems.

## Getting a console application for Windows

If you are using Microsoft Windows you can get a reasonable approximation of a POSIX compliant console by installing [Git Bash](https://git-scm.com/download/win). When installing use all the default settings.

Once it is installed, hit the Windows button on your keyboard, and type `Git Bash`. This should open a console window that looks something like the following. Make sure you look for the `Git Bash` icon so that you don't accidentally use an non-POSIX compatible console application.

![Git Bash](gitBash.jpg)

⚠ Do not use `Git Command`, `cmd`, or `Powershell`. That will not work for the commands and scripts we run in this class.

You can use Windows Subsystem for Linux (WSL) (e.g Ubuntu on Windows) for your work in this class, but you must be very careful to do all of your work actually within WSL. Don't download files to your Windows partition and then access them from WSL. It is suggested that you use `Git Bash` instead of WSL, unless you are really familiar with WSL.

### Testing your console application

Once you have a acceptable console application on your development computer, open it up and make sure you can run a simple POSIX compliant command such as `printf 'hello\n'`.

![Console printf](consolePrintf.jpg)

If this displays `hello` then you are on the right track. If that doesn't work then you are using a console application that is not POSIX compliant. For example, Windows Powershell will not work.

## Viewing the file system

One of the primary purposes of a console application is to view the files on the computer. The files on a computer are organized into a tree structure of nodes called directories. At any given point in time your console is located at one of the directories in the file system. You can see which directory you are in with the `pwd` (present working directory) command.

```sh
➜  pwd

/Users/student/byu//webprogramming260
```

You can list all of the files in the directory with `ls` (list files). Most command line applications take parameters that are specified after you type the application name. For example, `ls` can list all files (even hidden ones) in a long format if you provide the parameter `-la`.

```sh
➜ ls -la

total 16
-rw-r--r--  1 lee  staff   1.0K Nov 19 08:47 LICENSE
-rw-r--r--  1 lee  staff    82B Nov 19 08:47 README.md
drwxr-xr-x  4 lee  staff   128B Nov 19 08:48 profile
drwxr-xr-x  4 lee  staff   128B Nov 19 08:47 react
```

## Executing commands

The other primary purpose of the console is to execute commands. You already did this in the previous section when you executed commands for working with the file system. However, console commands can perform many different operations. Here are some basic commands that you show experiment with.

- **echo** - Output the parameters of the command
- **cd** - Change directory
- **mkdir** - Make directory
- **rmdir** - Remove directory
- **rm** - Remove file(s)
- **mv** - Move file(s)
- **cp** - Copy files
- **ls** - List files
- **curl** - Command line client URL browser
- **grep** - Regular expression search
- **find** - Find files
- **top** - View running processes with CPU and memory usage
- **df** - View disk statistics
- **cat** - Output the contents of a file
- **less** - Interactively output the contents of a file
- **wc** - Count the words in a file
- **ps** - View the currently running processes
- **kill** - Kill a currently running process
- **sudo** - Execute a command as a super user (admin)
- **ssh** - Create a secure shell on a remote computer
- **scp** - Securely copy files to a remote computer
- **history** - Show the history of commands
- **ping** - Check if a website is up
- **tracert** - Trace the connections to a website
- **dig** - Show the DNS information for a domain
- **man** - Look up a command in the manual

You can also chain the input and output of commands using special characters

- `|` - Take the output from the command on the left and _pipe_, or pass, it to the command on the right
- `>` - Redirect output to a file. Overwrites the file if it exists
- `>>` - Redirect output to a file. Appends if the file exists

For example, you can list the files in a directory, pipe it into `grep` to search for files created in Nov, and then pipe that into `wc` to count the number of files found with a date of Nov.

```
ls -l | grep ' Nov ' | wc -l
```

There are also keystrokes that have special meaning in the console.

- `CTRL-R` - Use type ahead to find previous commands
- `CTRL-C` - Kill the currently running command

## ☑ Assignment

Experiment with console commands. Open a console window and create a test directory that you can play with by executing the command `mkdir test` (make directory). Then execute the command `cd test` to change into that directory. Then execute the following sequence of commands:

```sh
mkdir test
cd test
pwd
ls
ls -la
ls ../
printf "x" > test.txt
ls -l
cat test.txt
cp test.txt other.txt
ls
cat test.txt >> other.txt
rm test.txt
less other.txt # press `q` to exit less
for i in {1..2}; do printf 'y' >> other.txt; done;
```

Once you have done this, go over to the assignments page in Canvas and submit the text that results from running `cat other.txt`.

The better you get at working with the console the more efficient your programming will be.

# Editors

<a id="editors"></a>Editors:
[go to top](#top)

The code editor is the workspace of a web application developer. Deeply learning an editor that makes you efficient and flexible will pay significant dividends in your ability to deliver quality work and greatly reduce frustration. A good editor should feel like a friend. If you are constantly arguing with your editor, then perhaps you need a relationship adjustment.

For your work with this instruction I would highly suggest you use two editors. The first one, Visual Studio Code, is your main editor for daily coding activities. The second one, is VI. You will use VI when you are shelled into your production environment and need a simple, but powerful, console based editor for quickly editing text files.

## Visual Studio Code

![VS Code icon](essentialsVscodeIcon.png)

**Website**: [VS Code](https://code.visualstudio.com/)

Created by Microsoft, Visual Studio Code (VS Code), is free and supported by a large community of open source developers. The [2021 Stack Overflow](https://insights.stackoverflow.com/survey/2021#section-most-popular-technologies-integrated-development-environment) developer survey put VS Code as the number one choice for 71% of professional developers.

![Editor survey](essentialsEditorSurvey.jpg)

VS Code is both simple to use, incredibly flexible, and powerful. At its most basic level it represents files in a given directory on the left and a space on the right for editing files. VS Code then adds excellent Git support, auto-formatting, auto-suggestions, and debugging support for JavaScript right out of the box. You can easily install language server extensions for most major programming languages that provide coding, building, and debugging support. From there you have your choice of thousands of extensions to add whatever functionality you would like. This includes extensions such as an auto-reloading HTTP server for hosting your project code locally in a browser, an image editor, a spell checker, hex editor, testing frameworks, linters, code prettier, or even docker container management to compartmentalize your development of different projects.

![VS Code](essentialsVSCode.png)

So unless you are already a master of some other development environment, it is highly suggested you go and [install VS Code right now](https://code.visualstudio.com/).

### Live Server extension

The VS Code Live Server extension is great for building web applications. You are going to build a lot of HTML, CSS, and JavaScript. You can do much of this on CodePen, but for your projects you are going to be working in your development environment. This means you will have a GitHub repository cloned to your personal development computer. When you open VS Code to the directory where your repository is located you can start creating HTML, CSS, and JavaScript, but when you want to see your code working you need to actually run a web server to deliver your files to the browser. That is where the Live Server extension comes in handy. With the press of the `Go Live` button on the bottom right status bar, your entire project directory is served up through your browser. Additionally, if you make any changes to a file the browser will automatically be updated.

To install the Live Server extension, open up VS Code and follow these three steps.

![LiveServer install](essentialsLiveServerInstall.png)

Congratulations! You have joined the 38 million other users already enjoying this extension. You can test it by opening VS Code, creating a new file named `index.html` and pasting `<h1>hello<h1>` into the file. Then save the file and press the `Go Live` button. This will launch your browser and display the rendered `index.html` file. If you make changes to your file and save it, the browser will automatically be updated to display your changes.

### GitLens

The basic support that VS Code offers for working with Git is sufficient for most tasks, but if you really want to unleash the power of git, consider installing the `GitLens` extension. It makes reviewing the commit history, stashing, merging, and comparing so much easier. With over 25 million users, you might enjoy joining the party.

## VI

![Vi Logo](essentialsVimLogo.png)

VI, or technically vim, is one of the oldest console editors. It is extremely powerful and some incredibly talented software engineers use it as their sole development environment. The reason why you should learn VI is that it is available on every Linux server and can do anything that you will need. With that said it has a bit of an initial learning curve. However, once you have memorized a few basic commands you will be able to get around easily. If you take some time to really learn VI, you might find a new essential tool.

There are lots of tutorials for VI. Here are a few based on how you like to learn.

- [Textual](https://www.linuxfoundation.org/blog/blog/classic-sysadmin-vim-101-a-beginners-guide-to-vim)
- [Video](https://youtu.be/RZ4p-saaQkc)
- [Interactive](https://www.openvim.com/)
- [Game](https://vim-adventures.com/)
- `Console` - Type `vimtutor` in your console

Additionally, the following instructions walk you through the basics and give you a few important commands to get started.

To use VI, open your console and change directory to one that holds some code you want to work on. For example, if you wanted to edit `index.html` you would type:

```sh
vi index.html
```

![Vi](essentialsVi.png)

What you will immediately notice is that there is no menu bar or navigation aids. Instead, VI works entirely by keyboard commands. There are two modes in VI, command mode and insert mode. When you open VI, you are in command mode and all of the command keystrokes will work. To edit a document, use the command `i` to enter insert mode. Now your keystrokes will modify the document. To exit insert mode and type commands again, press `ESC`. Type `:q` from command mode (yes, you have to type the colon) to quit VI when you're done.

The following short list of commands should allow you to do most of what you will ever want to do.

| keystroke | meaning                                                                                                                                        |
| --------- | ---------------------------------------------------------------------------------------------------------------------------------------------- |
| `:h`      | help                                                                                                                                           |
| `i`       | enter insert mode. This will allow you to type and delete text. Use ESC to exit insert mode. No other commands will work while in insert mode. |
| `u`       | undo                                                                                                                                           |
| `CTRL-r`  | redo                                                                                                                                           |
| `gg`      | go to beginning of file                                                                                                                        |
| `G`       | go to end of file                                                                                                                              |
| `/`       | search for text that you type after /                                                                                                          |
| `n`       | next search match                                                                                                                              |
| `N`       | previous search match                                                                                                                          |
| `v`       | visually select text                                                                                                                           |
| `y`       | yank or copy selected text to clipboard                                                                                                        |
| `p`       | paste clipboard                                                                                                                                |
| `CTRL-wv` | Split window vertically                                                                                                                        |
| `CTRL-ww` | Toggle windows                                                                                                                                 |
| `CTRL-wq` | Close current window                                                                                                                           |
| `:e`      | Open a file. Type ahead available. If you open a directory you can navigate it in the window                                                   |
| `:w`      | write file (save)                                                                                                                              |
| `:q`      | quit. Use `:q!` to exit without saving                                                                                                         |

The great thing about learning these commands is that you will find that they work with a lot of the POSIX console programs. For example, with the file viewing utility `less` you can use `G` and `gg` to jump to the top and bottom of a file. Here is a [cheat sheet](https://vim.rtorr.com/) if you want to see all the commands.

### VI humor

> How do you generate a random string?
>
> Put a web developer in front of VI and tell them to save & exit.

# Git

<a id="git"></a>Git:
[go to top](#top)

![Git Icon](essentialsGitIcon.png)

[Linus Torvalds](https://en.wikipedia.org/wiki/Linus_Torvalds), the creator of Linux, was fed up with the proprietary version control software that he was using to track the code for the Linux kernel and so over a weekend he built Git, the world's most popular version control system.

![Linus Torvalds](linusTorvalds.jpg)

> “Talk is cheap. Show me the code.”
>
> — Linus Torvalds

## Installing Git

Before we can talk about Git you need to make sure it is installed in your development environment. Open a console and type `git --version`.

```sh
➜  git --version
git version 2.32.0 (Apple Git-132)
```

If you do not see something like that, then you need to follow these [instructions](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) to install Git.

## What is Git?

Git provides two valuable functions. First, it allows you to track versions of files in a directory. Second, it allows you to clone all of those versions to a different location, usually to a different computer. We are going to focus on tracking versions in this instruction and cover cloning repositories when we talk later about GitHub.

You can track file versions of any files in a directory by initializing Git for that directory. You can do this right now by creating a new directory in a console window and initializing it as a Git repository.

```sh
➜  mkdir playingWithGit
➜  cd playingWithGit
➜  git init
```

If you list all files in the directory you will see that you now have a hidden directory named `.git`.

```sh
➜  ls -la
total 0
drwxr-xr-x   3 lee  staff    96 Dec  1 22:59 .
drwxr-xr-x+ 54 lee  staff  1728 Dec  1 23:00 ..
drwxr-xr-x   9 lee  staff   288 Dec  1 22:59 .git
```

The `.git` directory is where all of the versions get stored. Now use the `echo` command to create a file so that we can see how versioning works. After creating the new file, use `git status` to tell you what git is doing.

```sh
➜ echo hello world > hello.txt
➜ git status

On branch master
No commits yet
Untracked files:
  (use "git add <file>..." to include in what will be committed)
 hello.txt

nothing added to commit but untracked files present (use "git add" to track)
```

`git status` tells you that it detects a new file named `hello.txt`, but it isn't currently tracking versions for that file. To begin tracking versions you need to add it. Usually you track all files in a repository directory and so you can tell Git to track everything that it doesn't know about with `git add .`. Make sure you include the period at the end of the command. Follow the add command with another call to `git status` in order to see what the repo looks like now.

```sh
➜  git add .
➜  git status

On branch master
No commits yet
Changes to be committed:
  (use "git rm --cached <file>..." to unstage)
 new file:   hello.txt
```

Now Git tells us that it has _staged_ the file `hello.txt`, meaning it is ready to be committed as a version in the repository. We commit a version with the `commit` command. We always want to have a meaningful comment about the version we are committing and so we use the `-m` parameter to provide a message that will live with the version. Follow this with another call to `git status`.

```sh
➜  git commit -m "initial draft"
[master (root-commit) d43b07b] initial draft
 1 file changed, 1 insertion(+)
 create mode 100644 hello.txt

➜  git status
On branch master
nothing to commit, working tree clean
```

Congratulations! You have just committed your first file to a Git repository. It is important to note that we were only working with a single file in this example. However, a commit can represent multiple files. You just need to add them all before you execute the commit. Also, note that the point of the stage, `git add` step, is so that you can commit some files while still leaving other modified files out of the commit. Only files you've staged will be committed.

Let's make an edit to our file and commit it again. This time we will tell Git that we want to add all the modified tracked files to our commit, without having to `git add` them again, by including the `-a` parameter along with our message parameter.

```sh
➜  echo goodbye world > hello.txt

➜  git commit -am "changed greeting to reflect the present mood"

[master e65f983] changed greeting to reflect the present mood
 1 file changed, 1 insertion(+), 1 deletion(-)
```

Now that we have a couple versions in our repository we can view the versions with the `git log` command.

```sh
➜  git log

commit e65f9833ca8ee366d0d9c1676a91b1a977dab441 (HEAD -> master)
Author: Lee
Date:   Thu Dec 1 23:32:22 2022 -0700

    changed greeting to reflect the present mood

commit d43b07b8890f52defb31507211ba78785bf6dccf
Author: Lee
Date:   Thu Dec 1 23:29:11 2022 -0700

    initial draft
```

This shows both commits with the associated comments.

## Commit SHA

Every commit has a unique identifier that is generated by hashing the file along with the timestamp using the SHA hashing algorithm. You can always refer to a specific commit in your version history by using its SHA. For example, if we want to temporarily switch back to a previous version to see what it contains we can use the `checkout` command. You only need to provide the first few characters of the SHA.

```sh
➜  git checkout d43b07b8890f

Note: switching to 'd43b07b8890f'.
HEAD is now at d43b07b initial draft

➜  cat hello.txt
hello world
```

The above output omits a big message saying that you are no longer looking at the latest version, but the important thing is that you can see that we are now looking at our old version. Note that you don't want to make commits at this point since it will create a branch that is not for the latest code. To get back to the top of the version chain, use the `checkout` command and reference the branch name, which is by default `master`.

```sh
➜  git checkout master
Previous HEAD position was d43b07b initial draft
Switched to branch 'master'

➜  cat hello.txt
goodbye world
```

Now we are back to our latest version.

The following diagram shows how your commits move from your working directory, to staging them for a commit, and then committing them to a repository.

![Git stage](essentialsGitStage.jpg)

A commit is a full snapshot of what was staged from your directory at the time of the commit. That means all of the files contained in the commit were reverted when you executed the checkout command. Since we only had one file in our commit, it looks like we are only flipping that file around, but basically you can think of it as a time machine for the entire directory.

## Diff

Most of the time you don't want to reverse back to an earlier commit. Instead you just want to compare the differences between commits. We can do that with the `diff` command. You can specify two SHAs that you would like to compare, or you can use the `HEAD` variable, which always points to the commit you're currently looking at. To refer to earlier commits you just add `~` and the numerical distance from `HEAD` that you want to reference. In this case we will compare `HEAD` and `HEAD~1`.

```sh
➜  git diff HEAD HEAD~1
```

```diff
diff --git a/hello.txt b/hello.txt
index 3b18e51..eeee2af 100644
--- a/hello.txt
+++ b/hello.txt
@@ -1 +1 @@
-hello world
+goodbye world
```

You can see that we made a change to `hello.txt` by removing `hello world` and adding `goodbye world`.

## Branches

Git supports the ability to branch your code. This allows you to work on variations of the code while still allowing progress on the main branch. For example, if you wanted to work on a new feature named `A` without interrupting work on the master branch, you would use the `git branch A` command to create a new branch named `A`, then start working on the new branch with the `git checkout A` command. Now commits can be done to either the `master` branch or the `A` branch. When you want to combine the work done on both branches, you checkout the `master` branch and execute `git merge A`. If you decide you want to abandon the new feature, then you just don't ever merge it back into the master branch.

Here is a demonstration of this working on the visualization tool provided by [git-school.github.io](https://git-school.github.io/visualizing-git/).

![Branches](essentialsBranching.gif)

## Commit often

You will be required to have at least 4 commits for each project that you submit in order to get full credit. Commonly, this will be an initial commit that contains empty project files, followed by commits at each functional milestone, and then a final commit for the working project. Committing your code often is an important practice for you to develop. It protects you from losing your work, allows access from anywhere, makes it so you can quickly share changes, reduces conflicts with your peers, and enables you to efficiently explore different possibilities. This also enables others to review the progression of your development efforts in order to prove the originality of your work.

Remember to make meaningful commit messages that describe the **what** and **why** of the changes made. Here is a [good post](https://www.freecodecamp.org/news/how-to-write-better-git-commit-messages/) on how to make meaningful commit messages.

## Binary files

You can store any type of file in Git, but be aware that if you store large binary files, such as images or videos, you are storing a copy of that file each time you make a change to it. For example, suppose you use Git to track the changes you make to a video production project. Every time you save a change to your 10 GB video file you store a complete copy of the file. That means 10 commits of the video file will store 100 GB of data in your repository.

## VS Code and Git

Knowing how to use Git from the console is a very valuable skill. Git offers a wide variety of functionality such as creating branches of the repository, temporarily stashing changes, and cloning repositories to other machines.

However, by using a tool like VS Code you can hide all of the complexity of the command line and use a visual interface instead.

Here we see VS Code, with the GitLens extension installed, looking at the directory we have been working in. On the left you see all the commits we have previously created. We can edit our `hello.txt` file and VS Code will automatically detect the change and set it up for us to commit. VS Code will even put a marking on the left side of the edited text to show us what line we have changed. We can click on the staged file, in the commit area, and see the differences before we commit. Since they look good, we add a comment, and press commit. The new commit immediately shows up in our list of commits. We can use the visual diff again to click through all of the previous versions.

![VS Code Git](essentialsVSCodeGit.gif)

Underneath the covers, the GitLens extension is running Git commands just like we did on the command line, but using a visual tool makes working with versions much easier. Take some time and play with adding files, modifying them, committing, and diffing. You want to get to the point where this is second nature so that you can easily experiment and make mistakes, knowing that with Git, you can always easily recover.

# GitHub

<a id="github"></a>GitHub:
[go to top](#top)


![GitHub logo](essentialsGitHubLogo.png)

🔑 **Required reading**:

- [GitHub create a repo](https://docs.github.com/en/get-started/quickstart/create-a-repo)
- [GitHub cloning a repo](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository)
- [GitHub personal access tokens](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token)

When we introduced `Git`, we said that Git provides two things, 1) Version tracking in a repository, and 2) the ability to clone a copy of the repository to a different location. You can clone repositories between computers used by your development team, but the management of cloning repositories is much easier when you use a cloud based service such as `GitHub`.

GitHub was launched in 2008 by a small group of developers that wanted to make code collaboration easy. GitHub was acquired by Microsoft in 2018 for $7.5 billion. Since its beginning as a simple web application for cloning and storing Git repositories, GitHub has added functionality for hosting websites, supporting community pull requests, tracking issues, hosting codespaces, running continuous deployment processes, managing projects, and even AI driven code generation.

We are going to use GitHub for three things.

1. Hosting all of this instruction. Because it is hosted on GitHub you can generate pull requests when you see things that need improvement.
1. Publicly hosting your project repositories. This creates a backup copy of your code, demonstrates your progress with your commit history, allows for reviews of your code, and makes it so you can collaborate with your peers. It also looks good on a resume!
1. Keeping notes about what you have learned and things you want to remember.

## Creating a GitHub account

If you do not already have a GitHub account then go and [create one now](https://github.com). GitHub provides a free version of their services that will more than cover your usage in this class. Chances are that once you start using GitHub you will use this account for many years to come, both for personal and professional projects.

## Creating and cloning a repository

While you can create a repository in your development environment using `git init` and then connect it to an upstream repository on GitHub, it is always easier to create your repository first on GitHub and then clone it to your development environment. That way your local repository and your GitHub repository are automatically linked to each other.

To create a repository in GitHub, log into your account, select the `Repositories` tab, and press `New repository`. You then specify a unique repository name, give a description, indicate that you want it to be public, add a default README.md file, and choose a license.

![GitHub create repository](essentialsGitHubCreateRepo.jpg)

Every repository in GitHub has a unique URL assigned to it. Assuming the repository is public, anyone with the URL can clone it to their development environment. A repository clone is an exact copy of the repository including all of the commits, comments, and SHAs. It also configures the clone to know what the remote source is so that you can use Git commands to keep them in sync as changes are made. In this case, the remote source is the GitHub repository.

![GitHub clone](essentialsGitHubClone.jpg)

You clone a repository by providing the GitHub repository's URL as a parameter to the `git clone` command from in a console window. You can get a copy of the URL from the repository's GitHub page and clicking on the green `Code` button, and then clicking on the copy button next to the HTTPS URL.

![GitHub clone URL](essentialsGitUrlButton.jpg)

When you clone a repository it is placed in a subdirectory named with the name of the repository. So make sure you are in the directory where you keep all of your source repositories before you run the command.

```sh
➜  git clone https://github.com/webprogramming260/startup-example.git

Cloning into 'startup-example'...
remote: Total 4 (delta 0), reused 0 (delta 0), pack-reused 0
Receiving objects: 100% (4/4), done.

➜  cd startup-example
```

## Making changes

You can now make changes to the files in the repository and commit those changes. As you create new commits on your local clone, you want to push those changes back up to the GitHub clone of the repository so that the repositories are in sync with each other. This is done with the `push` Git command. Once you have pushed the new commits then your peers who have cloned the repository can pull the commits down using the `pull` Git command.

![GitHub pull](essentialsGitHubPull.jpg)

The following demonstrates console commands for making a change to a `test.md` file, committing it, and then pushing it up to GitHub. Of course you can also do this using the Git interface of VS Code.

```sh
➜  printf "\nChange from my development environment!\n" >> test.md

➜  git add test.md

➜  git commit -am "update(notes) thoughts about startup applications"

➜  git push
```

This is the pattern that you want to make a reflexive part of your development process.

1. Pull the repository's latest changes from GitHub (`git pull`)
1. Make changes to the code
1. Commit the changes (`git commit`)
1. Push the changes to GitHub (`git push`)

⚠ Note: The first time you make a push request to a repository Git will ask you how you want to identify yourself and what credential (e.g. password) to use in order to authenticate with GitHub. You will need to create a [Personal Access Token](https://docs.github.com/en/authentication/keeping-your-account-and-data-secure/creating-a-personal-access-token) and provide that as your password.

```sh
*** Please tell me who you are

Run
  git config --global user.email "you@example.com"
  git config --global user.name "Your name"
```

Make sure you use the email that you provided for your GitHub account.

After pushing changes to GitHub, you can then view the changes on GitHub with your browser. In the example above, you would see the changes to the `test.md` file. You can also edit and commit changes directly from GitHub. When looking at a repository file on GitHub you will see a little pencil in the top right hand corner of the file. If you press that you will enter edit mode. You use that to modify the file and then commit the changes with an appropriate comment.

![GitHub edit](essentialsGitHubEdit.jpg)

Now there is a commit that GitHub has, but you do not have in your development environment. If we run the `fetch` Git command, you will get the latest information about the changes on GitHub without actually changing your local repository. We then run the `status` Git command to see the differences between the clones and see that we are missing a commit. You can pull it down using the `pull` Git command. You can also use the Git functionality in VS Code to view the status and sync up your repository.

```sh
➜  git fetch
➜  git status
Your branch is behind 'origin/main' by 1 commit, and can be fast-forwarded.
  (use "git pull" to update your local branch)

➜  git pull
Updating d13a9ce..cafe81a
Fast-forward
 test.md | 4 +++-
 1 file changed, 3 insertions(+), 1 deletion(-)
```

After running the pull command, your development clone and the GitHub clone are now the same.

## Handling merge conflicts

By pushing and pulling often, everyone keeps an up to date copy of the repository. This is important so that you don't run into merging problems caused by two peers modifying the exact same code. Merging only becomes something you have to deal with when two people modify the exact same line of code. However, when you have two peers working together you are always going to have a merge conflict at some point in time and so let's discuss how to handle this.

We can simulate a merge conflict by editing a line in a file and committing the file in your development environment, and before pushing that change, modifying the same line using GitHub. Now, run `fetch` and `status` again in your console.

```sh
➜  git fetch
➜  git status
Your branch and 'origin/main' have diverged,
and have 1 and 1 different commits each, respectively.
  (use "git pull" to merge the remote branch into yours)
```

This shows that the cloned repositories have diverged from each other. Normally this is fine and we can just push and pull the different commits, but if we do that this time, we will get an error because the exact same line was changed in the two different commits. Git doesn't know which change to keep.

```sh
➜  git pull

Auto-merging test.md
CONFLICT (content): Merge conflict in test.md
Automatic merge failed; fix conflicts and then commit the result.
```

We now need to resolve the merge conflict that it says has happened with our `test.md` file. If you are using VS Code with the GitLens extension installed it will visually walk you through this process. However, so you can understand what is going on, we will do this using the console. The first step is to open up `test.md` in an editor. You will see that git has injected lines that highlight where the conflict is. Both your local change and the change made on GitHub are included.

```diff
An example startup application

Change from my development environment!

Change from GitHub

<<<<< HEAD
Conflict change made in development environment
=======
Conflict change made in GitHub
>>>>> b9f4c53c91eff509993d7291e60148f903827de0
```

We resolve the conflict by modifying the file to remove the textual conflict delimiters and modifying the file to keep the changes we want. When we are done editing, our file contains what we want from both commits.

```md
# startup-example

An example startup application

Change from my development environment and from GitHub
```

Now that the conflict is resolved we commit our resolution and push up the result.

```sh
➜  git commit -am "merge(notes) combined both edits"
➜  git push
```

If you go look at the file again on GitHub you will see the additional commit in the history and the result of our merge in the file content.

## README.md

Keeping notes of what you have learned and things that you want to remember is an essential step for accelerating your web programming skills. GitHub supports the inclusion of a file with the special name `README.md` in the root of your repository. The `README.md` file is displayed in GitHub when you view your repository. This file uses `Markdown` syntax. If you have not used Markdown before, then take some time to [learn how to use it](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax). For this course you will use your startup application's `README.md` file to describe the modifications and alterations that you make to your startup.

You will also create another Markdown file named `notes.md` to track what you have learned in the course. You can use anything that you put in your `notes.md` file when taking the midterm or final.

## Forks

A GitHub fork provides the ability to create a copy of a GitHub repository. Usually you [fork a repo](https://docs.github.com/en/get-started/quickstart/fork-a-repo) to get a copy of an open source code base that you want to experiment with, or contribute to. For example, the repository containing these instructions. A fork is similar to cloning a repository to your development environment, but it clones to GitHub instead. Then pull the fork down to your development environment to work on it. The fork maintains a link to the upstream (original) repository that allows you to easily pull down updates and merge them with your fork. A fork also allows you to create a pull request in order to push suggested changes to the original repository.

If you have never forked a repository before you should go find an open source project that interests you. For example, here is the [Dad Jokes API](https://github.com/DadJokes-io/Dad_Jokes_API). This simple web service provides an endpoint to get a joke. Consider forking this repository in order to experiment with how it works. Don't worry too much about what the code is doing. That will make more sense as the class goes on.

![GitHub fork](essentialsGitHubFork.jpg)

It would be awesome if we can increase the fork count for `Dad Jokes API` into the hundreds. Also make sure you push the `Star` button to show that you like the repo. Let's blow KegenGuyll's mind!

## Pull requests

📖 **Deeper dive reading**:

- [GitHub Pull Requests](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/about-pull-requests)
- [GitHub pulls from forks](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/proposing-changes-to-your-work-with-pull-requests/creating-a-pull-request-from-a-fork)

GitHub allows you to create a fork of any repository on GitHub. You just push the `Fork` button from the repository's GitHub page. You can then make modifications to the repository fork and push the changes as a _pull request_. This notifies the original repository's owner that a request is being made to enhance the original repository. The owner can review your changes and if appropriate commit the changes into the original. This is how open source communities manage development from a volunteer group of global developers.

In this class, if you notice something in the instruction that needs to be enhanced, feel free to fork the repo, and make a pull request. This will give you experience with this practice and improve the instruction for others at the same time. Plus your name will be included as a contributor. How cool is that!

# Development and production environments

<a id="dev-and-prod"></a>devAndProd:
[go to top](#top)


When working on a commercial web application, it is critical to separate where you develop your application, from where the production release of your application is made publicly available. Often times there are more environments than this, such as staging, internal testing, and external testing environments. If your company is seeking third party security certification (such as SOC2 compliance) they will require that these environments are strictly separated from each other. A developer will not have access to the production environment in order to prevent a developer from nefariously manipulating an entire company asset. Instead, automated integration processes, called continuous integration (`CI`) processes, checkout the application code, [lint it](https://www.freecodecamp.org/news/what-is-linting-and-how-can-it-save-you-time/), build it, test it, stage it, test it more, and then finally, if everything checks out, **deploy** the application to the production environment, and notify the different departments in the company of the release.

![Complex deployment](essentialsDeploymentComplex.jpg)

For our work, you will use and manage both your _development environment_ (your personal computer) and your _production environment_ (your AWS server). However, you should never consider your production environment as a place to develop, or experiment with, your application. You may shell into the production environment to configure your server or to debug a production problem, but the deployment of your application should happen using an automated CI process. For our CI process, we will use a very simple console shell script.

![Simple deployment](essentialsDeploymentSimple.jpg)

## Automating your deployment

The advantage of using an automated deployment process is that it is reproducible. You don't accidentally delete a file, or misconfigure something with an stray keystroke. Also, having a automated script encourages you to iterate quickly because it is so much easier to deploy your code. You can add a small feature, deploy it out to production, and get feedback within minutes from your users.

Our deployment scripts change with each new technology that we have to deploy. Initially, they just copy up a directory of HTML files, but soon they include the ability to modify the configuration of your web server, run transpiler tools, and bundle your code into a deployable package.

You run a deployment script from a console window in your development environment with a command like the following.

```sh
./deployService.sh -k ~/prod.pem -h yourdomain.click -s simon
```

The `-k` parameter provides the credential file necessary to access your production environment. The `-h` parameter is the domain name of your production environment. The `-s` parameter represents the name of the application you are deploying (either `simon` or `startup`).

This will make more sense as we gradually build up our technologies but we can discuss our simon-service deployment script as an example of what they will do. You can view the [entire file here](https://github.com/webprogramming260/simon-service/blob/main/deployService.sh), but we will explain each step below. It isn't critical that you deeply understand everything in the script, but the more you do understand the easier it will be for you to track down and fix problems when they arise.

The first part of the script simply parses the command line parameters so that we can pass in the production environment's security key (or PEM key), the hostname of your domain, and the name of the service you are deploying.

```sh
while getopts k:h:s: flag
do
    case "${flag}" in
        k) key=${OPTARG};;
        h) hostname=${OPTARG};;
        s) service=${OPTARG};;
    esac
done

if [[ -z "$key" || -z "$hostname" || -z "$service" ]]; then
    printf "\nMissing required parameter.\n"
    printf "  syntax: deployService.sh -k <pem key file> -h <hostname> -s <service>\n\n"
    exit 1
fi

printf "\n----> Deploying $service to $hostname with $key\n"
```

Next the script copies all of the applicable source files into a distribution directory (`dist`) in preparation for copying that directory to your production server.

```sh
# Step 1
printf "\n----> Build the distribution package\n"
rm -rf dist
mkdir dist
cp -r application dist
cp *.js dist
cp package* dist
```

The target directory on your production environment is deleted so that the new one can replace it. This is done by executing commands remotely using the secure shell program (`ssh`).

```sh
# Step 2
printf "\n----> Clearing out previous distribution on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
rm -rf services/${service}
mkdir -p services/${service}
ENDSSH
```

The distribution directory is then copied to the production environment using the secure copy program (`scp`).

```sh
# Step 3
printf "\n----> Copy the distribution package to the target\n"
scp -r -i $key dist/* ubuntu@$hostname:services/$service
```

We then use `ssh` again to execute some commands on the production environment. This installs the node packages with `npm install` and restarts the service daemon (`PM2`) that runs our web application in the production environment.

```sh
# Step 4
printf "\n----> Deploy the service on the target\n"
ssh -i $key ubuntu@$hostname << ENDSSH
cd services/${service}
npm install
pm2 restart ${service}
ENDSSH
```

Finally we clean up our development environment by deleting the distribution package.

```sh
# Step 5
printf "\n----> Removing local copy of the distribution package\n"
rm -rf dist
```

Can you imagine if you had to do all of that by hand every time? You would dread deploying and would most likely make several time consuming mistakes during the process.

A deployment script exists for each of the Simon projects and you can use them, as is, for your startup application as long as you are doing similar types of deployment actions.

If you want to learn more about shell scripting you can [read this tutorial](https://ryanstutorials.net/bash-scripting-tutorial/bash-script.php). Shell scripting is a powerful tool for automating common development tasks and is well worth adding to your bucket of skills.

# CodePen

<a id="codepen"></a>CodePen:
[go to top](#top)

This course makes extensive use of the coding sandbox website [CodePen](https://codepen.io). ⚠ You must create a free account on CodePen if you do not already have one. With your account you can experiment with HTML, CSS, JavaScript, and React. These experiments are saved in a "pen". Every pen has a unique URL.

The power of CodePen is that it immediately renders your code in the preview window. This makes it so you can reduce a problem to something small, quickly iterate ideas, and immediately see what the impact is. CodePen also serves as a portfolio of what you have learned so that you can review it later or share it with others.

When working with assignments that use CodePen to submit your work, you will do the following steps:

1. Either create a new pen, or fork an existing example pen.
1. Conduct the experiment as defined by the assignment.
1. Save your assignment periodically so that you don't lose any work. In order to keep your CodePen account organized you should consider using pen collections for different technologies.
1. Submit the pen's URL in Canvas along with a description of some interesting thing that you learned.

![CodePen](codePen.jpg)

In addition to using CodePen to complete assignments, it is a great place to find coding examples. Browsing CodePen will expose you to new ideas from their large community of contributors. You might consider making a daily habit of finding and reviewing a pen. If you find a really interesting pen then share it with others on Discord.

# Startup deliverable - specification

<a id="startup-spec"></a>Startup specification:
[go to top](#top)


Your startup application demonstrates your mastery of the instruction presented by this course. Make sure you put significant effort into coming up with a simple yet interesting idea. Your application needs to demonstrate the use of HTML, CSS, JavaScript, calling web services, providing web services, authentication, storing data persistently, and using web sockets for sending realtime data to and from your server.

Create an elevator pitch for your application. Something that would excite an investment firm if you happen to catch a ride up the elevator with one of their representatives. Or maybe just sound cool to your friends if they are your target audience. This should be no more than a paragraph in length.

Then sketch out what the application looks like. You can use a tool like [NinjaMock.com](https://ninjamock.com/) to quickly produce a rough layout. Google docs, or plain old paper works fine too (just take pictures or screenshots for your submission).

![Ninja Mocks](essentialsNinjaMocks.png)

Here is an [example design](https://github.com/webprogramming260/startup-example/blob/main/README.md).

## Represent all technologies

Make sure that your specification represents how you will represent all of the class technologies. This includes the following:

- **Authentication**: An input for your user to create an account and login. You will want to display the user's name after they login.
- **Database data**: A rendering of application data that is stored in the database. For Simon, this is the high scores of all players.
- **WebSocket data**: A rendering of data that is received from your server. This may be realtime data sent from other users (e.g. chat or scoring data), or realtime data that your service is generating (e.g. stock prices or latest high scores). For Simon, this represents every time another user creates or ends a game.

## Using Markdown

Take some time to properly learn how to use Markdown in your `README.md` and `notes.md` files. Read the [GitHub documentation](https://docs.github.com/en/get-started/writing-on-github/getting-started-with-writing-and-formatting-on-github/basic-writing-and-formatting-syntax) for examples on how to use Markdown. Refer to the [example design](https://github.com/webprogramming260/startup-example/blob/main/README.md) to see how to embed images. Make sure your images are in a format that browsers natively support such as JPG, GIF, or PNG.

# Markdown Cheat Sheet:

<a id="markdown-cheat-sheet"></a>Markdown Cheat Sheet:
[go to top](#top)

This is intended as a quick reference and showcase. For more complete info, see John Gruber's original spec and the Github-flavored Markdown info page.

Note that there is also a Cheatsheet specific to Markdown Here if that's what you're looking for. You can also check out more Markdown tools.

(note: see code to view implementation of markdown elements).

## Headers:

# H1
## H2
### H3
#### H4
##### H5
###### H6

Alternatively, for H1 and H2, an underline-ish style:

Alt-H1
======

Alt-H2
------

## Emphasis:

Emphasis, aka italics, with *asterisks* or _underscores_.

Strong emphasis, aka bold, with **asterisks** or __underscores__.

Combined emphasis with **asterisks and _underscores_**.

Strikethrough uses two tildes. ~~Scratch this.~~

## Lists:

(In this example, leading and trailing spaces are shown with with dots: ⋅)

1. First ordered list item
2. Another item
⋅⋅* Unordered sub-list. 
1. Actual numbers don't matter, just that it's a number
⋅⋅1. Ordered sub-list
4. And another item.

⋅⋅⋅You can have properly indented paragraphs within list items. Notice the blank line above, and the leading spaces (at least one, but we'll use three here to also align the raw Markdown).

⋅⋅⋅To have a line break without a paragraph, you will need to use two trailing spaces.⋅⋅
⋅⋅⋅Note that this line is separate, but within the same paragraph.⋅⋅
⋅⋅⋅(This is contrary to the typical GFM line break behaviour, where trailing spaces are not required.)

* Unordered list can use asterisks
- Or minuses
+ Or pluses

## Links:

There are two ways to create links.

[I'm an inline-style link](https://www.google.com)

[I'm an inline-style link with title](https://www.google.com "Google's Homepage")

[I'm a reference-style link][Arbitrary case-insensitive reference text]

[I'm a relative reference to a repository file](../blob/master/LICENSE)

[You can use numbers for reference-style link definitions][1]

Or leave it empty and use the [link text itself].

URLs and URLs in angle brackets will automatically get turned into links. 
http://www.example.com or <http://www.example.com> and sometimes 
example.com (but not on Github, for example).

Some text to show that the reference links can follow later.

[arbitrary case-insensitive reference text]: https://www.mozilla.org
[1]: http://slashdot.org
[link text itself]: http://www.reddit.com

## Images:

Here's our logo (hover to see the title text):

Inline-style: 
![alt text](https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 1")

Reference-style: 
![alt text][logo]

[logo]: https://github.com/adam-p/markdown-here/raw/master/src/common/images/icon48.png "Logo Title Text 2"

## Code and Syntax Highlighting:

Code blocks are part of the Markdown spec, but syntax highlighting isn't. However, many renderers -- like Github's and Markdown Here -- support syntax highlighting. Which languages are supported and how those language names should be written will vary from renderer to renderer. Markdown Here supports highlighting for dozens of languages (and not-really-languages, like diffs and HTTP headers); to see the complete list, and how to write the language names, see the highlight.js demo page.

Inline `code` has `back-ticks around` it.

Blocks of code are either fenced by lines with three back-ticks ```, or are indented with four spaces. I recommend only using the fenced code blocks -- they're easier and only they support syntax highlighting.

```javascript
var s = "JavaScript syntax highlighting";
alert(s);
```
 
```python
s = "Python syntax highlighting"
print s
```
 
```
No language indicated, so no syntax highlighting. 
But let's throw in a <b>tag</b>.
```

var s = "JavaScript syntax highlighting";
alert(s);

s = "Python syntax highlighting"
print s

No language indicated, so no syntax highlighting in Markdown Here (varies on Github). 
But let's throw in a <b>tag</b>.

## Footnotes:

Footnotes aren't part of the core Markdown spec, but they supported by GFM.

Here is a simple footnote[^1].

A footnote can also have multiple lines[^2].  

You can also use words, to fit your writing style more closely[^note].

[^1]: My reference.
[^2]: Every new line should be prefixed with 2 spaces.  
  This allows you to have a footnote with multiple lines.
[^note]:
    Named footnotes will still render with numbers instead of the text but allow easier identification and linking.  
    This footnote also has been made with a different syntax using 4 spaces for new lines.

Renders to:

rendered footnotes

## Tables:

Tables aren't part of the core Markdown spec, but they are part of GFM and Markdown Here supports them. They are an easy way of adding tables to your email -- a task that would otherwise require copy-pasting from another application.

Colons can be used to align columns.

| Tables        | Are           | Cool  |
| ------------- |:-------------:| -----:|
| col 3 is      | right-aligned | $1600 |
| col 2 is      | centered      |   $12 |
| zebra stripes | are neat      |    $1 |

There must be at least 3 dashes separating each header cell.
The outer pipes (|) are optional, and you don't need to make the 
raw Markdown line up prettily. You can also use inline Markdown.

Markdown | Less | Pretty
--- | --- | ---
*Still* | `renders` | **nicely**
1 | 2 | 3

## Blockquotes:

> Blockquotes are very handy in email to emulate reply text.
> This line is part of the same quote.

Quote break.

> This is a very long line that will still be quoted properly when it wraps. Oh boy let's keep writing to make sure this is long enough to actually wrap for everyone. Oh, you can *put* **Markdown** into a blockquote.

## Inline HTML:

You can also use raw HTML in your Markdown, and it'll mostly work pretty well.

<dl>
  <dt>Definition list</dt>
  <dd>Is something people use sometimes.</dd>

  <dt>Markdown in HTML</dt>
  <dd>Does *not* work **very** well. Use HTML <em>tags</em>.</dd>
</dl>

## Horizontal Rule:

Three or more...

---

Hyphens

***

Asterisks

___

Underscores

## Line Breaks:

My basic recommendation for learning how line breaks work is to experiment and discover -- hit <Enter> once (i.e., insert one newline), then hit it twice (i.e., insert two newlines), see what happens. You'll soon learn to get what you want. "Markdown Toggle" is your friend.

Here are some things to try out:

Here's a line for us to start with.

This line is separated from the one above by two newlines, so it will be a *separate paragraph*.

This line is also a separate paragraph, but...
This line is only separated by a single newline, so it's a separate line in the *same paragraph*.

(Technical note: Markdown Here uses GFM line breaks, so there's no need to use MD's two-space line breaks.)

## YouTube Videos:

They can't be added directly but you can add an image with a link to the video like this:

<a href="http://www.youtube.com/watch?feature=player_embedded&v=YOUTUBE_VIDEO_ID_HERE
" target="_blank"><img src="http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg" 
alt="IMAGE ALT TEXT HERE" width="240" height="180" border="10" /></a>

Or, in pure Markdown, but losing the image sizing and border:

[![IMAGE ALT TEXT HERE](http://img.youtube.com/vi/YOUTUBE_VIDEO_ID_HERE/0.jpg)](http://www.youtube.com/watch?v=YOUTUBE_VIDEO_ID_HERE)

Referencing a bug by #bugID in your git commit links it to the slip. For example #1.

License: CC-BY

[go to top](#top)



# Web Servers:





# IP address and SSH into server
http://44.218.29.30/  IP address for server

Now, let's remote shell into your server and see what is under the hood. Go to your console window and use SSH to shell into the server. You will need to supply the public IP address (copied from the EC2 instance details) and the location of your key pair file that you created/used when you launched your instance. Hopefully, you saved that off to a safe location in your development environment; otherwise you will need to terminate your instance and create a new one, with a new key.

➜  ssh -i [key pair file] ubuntu@[ip address]
For example,

➜  ssh -i ~/keys/production.pem ubuntu@53.104.2.123
⚠ You may get a warning that your key pair file permissions are too open. If so then you can restrict the permissions on your file so that they are not accessible to all users by running the chmod console command:

 `chmod  600 [key pair file]`
⚠ As it connects to the server it might warn you that it hasn't seen this server before. You can confidently say yes since you are sure of the identity of this server.

Once it has connected, you are now looking at a console window for the web server that you just launched and you should be in the ubuntu user's home directory. If you run ls -l, you should see something like the following. (Note that the dates might appear different.)

➜  ls -l

total 4
lrwxrwxrwx 1 ubuntu ubuntu   20 Apr 13 15:06 Caddyfile -> /etc/caddy/Caddyfile
lrwxrwxrwx 1 ubuntu ubuntu   16 Apr 13 15:06 public_html -> /usr/share/caddy
drwxrwxr-x 4 ubuntu ubuntu 4096 Apr 13 16:48 services
The Caddyfile is the configuration file for your web service gateway. The public_html directory contains all of the static files that you are serving up directly through Caddy when using it as a web service. We will cover Caddy configuration in a later instruction. The services directory is the place where you are going to install all of your web services once you build them.

Once you are done poking around on your server, you can exit the remote shell by running the exit command. That is everything. You will only change a few configuration settings on your server in the future. Usually, changes to the server are always done using an automated continuous integration process.


for simon.css, I deployed it to my domain, mostly the same as the original simon.css file, except that I made the color for the .event in the play.css file a little darker to make it more visible.
