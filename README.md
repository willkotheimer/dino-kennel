
# Week 6 - JS Array Methods
This was an assignment to give us the opportunity to use different array methods. It was based on some use cases in a fictional business setting that would invole common uses of sorting, filtering and finding data. The methods used in this assignment were the following:

1. `forEach()`
1. `filter()`
1. `map()`
1. `find()`
1. `reduce()`
1. `sort()`


## Motivation
The motivation for this assignment was to learn about these methods and how to use them. Some of them are not trivial to use and required knowing how to pass data parameters to make them work in the way that was intended. This helped me to build my skill in these areas and also get me a starting place for a working prototype for uses in later projects.

## Build status
MVP is complete. There are stretch goals in the assignment that may be added later as time allows.

## Code Style
Jquery ES6, HTML5, CSS3

## Screenshots

![](./jqueryArraysMethods.gif)

## URL

[https://jqueyarraymethods.netlify.app/](https://jqueyarraymethods.netlify.app/)

[![Netlify Status](https://api.netlify.com/api/v1/badges/1cc062e7-c31e-40a3-a2de-cb3e574cfdf0/deploy-status)](https://app.netlify.com/sites/jqueyarraymethods/deploys)

## Features
Features to sort by business name, find business and a function that grabs particular data out of one array and maps data from another array for displaying.

## Code Example
```             

const myPurchaseAgents = (businesses) => {

    const agents = $("#purchasingAgents")
    agents.html('<h1>Purchasing Agents</h2>');
    const purchasingAgents = businesses.map(business => {
        return business.purchasingAgent;
    });

    console.table(purchasingAgents);

    const myPurchaseAgents = businesses.map((agent) => {
        return {
            "fullName": agent.purchasingAgent.nameFirst + " " + agent.purchasingAgent.nameLast,
            "company": agent.companyName,
            "phoneNumber": agent.phoneWork,
        }
    }

    );
    myPurchaseAgents.forEach(myagent => {
        agents.append(`
        <section>
        <div>${myagent['fullName']}</div>
        <div>${myagent['company']}</div>
        <div>${myagent['phoneNumber']}</div>
        </section>`);

    });



    console.table(myPurchaseAgents);

    agents.append(myPurchaseAgents);
    agents.append("<hr/>")
}

export { myPurchaseAgents }
```
## The Team
[Will Kotheimer](https://github.com/willkotheimer)


