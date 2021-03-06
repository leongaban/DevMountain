# DevMountain Angular I

[Google slides](https://docs.google.com/presentation/d/17v_3GC8498EQWVYk2xX9eglSNr1sfZ5JjZ_lTsGkKZ8/edit#slide=id.g725cfe201_2_47)

## Intro
--------------------------------------------------------------------------------
Hi everyone, I'm Leon Gaban, frontend developer for the Dallas based startup [TickerTags.com](https://tickertags.com)

All day I work with design files, write markup and CSS and develop Angular based Single Page Applications. Right now I'm using Angular and the Ionic framework to develop mobile app. Frontend development now expands into many more areas than it use too, desktop apps, mobile apps, fridge apps and more, the skills we're developing are the skills to craft user experiences.

I'm 100% self-taught, I went to school for art and design not computer science, learned everything I know online through tuts+, teamtreehouse, codeacademy, youtube etc... I wish there was a bootcamp option like this for me back in the day, I would have jumped on it.

We're builders, backend developers create the foundation. Frontend developers wire up the electricity and water, put up the walls, paint them, install windows, style doors, handles, put in the bushes and flowers. We make shit look pretty, functional and work smoothly... and full stack developers do it all.

# jQuery & Angular

What are the differences between jQuery and Angular?

First both are Javascript frameworks, frameworks abstract complexity from languages. What we write is Javascript, however building apps in pure vanilla Javascript is a pain in the ass. Frameworks help us by refining the language so it can be used easier in a concise way to accomplish specific things.

The jQuery framework is a framework designed to allow us to easily manipulate the DOM, the HTML Markup. We can grab elements, like divs, p tags, H1s, etc and move them around, change their css classes, animate things, etc.

Now as things have evolved, we developers aren't so much making websites anymore as we're making apps in a variety of spaces. And this is what the Angular framework specializes in, Angular helps us create Single Page Applications. There is this concept called seperation of concerns, and Angular handles this beautifully with it's modules. For example the Angular Controller module is what we use to handle and manipulate data, Angular Directives handles the view and lets us interact with the DOM. Angular services allow us a way to further seperate logic out of controllers, services take care of specific tasks in your app, stuff from simple string manipulation or handling REST API calls. All that comes with Angular out of the box.

Learning curve graphic

# SPAs Single Page Applications.

**What problems do SPAs help us solve?**
  - They provide a smooth, intuitive user experience (compared to webpages)
  - Apps are fully downloaded, and only make requests to the server for relevant data
  - We're in the age of apps not web pages anymore. Forcing page refreshes is the old way of doing things.

# Angular Directives

**What is an Angular directive?**

A directive is an Angular module whose purpose is to interact with the DOM, controllers manipulate $scopes and data, services provide specialized utility. Directives render, represent and attaches specific behavior the views of our apps.

**What types of Angular directives exist?**
  - Elements
  - Attributes
  - Classes
  - Comments

Classes and Comments are very rarely used, in fact I would suggest not worrying about Classes or Comments, those may already be deprecated. The most used directives in Angular are Elements and Attributes.

An example of an element directive is a custom HTML tag such as <tags-panel></tags-panel> or <overlay></overlay>

**Element directives**
Will be how you build and arrange the foundation of your app. Using a house analogy again, Element directives is how you know do the walls go, the kitchen, doors etc.

**Attribute directives**
What are some examples of Angular attribute directives?

  - ng-repeat
  - ng-show
  - ng-hide
  - ng-click
  - ng-model
  - ng-app
  - ng-class

You can write your own custom attribute directives to solve very specific problems, in my experience [I've only had to write 1 so far](https://gist.github.com/leongaban/9512645ab01e74bb0663).

# What is binding in Angular?
[Have everyone turn to their neighbor, take 15 seconds to explain binding to them. Then have some share their description]

The **ngModel** directive binds an input, select, textarea (or custom form control) to a property on the scope using NgModelController, which is created and exposed by this directive.

Basically it connects your forms to your controllers:

  - Binds the view into the model, used for forms like input, textarea or select
  - Provides validation behavior
  - Keeping the state of control (valid/invalid, dirty/pristine, touched/untouched, validation errors).
  - Sets related css classes on the element

```
<div ng-controller="ExampleController">
  <form novalidate class="simple-form">
    Name:   <input type="text"  ng-model="user.name" /><br />
    E-mail: <input type="email" ng-model="user.email" /><br />
    <input type="submit" ng-click="update(user)" value="Save" />
  </form>
</div>
```

When the data above is submitted ng-model captures the data and sends it into the Controller scope.

**ngBind**
The ngBind attribute tells Angular to replace the text context of specific HTML elements with the expression value:
```
<span ng-bind="name"></span>
```
^ This method of binding waits for the view and variable to be updated before displaying. ng-bind will only apply once the value actually changes.
```
<span>{{name}}</span>
```
^ With this method there is a chance due to performance that the user will see your binding variable before it gets updated. I currently use this method the most, but may chance as I continue to refactor my own work.

# What is a filter?

How do filters apply to a directive like ng-repeat?
https://scotch.io/tutorials/all-about-the-built-in-angularjs-filters

Filters allow you to manipulate and filter the presentation of your views, the data in your views.
Types of data that filters work great for:
  - Alphanumeric (letters, numbers)
  - Dates
  - Currencies
  - JSON objects

Here are some examples:

**Date filter**

```
<p>{{ 1400956671914 | date: 'dd-MM-yyyy' }}</p>
```

When rendered, the DOM will look like this:
```
<p>24-05-2014</p>
```

Example of a custom Capitalize filter:

```
var app = angular.module('app', []);

app.controller('Ctrl', function ($scope) {
   $scope.msg = 'hello, world.';
});

app.filter('capitalize', function() {
    return function(input) {
      return (!!input) ? input.charAt(0).toUpperCase() + input.substr(1).toLowerCase() : '';
    }
});
```

In the Markup:
```
<div ng-app="app">
    <div ng-controller="Ctrl">
        <p><b>My Text:</b> {{msg | capitalize}}</p>
        <!-- My Text: Hello, world. -->
    </div>
</div>
```

Used to limit characters:
```
LimitTo Filter Applied to a String:
{{ copy | limitTo:150 }}

LimitTo Filter Applied to an Array:
<ul>
  <li ng-repeat="person in list | limitTo:4"> {{person}} </li>
</ul>
```

# What is a $scope?
$scope is the "glue" between the view and the controller

How do we use $scope to put data into our view?
  - ng-bind
  - scope variables or syntax as variables

```
$scope.username = "Leon Gaban"
```
```
<h1>username</h1>
```

If you use Scope, I suggest setting the $scope to the variable vs or ViewScope.

**Controller as syntax** (The in vogue way of handling scope)
It's more verbose.

[John Papa's Angular style guide](https://github.com/johnpapa/angular-styleguide)

[controllerAs with vm](https://github.com/johnpapa/angular-styleguide#style-y031)

```
  this.username = "Leon Gaban";
  // or

  var vm = this;
      vm.username = "Leon Gaban";
```
```
<div ng-controller="UserCtrl as usr">
  <h1>usr.username</h1>
</div>
```

https://github.com/DevMountain/mini-BabiesFirstAngular
